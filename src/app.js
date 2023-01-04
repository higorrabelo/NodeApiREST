import express from 'express';
const app = express();

app.use(express.json());

const livros = [
    {id:1,titulo:"Senhor dos Anéis"},
    {id:2,titulo:"O iluminado"},
];

app.get("/",function(req,resp){
    resp.status(200).send("Curso de Node")
});

app.get("/livros",function(req,resp){
    resp.status(200).json(livros);
});

app.get("/livros/:id",(req,resp)=>{
    let index = buscaLivro(req.params.id);
    resp.json(livros[index]);
});

app.post("/livros",(req,resp)=>{
    livros.push(req.body);
    resp.status(201).send("Livro Cadastrado com sucesso");
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