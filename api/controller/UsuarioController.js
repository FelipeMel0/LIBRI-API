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

    // console.log(req.body)

    const {nome, sobrenome, email, foto, login, senha} = req.body

    const Usuario = usuario.create({
        nome,
        sobrenome,
        email,
        foto,
        login,
        senha
    }).then(() => {
        res.status(200).json('Usuário inserido, baby')
    }
    )


})

module.exports = router