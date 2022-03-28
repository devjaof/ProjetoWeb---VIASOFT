import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    usuario: {type: String, required: true},
    data: {type: String, required: true},
    pontosMelhorar: {type: String},
    pontosManter: {type: String},
    sugestoes: {type: String},
    feedbackFinal: {type: String, required: true},
    remetente: {type: String, required: true}
    
},
{
    versionKey: false
}
)

const feedbacks = mongoose.model('feedbacks', feedbackSchema);

export default feedbacks;