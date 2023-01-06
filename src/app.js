import express from 'express';
import db from './config/db.js';
import livros from './models/Livro.js';
import routes from './routes/index.js';

db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", ()=>{console.log("Conectado com o banco")});

const app = express();
app.use(express.json());
routes(app);

export default app;