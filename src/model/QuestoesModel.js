const mongoose = require('mongoose');

const QuestoesSchema = new mongoose.Schema(
    {
        id: { type: String, required: true }, 
        materia: { type: String, required: true }, 
        dificuldade: { type: String, required: true }

    }
);

module.exports = mongoose.model('Questoes', QuestoesSchema);
