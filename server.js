const http = require('http');
const port = 3000;

const rotas = {
    "/":"Curso de Node",
    "/livros":"Entrei na Pagina de Livros",
    "/autores":"Listagem de Autores"
}

const server = http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'text/plain'});
    resp.end(rotas[req.url]);
});

server.listen(port,()=>{console.log("Servidor Ativo "+port)})