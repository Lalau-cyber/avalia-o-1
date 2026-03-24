function calcularFrete(peso) {
  // 1. Tratamento de valores inválidos
  // Verifica se o peso não é um número ou se é menor ou igual a zero
  if (typeof peso !== 'number' || peso <= 0) {
    return "Erro: Digite um peso válido.";
  }

  let valorFrete;
    // 2. faixas de preços
    if (peso <= 5){
       valorFrete = 10.00;
    }
    else if (peso >= 5 && peso <= 20){
        valorFrete = 20.00;
    }
    else if (peso > 20){
        valorFrete = 50.00;
    }
    else{
        return "Erro: O peso deve ser um número maior que zero.";
    }

 return `R$ ${valorFrete.toFixed(2)}`;

}
function exibirFrete() {
    const input = document.getElementById('pesoInput');
    const divResultado = document.getElementById('resultado');
    
    // Convertemos o valor do input para número decimal (float)
    const pesoInformado = parseFloat(input.value);
    
    // Chamamos a lógica e colocamos o texto na tela
    divResultado.innerText = calcularFrete(pesoInformado);
}

//<link rel="stylesheet" href="estilo.css">
//<script src="script.js"></script>