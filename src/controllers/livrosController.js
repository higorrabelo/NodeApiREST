import livros from "../models/Livro.js";

class LivroController {

        static listarLivros = (req,resp)=>{
        livros.find((err,livros)=>{
            resp.json(livros)
            })
        }
        static cadastrarLivro = (req,resp)=>{
            let livro = new livros(req.body);
            livro.save((err)=>{
                if(err){
                    resp.status(500).send({message:`${err.message} - falha ao cadastrar livro`})
                }else{
                    resp.status(201).send(livro.toJSON());
                }
            })
        }

}

export default LivroController