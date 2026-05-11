const { somar, mensagemBoasVindas, exibirMaiorValor } = require('./script');

test('soma dois números', () => {
    expect(somar(2, 3)).toBe(5);
});

test('mensagem de boas vindas', () => {
    expect(mensagemBoasVindas('Diogo')).toBe('Olá, Diogo!');
});

test('mensagem valor maior', () => {
    expect(exibirMaiorValor(1, 2)).toBe(2);
});



    // - Implemente uma função que irá receber 2 valores. A função deverá exibir qual dos dois valores é o maior.
    // - Crie o teste para esse código. Execute o teste.
    // - Faça o upload desse código para o infinityFree.