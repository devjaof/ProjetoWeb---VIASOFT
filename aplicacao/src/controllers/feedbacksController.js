import feedbacks from "../models/Feedback.js";

class FeedbacksController {

    static mostrarFeedbacks = (req, res) => {
        feedbacks.find((err, feedbacks) => {
            res.status(200).json(feedbacks)
        })
    }

    static mostrarFeedbacksPorId = (req, res) => {
        const id = req.params.id;

        feedbacks.findById(id)
            .populate('idRemetente', 'nome')
            .exec((err, feedbacks) => {
            if(err) {
                res.status(400).send({message: `${err.message} - Id não encontrado.`})
            }else {
                res.status(200).send(feedbacks);
            }
        })
    }

    static incluirFeedback = (req, res) => {
        let feedback = new feedbacks(req.body);
        feedback.save((err) => {   
            if(err) {
                res.status(500).send({message: "Falha ao deixar o feedback"})
            } else {
                res.status(201).send(feedback.toJSON());
            }
        })
    }

    static editarFeedback = (req, res) => {
        const id = req.params.id;

        feedbacks.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: "Feedback Editado"})
            }else {
                res.status(500).send({message: err.mesage})
            }
        })

    }

    static deletarFeedback = (req,res) => {
        const id = req.params.id;

        feedbacks.findByIdAndDelete(id, (err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - Id não encontrado.`})
            }else {
                res.status(200).send({message: "Feedback removido"});
            }
        })
    }

    static mostrarFeedbackPorUsuario = (req, res) => {
        const usuario = req.query.usuario;

        feedbacks.find({'usuario': usuario}, {}, (err, feedbacks) => {
           if(err){
                res.status(400).send({message: "Não encontrado"})
           } else {
               res.status(200).send(feedbacks);
            }
        })
    }

    static mostrarFeedbackPorRemetente = (req, res) => {
        const remetente = req.query.remetente;

        feedbacks.find({'remetente': remetente}, {}, (err, feedbacks) => {
           if(err){
                res.status(400).send({message: "Não encontrado"})
           } else {
               res.status(200).send(feedbacks);
            }
        })
    }
       
}

export default FeedbacksController;