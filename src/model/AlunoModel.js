const mongoose = require('mongoose');

const AlunoSchema = new mongoose.Schema(
    {
        id: { type: String, required: true },
        nome: { type: String, required: true },
        cpf: { type: String, required: true }, 
        dataNascimento: { type: Date, required: true }, 
        cep: { type: String, required: true }, 
        foto: { type: String, required: true },
    }
);

module.exports = mongoose.model('Aluno', AlunoSchema);
