import cadastros from "../models/Cadastro.js"

class CadastrosController {

    static mostrarCadastros = (req,res) => {
        cadastros.find((err, cadastros) => {
            res.status(200).json(cadastros)
        })
    }

    static mostrarCadastrosPorId = (req, res) => {
        const id = req.params.id;

        cadastros.findById(id, (err, cadastros) => {
            if(err) {
                res.status(400).send({message: `${err.message} - Id não encontrado.`})
            }else {
                res.status(200).send(cadastros);
            }
        })
    }

    static incluirCadastro = (req, res) => {
        let cadastro = new cadastros(req.body);

        cadastro.save((err) => {
            if(err) {
                res.status(500).send({message: "Falha ao cadastrar usuário"})
            } else {
                res.status(201).send(cadastro.toJSON());
            }
        })
    }

    static editaCadastro = (req, res) => {
        const id = req.params.id;

        cadastros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: "Cadastro Editado"})
            }else {
                res.status(500).send({message: err.mesage})
            }
        })

    }
}

export default CadastrosController;