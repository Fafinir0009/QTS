const { somar, mensagemBoasVindas, exibirMaiorValor, exibirParImpar, exibirVoto } = require('./script');

test('soma dois números', () => {
    expect(somar(2, 3)).toBe(5);
});

test('mensagem de boas vindas', () => {
    expect(mensagemBoasVindas('Diogo')).toBe('Olá, Diogo!');
});

test('mensagem valor maior', () => {
    expect(exibirMaiorValor(1, 2)).toBe(2);
});

test('mensagem par ou impar', () => {
    expect(exibirParImpar(1, 2)).toBe(2);
});

test('mensagem voto', () => {
    expect(exibirVoto(18)).toBe('Deve votar');
});

test(mens)