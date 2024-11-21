const express = require('express');
const router = express.Router();
const LivroController = require('../controller/LivroController');
const LivroValidation = require('../middleware/LivroValidation');


router.post('/', LivroValidation, LivroController.create);


router.put('/:id', LivroValidation, LivroController.update);


router.delete('/:id', async (req, res, next) => {
    const { id } = req.params;

 
    if (!id || id.trim() === '') {
        return res.status(400).json({ erro: 'ID inválido para exclusão.' });
    }


    next();
}, LivroController.delete);


router.get('/:id', async (req, res, next) => {
    const { id } = req.params;


    if (!id || id.trim() === '') {
        return res.status(400).json({ erro: 'ID inválido para busca.' });
    }


    next();
}, LivroController.get);


router.get('/', LivroController.getAll);

module.exports = router;

