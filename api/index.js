/* Importações de pacotes*/
const express = require('express');

/* Instâncias de pacotes */
//express:
const app = express();

/* Configura o Express para lidar com dados no formato JSON */
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

/* Importa e configura os arquivos de rotas de usuários */
const usuarioController = require('./controller/UsuarioController');
app.use('/', usuarioController);

/* Importa e configura os arquivos de rotas de livros */
const livroController = require('./controller/LivroController');
app.use('/', livroController);

/* Instancia o servidor (express) */
app.listen(3000, () => {
    console.log('SERVIDOR RODANDO NA URL: http://localhost:3000');
});