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

function exibirParImpar(valor1, valor2) {
  if (valor1 % 2 == 0)
    return valor1;
  return valor2;
}

function exibirVoto(idade) {
  if (idade >= 70 || idade >= 16 && idade <= 17)
    return "Vote se quiser";
  if (idade >= 18 && idade <= 69) {
    return("Deve votar")
  } 
  return("Idade insuficiente para votar")
}

module.exports = { somar, mensagemBoasVindas, exibirMaiorValor, exibirParImpar, exibirVoto};