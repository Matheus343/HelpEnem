const LivroModel = require('../model/LivroModel');

exports.getAll = async (req, res) => {
    try {
        const livros = await LivroModel.find();
        res.status(200).json(livros);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar livros' });
    }
};

exports.create = async (req, res) => {
    const { id, nomeLivro, autor, materia } = req.body;

    if (!id || !nomeLivro || !autor || !materia) {
        return res.status(400).json({ error: 'Preencha todos os campos obrigatórios' });
    }

    try {
        const livroExistente = await LivroModel.findOne({ id });
        if (livroExistente) {
            return res.status(400).json({ error: 'Já existe um livro com este ID' });
        }

        const novoLivro = await LivroModel.create({ id, nomeLivro, autor, materia });
        res.status(201).json(novoLivro);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar livro' });
    }
};

exports.update = async (req, res) => {
    const { id } = req.params;
    const { nomeLivro, autor, materia } = req.body;

    if (!nomeLivro || !autor || !materia) {
        return res.status(400).json({ error: 'Preencha todos os campos obrigatórios' });
    }

    try {
        const livro = await LivroModel.findOneAndUpdate(
            { id },
            { nomeLivro, autor, materia },
            { new: true }
        );

        if (!livro) {
            return res.status(404).json({ error: 'Livro não encontrado' });
        }

        res.status(200).json(livro);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar livro' });
    }
};

exports.delete = async (req, res) => {
    const { id } = req.params;

    try {
        const livro = await LivroModel.findOneAndDelete({ id });
        if (!livro) {
            return res.status(404).json({ error: 'Livro não encontrado' });
        }

        res.status(200).json({ message: 'Livro excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir livro' });
    }
};
