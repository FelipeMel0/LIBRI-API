/* IMPORTA O MÓDULO DO express */
const express = require('express');

/* IMPORTA O MODEL DE LIVRO */
const livro = require('../model/Livro');

/* CONFIGURA A FUNCIONALIDADE DE ROTAS  */
const router = express.Router();

router.get('/livro/listarLivro', (req, res) => {

    livro.findAll()
        .then(
            (livros) => {
                res.status(200).json(livros);
            }
        );

});

router.get('/livro/listarLivroId/:id', (req, res) => {

    let {
        id
    } = req.params;

    console.log("ID" + id);

    livro.findAll({
            where: {
                cod_livro: id
            }
        })
        .then(
            (livro) => {
                res.status(200).json(livro);
            }
        );

})

router.post('/livro/cadastrarLivro', (req, res) => {

    const {
        titulo,
        descricao,
        imagem,
        tblUsuarioCodUsuario
    } = req.body;

    livro.create({
        titulo,
        descricao,
        imagem: "imagem",
        tblUsuarioCodUsuario
    }).then(
        () => {
            res.status(200).json({
                "MSG": "Livro inserido com sucesso!"
            });
        }
    );

});

router.put('/livro/alterarLivro', (req, res) => {

    const {
        titulo,
        descricao,
        imagem,
        tblUsuarioCodUsuario,
        cod_livro
    } = req.body;

    livro.update({
        titulo,
        descricao,
        imagem,
        tblUsuarioCodUsuario
    }, {
        where: {
            cod_livro
        }
    }).then(
        () => {
            res.status(200).json({
                "MSG": "Livro alterado com sucesso!"
            });
        }
    );

});

router.delete('/livro/excluirLivro/:cod_livro', (req, res) => {

    const {
        cod_livro
    } = req.params;

    livro.destroy({
        where: {
            cod_livro
        }
    }).then(
        () => {
            res.status(200).json({
                "MSG": "Livro excluído com sucesso!"
            });
        }
    );

});

module.exports = router;