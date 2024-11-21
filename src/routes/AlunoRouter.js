const express = require('express');
const router = express.Router();
const AlunoController = require('../controller/AlunoController');
const AlunoValidation = require('../middleware/AlunoValidation');


router.post('/', AlunoValidation, AlunoController.create);

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

// Listagem de todos os alunos
router.get('/filter/getAll', AlunoController.getAll);


router.get('/filter/getNextId', AlunoController.getNextId);

module.exports = router;

