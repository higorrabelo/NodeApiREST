import livros from "../models/Livro.js";

class LivroController {

        static listarLivros = (req,resp)=>{
        livros.find()
        .populate('autor')
        .exec((err,livros)=>{
            resp.status(200).json(livros);
        });
        }
        static pesquisarLivro = (req,resp)=>{
            const id = req.params.id;
            livros.findById(id)
            .populate('autor','nome')
            .exec((err,livro)=>{
                if(!err){
                    resp.send(livro.toJSON())
                }else{
                    resp.send("Livro não econtrado")
                }
            });

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
        static atualizaLivro = (req,rep)=>{
            const id = req.params.id;
            livros.findByIdAndUpdate(id,{$set: req.body},(err)=>{
                if(!err){
                    resp.status(200).send("Livro Atualizado com sucesso")
                }else{
                    resp.status(500).send({message: err.message});
                }
            });
        }
        static apagaLivro = (req,resp)=>{
            const id = req.params.id;
            livros.findByIdAndDelete({_id:id},(err)=>{
                if(err){
                    resp.status(400).send("Livro Não Apagado")
                }else{
                    resp.send("Livro Removido com sucesso")
                }
            })
        }
        static listarLivrosPorEditora = (req,resp)=>{
            var editora = req.query.editora;
            livros.find({'editora': editora},{},(err,livros)=>{
                if(err){
                    resp.status(500).send({message: `${err.message} Livro não encontrado`})
                }else{
                    resp.status(200).send(livros)
                }
            })
        }

}

export default LivroController