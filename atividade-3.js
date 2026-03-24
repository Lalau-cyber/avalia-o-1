function calcular() {
    // 1. Recebimento do valor total da compra e do frete
    const valorCompraInput = document.getElementById('valorCompra').value;
    const valorFreteInput = document.getElementById('valorFrete').value;
    const divResultado = document.getElementById('resultado');

    // Convertendo para número para processamento
    const valorCompra = parseFloat(valorCompraInput);
    const valorFrete = parseFloat(valorFreteInput);

    // 2. Tratamento de entradas inválidas (negativas ou não numéricas)
    // isNaN verifica se não é um número; < 0 verifica se é negativo
    if (isNaN(valorCompra) || isNaN(valorFrete) || valorCompra < 0 || valorFrete < 0) {
        divResultado.style.color = "red";
        divResultado.innerHTML = "Erro: Insira valores numéricos positivos válidos.";
        return;
    }

    // 3. Aplicação de desconto progressivo
    let percentualDesconto = 0;

    if (valorCompra > 500) {
        // Acima de R$ 500 → 15% de desconto
        percentualDesconto = 0.15;
    } else if (valorCompra >= 200) {
        // Entre R$ 200 e R$ 500 → 5% de desconto
        percentualDesconto = 0.05;
    } else {
        // Até R$ 200 → sem desconto
        percentualDesconto = 0;
    }

    // Calculando o subtotal com desconto
    const valorComDesconto = valorCompra * (1 - percentualDesconto);

    // 4. Adição do valor do frete após aplicar o desconto
    const valorFinal = valorComDesconto + valorFrete;

    // 5. Retorno do valor final com duas casas decimais
    divResultado.style.color = "green";
    divResultado.innerHTML = `Valor Final: R$ ${valorFinal.toFixed(2)}`;
    
    // Log para conferência no console (opcional)
    console.log(`Compra: ${valorCompra} | Desconto: ${percentualDesconto * 100}% | Frete: ${valorFrete} | Total: ${valorFinal.toFixed(2)}`);
}