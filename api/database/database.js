//Importa o pacote Sequelize na aplicação
const sequelize = require('Sequelize')

//Cria uma constante nomeada como connection que vai representar a instância de conexão do Sequelize
/*

Parâmetros de conexão:

1- nome do banco de dados
2- usuário do banco de dados
3- senha do banco de dados
4- objeto JSON que determina o local onde o servico de banco de dades está sendo executado e o tipo de banco

*/
const connection = new sequelize('libri', 'root', '12345678', {
    'host': 'localhost',
    'dialect': 'mysql'
})

module.exports = connection
