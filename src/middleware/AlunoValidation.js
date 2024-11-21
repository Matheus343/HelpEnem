const AlunoModel = require('../model/AlunoModel');
const { isFuture, parseISO } = require('date-fns');

async function AlunoValidation(req, res, next) {
    const { id, nome, cpf, dataNascimento, cep, foto } = req.body;

    const alteracaoRegistro = req.params.id != null;

  
    if (!nome || nome.length < 2)
        return res.status(400).json({ erro: 'Informe um nome com ao menos 2 caracteres.' });

 
    const cpfRegex = /^\d{11}$/;
    if (!cpf || !cpfRegex.test(cpf))
        return res.status(400).json({ erro: 'Informe um CPF válido com 11 dígitos.' });

 
    if (!dataNascimento)
        return res.status(400).json({ erro: 'Informe a data de nascimento.' });

    const parsedDataNascimento = parseISO(dataNascimento);
    if (isFuture(parsedDataNascimento))
        return res.status(400).json({ erro: 'A data de nascimento não pode ser no futuro.' });


    const cepRegex = /^\d{8}$/;
    if (!cep || !cepRegex.test(cep))
        return res.status(400).json({ erro: 'Informe um CEP válido com 8 dígitos.' });


    if (!foto || typeof foto !== 'string')
        return res.status(400).json({ erro: 'Informe o caminho ou URL da foto.' });

  
    if (alteracaoRegistro) {
        if (id && req.params.id !== id)
            return res.status(400).json({ erro: 'O ID informado no parâmetro está diferente do ID no corpo da requisição.' });

        const qtde = await AlunoModel.countDocuments({ id: req.params.id });
        const existe = qtde >= 1;

        if (!existe)
            return res.status(400).json({ erro: 'Não há registro para o ID informado.' });
    } else {
        if (!id)
            return res.status(400).json({ erro: 'Informe o ID.' });

        const existe = await AlunoModel.countDocuments({ id }) >= 1;
        if (existe)
            return res.status(400).json({ erro: 'Já existe um aluno cadastrado com este ID.' });
    }

    next();
}

module.exports = AlunoValidation;
