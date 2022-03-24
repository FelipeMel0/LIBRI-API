const express = require('express')

const usuario = require('../model/Usuario')

//Criar instância de rotas
const router = express.Router()

//Cria as rotas

//Rota de inserção 
/* 

O Router é capaz de receber requisicões de verbos HTTP

Parâmteros:
1 - String representando a rota em si
2 - Um callback que trata a requisicão (req) e a resposta (res)

*/

router.post('/usuario/inserirUsuario', (req, res)=>{

    res.status(200).json({message: 'Rota de inserão de usuário'})

})

module.exports = router