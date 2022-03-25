import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    data: {type: String, required: true},
    feedbackFinal: {type: String, required: true},
    pontosMelhorar: {type: String},
    pontosManter: {type: String},
    remetente: {type: String, required: true},
    sugestoes: {type: String},
    usuario: {type: String, required: true}
},
{
    versionKey: false
}
)

const feedbacks = mongoose.model('feedbacks', feedbackSchema);

export default feedbacks;