const express = require('express'); //server
const cors = require('cors'); //permite acessar recursos de dominios diferentes
const { errors } = require('celebrate');
const routes = require('./routes');

const server = express();

server.use(cors()); //aplicando cors no server
server.use(express.json()); //server intepretar json
server.use(routes);
server.use(errors()); //exibe erros no formato 400
server.listen(3030);

console.log('Server rodando na porta 3030.....')