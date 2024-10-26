const express = require('express');
const routes = require('./routes'); // Certifique-se de que o caminho está correto

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Para analisar o JSON no corpo da requisição
app.use(routes); // Usando suas rotas

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});