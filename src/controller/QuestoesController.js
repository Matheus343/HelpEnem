const QuestoesModel = require('../model/QuestoesModel');

exports.getAll = async (req, res) => {
    try {
        const questoes = await QuestoesModel.find();
        res.status(200).json(questoes);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar questões' });
    }
};

exports.create = async (req, res) => {
    const { id, materia, dificuldade } = req.body;

    if (!id || !materia || !dificuldade) {
        return res.status(400).json({ error: 'Preencha todos os campos obrigatórios' });
    }


    const niveisDificuldade = ['fácil', 'médio', 'difícil'];
    if (!niveisDificuldade.includes(dificuldade.toLowerCase())) {
        return res.status(400).json({ error: 'Nível de dificuldade inválido' });
    }

    try {
        const questaoExistente = await QuestoesModel.findOne({ id });
        if (questaoExistente) {
            return res.status(400).json({ error: 'Já existe uma questão com este ID' });
        }

        const novaQuestao = await QuestoesModel.create({ id, materia, dificuldade });
        res.status(201).json(novaQuestao);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar questão' });
    }
};

exports.update = async (req, res) => {
    const { id } = req.params;
    const { materia, dificuldade } = req.body;

    if (!materia || !dificuldade) {
        return res.status(400).json({ error: 'Preencha todos os campos obrigatórios' });
    }

 
    const niveisDificuldade = ['fácil', 'médio', 'difícil'];
    if (!niveisDificuldade.includes(dificuldade.toLowerCase())) {
        return res.status(400).json({ error: 'Nível de dificuldade inválido' });
    }

    try {
        const questao = await QuestoesModel.findOneAndUpdate(
            { id },
            { materia, dificuldade },
            { new: true }
        );

        if (!questao) {
            return res.status(404).json({ error: 'Questão não encontrada' });
        }

        res.status(200).json(questao);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar questão' });
    }
};

exports.delete = async (req, res) => {
    const { id } = req.params;

    try {
        const questao = await QuestoesModel.findOneAndDelete({ id });
        if (!questao) {
            return res.status(404).json({ error: 'Questão não encontrada' });
        }

        res.status(200).json({ message: 'Questão excluída com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir questão' });
    }
};
