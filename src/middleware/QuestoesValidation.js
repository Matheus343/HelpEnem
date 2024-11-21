const QuestoesModel = require('../model/QuestoesModel');

async function QuestoesValidation(req, res, next) {
    const { id, materia, dificuldade } = req.body;

    const alteracaoRegistro = req.params.id != null;

   
    if (!materia || materia.length < 3)
        return res.status(400).json({ erro: 'Informe a matéria com ao menos 3 caracteres.' });


    const dificuldadeValida = ['Fácil', 'Médio', 'Difícil'];
    if (!dificuldade || !dificuldadeValida.includes(dificuldade))
        return res.status(400).json({ erro: 'Informe uma dificuldade válida: Fácil, Médio ou Difícil.' });

 
    if (alteracaoRegistro) {
        if (id && req.params.id !== id)
            return res.status(400).json({ erro: 'O ID informado no parâmetro está diferente do ID no corpo da requisição.' });

        const qtde = await QuestoesModel.countDocuments({ id: req.params.id });
        const existe = qtde >= 1;

        if (!existe)
            return res.status(400).json({ erro: 'Não há registro para o ID informado.' });
    } else {
        if (!id)
            return res.status(400).json({ erro: 'Informe o ID.' });

        const existe = await QuestoesModel.countDocuments({ id }) >= 1;
        if (existe)
            return res.status(400).json({ erro: 'Já existe uma questão cadastrada com este ID.' });
    }

    next();
}

module.exports = QuestoesValidation;
