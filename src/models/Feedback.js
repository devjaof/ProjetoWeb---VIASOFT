import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    id: {type: String},
    usuario: {type: String, required: true},
    data: {type: String, required: true},
    pontosMelhorar: {type: String},
    pontosManter: {type: String},
    sugestoes: {type: String},
    feedbackFinal: {type: String, required: true}
})

const feedbacks = mongoose.model('feedbacks', feedbackSchema);

export default feedbacks;