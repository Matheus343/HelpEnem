const express = require('express');
const router = express.Router();
const QuestoesController = require('../controller/QuestoesController');
const QuestoesValidation = require('../middleware/QuestoesValidation');


router.post('/', QuestoesValidation, QuestoesController.create);


router.put('/:id', QuestoesValidation, QuestoesController.update);


router.delete('/:id', async (req, res, next) => {
    const { id } = req.params;

   
    if (!id || id.trim() === '') {
        return res.status(400).json({ erro: 'ID inválido para exclusão.' });
    }

    
    next();
}, QuestoesController.delete);


router.get('/:id', async (req, res, next) => {
    const { id } = req.params;

    if (!id || id.trim() === '') {
        return res.status(400).json({ erro: 'ID inválido para busca.' });
    }

 
    next();
}, QuestoesController.get);


router.get('/', QuestoesController.getAll);

module.exports = router;
