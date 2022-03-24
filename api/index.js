// Importa o pacote express para a aplicação
const express = require('express')

// Importa o arquivo de conexão


// Importa o arquivo de Model de usuário
//const usuario = require('./model/Usuario')

// Cria uma instância do pacote express para ser utilizada na aplicação
const app = express()

const router = require('./controller/UsuarioController')

app.use(router)

// Instância do servidor Express

app.listen(8081, () => {
    console.log("Servidor rodando na url http://localhost:8081")
    console.log("Sério, está rodando mesmo")
}) //sempre será a última linha do código

//No terminal, pressionar ctrl+c "fecha" o servidor