const request = require('supertest');
const app = require('./server');

describe('Testando operacoes matemáticas', () => {

    test('Deve retornar a soma de dois números positivos', async () => {
        const resposta = await request(app).get('/somar?num1=3&num2=3');
        expect(resposta.text).toBe('resultado da adição: 6');
    });

    test('Deve retornar a soma de dois números negativos', async () => {
        const resposta = await request(app).get('/somar?num1=-3&num2=-3');
        expect(resposta.text).toBe('resultado da adição: -6');
    });

    test('Deve retornar a subtração de dois números', async () => {
        const resposta = await request(app).get('/subtrair?num1=5&num2=3');
        expect(resposta.text).toBe('resultado da subtração: 2');
    });

    test('Deve retornar a multiplicação de dois números', async () => {
        const resposta = await request(app).get('/multiplicar?num1=2&num2=3');
        expect(resposta.text).toBe('resultado da multiplicação: 6');
    });

    test('Deve retornar a divisão de dois números', async () => {
        const resposta = await request(app).get('/dividir?num1=6&num2=3');
        expect(resposta.text).toBe('resultado da divisão: 2');
    });

    test('Deve retornar erro 400 ao dividir por zero', async () => {
        const resposta = await request(app).get('/dividir?num1=6&num2=0');
        expect(resposta.status).toBe(400);
        expect(resposta.text).toBe('não é possível dividir por zero');
    });

    test('Deve retornar erro 400 quando os parâmetros não forem números', async () => {
        const resposta = await request(app).get('/somar?num1=abc&num2=3');
        expect(resposta.status).toBe(400);
    });

});