const express = require('express');
const app = express();
const porta = 3000;

// endpoint para somar dois números passados na url
app.get('/somar', (req, res) => {
    const n1 = parseFloat(req.query.num1);
    const n2 = parseFloat(req.query.num2);

    if (isNaN(n1) || isNaN(n2)) {
        return res.status(400).send('num1 e num2 devem ser números');
    }

    const result = n1 + n2;
    res.send(`resultado da adição: ${result}`);
});

// endpoint para subtrair dois números passados na url
app.get('/subtrair', (req, res) => {
    const n1 = parseFloat(req.query.num1);
    const n2 = parseFloat(req.query.num2);

    if (isNaN(n1) || isNaN(n2)) {
        return res.status(400).send('num1 e num2 devem ser números');
    }

    const result = n1 - n2;
    res.send(`resultado da subtração: ${result}`);
});

// endpoint para multiplicar dois números passados na url
app.get('/multiplicar', (req, res) => {
    const n1 = parseFloat(req.query.num1);
    const n2 = parseFloat(req.query.num2);

    if (isNaN(n1) || isNaN(n2)) {
        return res.status(400).send('num1 e num2 devem ser números');
    }

    const result = n1 * n2;
    res.send(`resultado da multiplicação: ${result}`);
});

// endpoint para dividir dois números passados na url
app.get('/dividir', (req, res) => {
    const n1 = parseFloat(req.query.num1);
    const n2 = parseFloat(req.query.num2);

    if (isNaN(n1) || isNaN(n2)) {
        return res.status(400).send('num1 e num2 devem ser números');
    }

    if (n2 === 0) {
        return res.status(400).send('não é possível dividir por zero');
    }

    const result = n1 / n2;
    res.send(`resultado da divisão: ${result}`);
});

// só sobe o servidor quando o arquivo é executado direto (node server.js)
// nos testes, o supertest cuida disso e o Jest consegue encerrar normalmente
if (require.main === module) {
    app.listen(porta, () => {
        console.log("Aplicação está rodando");
    });
}

module.exports = app;