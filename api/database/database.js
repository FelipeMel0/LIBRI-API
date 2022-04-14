/* IMPORTA O MÓDULO DO SEQUELIZE */
const Sequelize = require('sequelize');

/* 
Cria uma constante "connection" que guarda uma instancia do Sequelize e abre a 
conexão com o banco de dados.
Parâmetros:
1 - Nome do banco de dados
2 - Usuário do banco de dados
3 - Senha do banco de dados
4 - Objeto json que determina o local onde o banco de dados está localizado e seu tipo
*/
const connection = new Sequelize('dbLibriDS3M', 'root', '12345678', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
});

/* Exporta a constante connection, tornando-a disponível em toda a aplicação. */
module.exports = connection;