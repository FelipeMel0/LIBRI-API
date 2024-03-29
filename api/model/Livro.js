/* Importa o módulo do sequelize */
const Sequelize = require('sequelize');

/* Importa o arquivo de conexão com banco de dados */
const connection = require('../database/database');

const Usuario = require('./Usuario');

const Livro = connection.define(
    'tblLivro', {
        cod_livro: {
            type: Sequelize.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: Sequelize.STRING(200),
            allowNull: true
        },
        descricao: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        imagem: {
            type: Sequelize.STRING(500),
            allowNull: true
        }
    }
);

/*Implementação da  CHAVE ESTRANGEIRA - LADO N*/
Usuario.hasMany(Livro);


/*Implementação da  CHAVE PRIMÁRIA - LADO 1*/
Livro.belongsTo(Usuario);

// Livro.sync({force:true});

module.exports = Livro;