import express from 'express';
import LivroController from '../controllers/livrosController.js';

const router = express.Router();

router
    .get("/livros",LivroController.listarLivros)
    .get("/livros/busca",LivroController.listarLivrosPorEditora)
    .get("/livros/:id",LivroController.pesquisarLivro)
    .post("/livros",LivroController.cadastrarLivro)
    .put("/livros/:id",LivroController.atualizaLivro)
    .delete("/livros/:id",LivroController.apagaLivro)

export default router;