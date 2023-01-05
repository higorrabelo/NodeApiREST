import express from 'express';
import db from './config/db.js';
import livros from './models/Livro.js';
import routes from './routes/index.js';

db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", ()=>{console.log("Conectado com o banco")});

const app = express();

app.use(express.json());

routes(app);


app.get("/livros/:id",(req,resp)=>{
    let index = buscaLivro(req.params.id);
    resp.json(livros[index]);
});

app.put("/livros/:id",(req,resp)=>{
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    resp.json(livros);
});
app.delete("/livros/:id",(req,resp)=>{
    let {id} = req.params;
    let index = buscaLivro(id);
    livros.splice(index,1);
    resp.send(`Livro ${id} REmovido com sucesso`);
});

function buscaLivro(id){
    return livros.findIndex(livro=>livro.id == id);
}

export default app;