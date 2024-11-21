const LivroModel = require('../model/LivroModel');

async function LivroValidation(req, res, next) {
    const { id, nomeLivro, autor, materia } = req.body;

    const alteracaoRegistro = req.params.id != null;

   
    if (!nomeLivro || nomeLivro.length < 3)
        return res.status(400).json({ erro: 'Informe um nome do livro com ao menos 3 caracteres.' });

   
    if (!autor || autor.length < 3)
        return res.status(400).json({ erro: 'Informe o nome do autor com ao menos 3 caracteres.' });

  
    if (!materia || materia.length < 3)
        return res.status(400).json({ erro: 'Informe a matéria com ao menos 3 caracteres.' });


    if (alteracaoRegistro) {
        if (id && req.params.id !== id)
            return res.status(400).json({ erro: 'O ID informado no parâmetro está diferente do ID no corpo da requisição.' });

        const qtde = await LivroModel.countDocuments({ id: req.params.id });
        const existe = qtde >= 1;

        if (!existe)
            return res.status(400).json({ erro: 'Não há registro para o ID informado.' });
    } else {
        if (!id)
            return res.status(400).json({ erro: 'Informe o ID.' });

        const existe = await LivroModel.countDocuments({ id }) >= 1;
        if (existe)
            return res.status(400).json({ erro: 'Já existe um livro cadastrado com este ID.' });
    }

    next();
}

module.exports = LivroValidation;
