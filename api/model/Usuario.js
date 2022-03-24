const sequelize = require('sequelize')

//importa o arquivo de conexão do banco de dados
const connection = require("../database/database")

/* 
Parâmetros:

1- Nome da tabela
2- Objeto JSON que vai conter os campos da tabela, seus tipos e regras
*/

const Usuario = connection.define('tblUsuario', {
    idUsuario: {
        type: sequelize.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: sequelize.STRING(500),
        allowNull: false
    },
    sobrenome: {
        type: sequelize.STRING(500),
        allowNull: false
    },
    email: {
        type: sequelize.STRING(500),
        allowNull: false
    },
    foto: {
        type: sequelize.STRING(500),
        allowNull: false
    },
    login: {
        type: sequelize.STRING(50),
        allowNull: false
    },
    senha: {
        type: sequelize.STRING(50),
        allowNull: false
    }
})

// Usuario.sync({
//     force: true
// })

module.exports = Usuario