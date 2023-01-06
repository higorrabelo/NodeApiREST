import express from 'express';
import AutoresController from '../controllers/autoresController.js';

const router = express.Router();

router
    .get("/autores",AutoresController.listarAutores)
    .get("/autores/:id",AutoresController.pesquisarAutor)
    .post("/autores",AutoresController.cadastrarAutor)
    .put("/autores/:id",AutoresController.atualizaAutor)
    .delete("/autores/:id",AutoresController.apagaAutor)

export default router;