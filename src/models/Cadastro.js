import mongoose from "mongoose";

const cadastroSchema = new mongoose.Schema({
    id: {type: String},
    nome: {type: String, required: true},
    senha: {type: String, required: true}
})

const cadastros = mongoose.model('cadastros', cadastroSchema);

export default cadastros;