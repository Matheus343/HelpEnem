const mongoose = require('mongoose');

const AlunoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    senha: { type: String, required: true },
    cep: { type: String, required: true },
    dataNascimento: { type: String, required: true },
    cpf: { type: String, required: true, unique: true },
    foto: { type: String }, // URL ou base64 da foto
});

module.exports = mongoose.model('Aluno', AlunoSchema);
