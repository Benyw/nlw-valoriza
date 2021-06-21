import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.send('Fala DEV!');
});

app.post('/test-post', (request, response) => {
  return response.send('Suas informações foram captadas com sucesso!');
})

app.listen(3000, () => {
  console.log('Server is running!');
});