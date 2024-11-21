const mongoose = require('mongoose');

const LivroSchema = new mongoose.Schema(
    {
        id: { type: String, required: true },
        nomeLivro: { type: String, required: true },
        autor: { type: String, required: true }, 
        materia: { type: String, required: true }, 

    }
);

module.exports = mongoose.model('Livro', LivroSchema);