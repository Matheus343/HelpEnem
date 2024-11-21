const express = require('express');
const router = express.Router();
const AlunoController = require('../controller/AlunoController');
const AlunoValidation = require('../middleware/AlunoValidation');
const AlunoModel = require('../model/AlunoModel');

// Rota para cadastrar usuário
router.post('/register', async (req, res) => {
    const { nome, senha, cep, dataNascimento, cpf, foto } = req.body;

    if (!nome || !senha || !cep || !dataNascimento || !cpf) {
        return res.status(400).json({ error: 'Preencha todos os campos obrigatórios!' });
    }

    try {
        const existingUser = await AlunoModel.findOne({ cpf });
        if (existingUser) {
            return res.status(400).json({ error: 'Usuário já cadastrado com este CPF!' });
        }

        const novoAluno = new AlunoModel({ nome, senha, cep, dataNascimento, cpf, foto });
        await novoAluno.save();

        res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao cadastrar usuário.' });
    }
});
// Rota para login
router.post('/login', async (req, res) => {
    const { cpf, senha } = req.body;

    if (!cpf || !senha) {
        return res.status(400).json({ error: 'CPF e senha são obrigatórios!' });
    }

    try {
        const user = await AlunoModel.findOne({ cpf, senha });
        if (!user) {
            return res.status(401).json({ error: 'CPF ou senha inválidos!' });
        }

        res.status(200).json({ message: 'Login realizado com sucesso!', user });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao realizar login.' });
    }
});


router.put('/:id', AlunoValidation, AlunoController.update);

router.delete('/:id', async (req, res, next) => {
    const { id } = req.params;

  
    if (!id || isNaN(id) || Number(id) <= 0) {
        return res.status(400).json({ erro: 'ID inválido para exclusão.' });
    }

    next();
}, AlunoController.delete);


router.get('/:id', async (req, res, next) => {
    const { id } = req.params;


    if (!id || isNaN(id) || Number(id) <= 0) {
        return res.status(400).json({ erro: 'ID inválido para busca.' });
    }


    next();
}, AlunoController.get);

router.get('/filter/getAll', AlunoController.getAll);


router.get('/filter/getNextId', AlunoController.getNextId);

module.exports = router;

