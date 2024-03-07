/* (5 pontos)
4-Escreva um programa que receba três números inteiros
 e mostre eles em ordem crescente.
Nome Aluno: Luís Otávio Bordin Pereira
*/
var teclado = require("prompt-sync")();
var n1 = parseFloat(teclado("digite o prieiro numero: "));
var n2 = parseFloat(teclado("digite o segundo numero: "));
var n3 = parseFloat(teclado("digite o terceiro numero: "));
var maior = 0;
var mediano = 0;
var menor = 0;
if (n1 > n2 && n1 > n3) {
    if (n2 > n3) {
        maior = n1;
        mediano = n2;
        menor = n3;
    }
    else {
        mediano = n3;
        menor = n2;
    }
}
else if (n2 > n1 && n2 > n3) {
    maior = n2;
    menor = n1;
    mediano = n3;
}
else {
    console.log("!algo deu errado!");
}
console.log("A ordem crescente \u00E9 ".concat(menor, ",").concat(mediano, ",").concat(maior));
