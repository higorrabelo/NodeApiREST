import autores from "../models/Autor.js";

class AutoresController {

        static listarAutores = (req,resp)=>{
        autores.find((err,autores)=>{
            resp.json(autores)
            })
        }
        static pesquisarAutor = (req,resp)=>{
            const id = req.params.id;
            autores.findById({_id:id},(err,autor)=>{
                if(!err){
                    resp.send(autor.toJSON())
                }else{
                    resp.send("Autor não econtrado")
                }
            });

        }
        static cadastrarAutor = (req,resp)=>{
            let autor = new autores(req.body);
            autor.save((err)=>{
                if(err){
                    resp.status(500).send({message:`${err.message} - falha ao cadastrar Autor`})
                }else{
                    resp.status(201).send(autor.toJSON());
                }
            })
        }
        static atualizaAutor = (req,resp)=>{
            const id = req.params.id;
            autores.findByIdAndUpdate(id,{$set: req.body},(err)=>{
                if(!err){
                    resp.status(200).send("Autor Atualizado com sucesso")
                }else{
                    resp.status(500).send({message: err.message});
                }
            });
        }
        static apagaAutor = (req,resp)=>{
            const id = req.params.id;
            autores.findByIdAndDelete({_id:id},(err)=>{
                if(err){
                    resp.status(400).send("Autor Não Apagado")
                }else{
                    resp.send("Autor Removido com sucesso")
                }
            })
        }

}

export default AutoresController