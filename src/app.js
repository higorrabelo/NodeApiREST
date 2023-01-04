import express from 'express';
const app = express();

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

export default app;