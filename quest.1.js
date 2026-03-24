/**
 * * @param {number} custo 
 * @param {number} percentualImposto 
 * @returns {number} 
 */

function calcularPrecoFinal(custo, percentualImposto) {
  if (typeof custo !== 'number' || typeof percentualImposto !== 'number' || isNaN(custo) || isNaN(percentualImposto)) {
    throw new Error("Valores inválidos: O custo e o imposto devem ser numéricos.");
  }

 
  if (custo <= 0) {
    throw new Error("Valor inválido: O custo do produto deve ser estritamente maior que zero.");
  }
  if (percentualImposto < 0) {
    throw new Error("Valor inválido: O percentual de imposto não pode ser negativo.");
  }

  const valorImposto = custo * (percentualImposto / 100);
  const precoFinal = custo + valorImposto;

  return Number(precoFinal.toFixed(2));
}
try {
  
  const precoNotebook = calcularPrecoFinal(2500.50, 18);
  console.log(`Preço final válido: R$ ${precoNotebook}`); 


  const precoInvalido = calcularPrecoFinal(-50, 10); 
  
} 
catch (erro) {
  console.error(erro.message); 
}