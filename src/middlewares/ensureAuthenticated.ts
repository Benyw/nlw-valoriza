import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json({ error: 'Unauthorized!' });
  }

  const [, token] = authToken.split(' ');

  try {
    const decode = verify(
      token,
      '630f0ee189b5ab3e9da117c94bfde2e7'
    ) as IPayload;

    request.user_id = decode.sub;
    request.token = token;

    return next();
  } catch (err) {
    return response.status(401).json({ error: 'Unauthorized!' });
  }
}
