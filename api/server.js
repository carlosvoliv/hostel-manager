const express = require('express')
const app = express();
const cors = require('cors');

//TODO: configurando o servidor

app.use(express.json());
app.use(cors());

//TODO: levantando o server

const port = 3001;

app.listen(port, () => {
  console.log(`Servidor conectado na porta ${ port }`)
});

module.exports = app