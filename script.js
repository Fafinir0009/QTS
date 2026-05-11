function somar(a, b) {
  return a + b;
}

function mensagemBoasVindas(nome) {
  return `Olá, ${nome}!`;
}

function exibirMaiorValor(valor1, valor2) {
  if (valor1 > valor2)
    return valor1;

  return valor2;
}

module.exports = { somar, mensagemBoasVindas, exibirMaiorValor};