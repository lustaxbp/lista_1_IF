let teclado = require("prompt-sync")();
let preçoMenosDoze = 0.30;
let preçoDozeOuMais = 0.25;
let quantidadeDeMaças = parseInt(teclado("digite o numero de ma\u00E7as compradas: "));
let valorTotal = 0;
if (quantidadeDeMaças < 12) {
    valorTotal = quantidadeDeMaças * preçoMenosDoze;
}
else {
    valorTotal = quantidadeDeMaças * preçoDozeOuMais;
}
console.log(`o valor total da compra foi de R$ ${valorTotal}.`)