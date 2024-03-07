/* (10 pontos)
5 – Faça um programa que o usuário digite dois números e o
 programa informe qual é o número maior,
 com a seguinte frase: `O número maior é ${variavel} e o
 número menor é ${variavel}`,
  se ser iguais uma frase:  ` Os números ${variavel} e ${variavel} são iguais`.
Nome: Luis Otavio Bordin Pereira
*/
var teclado = require("prompt-sync")();
var n1 = parseFloat(teclado("digite o primeiro numero: "));
var n2 = parseFloat(teclado("digite o segundo numero: "));
if (n1 > n2)
    console.log("o numero maior \u00E9 ".concat(n1));
else
    (n2 > n1);
console.log("o numero maior \u00E9 ".concat(n2));
{
    (n1 = n2);
    console.log("os numeros ".concat(n1, " e ").concat(n2, " s\u00E3o iguais"));
}
