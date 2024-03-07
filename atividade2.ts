/* (5 pontos)
2 - Crie um programa que peça um número ao usuário e armazene ele na variável x.
 Depois peça outro número e armazene na variável y.
Mostre esses números. 
Em seguida, faça com que x passe a ter o valor de y, 
e que y passe a ter o valor de x.
Nome Aluno: Luís Otávio Bordin Pereira
*/

const teclado = require(`prompt-sync`)();
let x = parseFloat(teclado(`Digite um numero: `));
let y = parseFloat(teclado(`Digite outro numero: `));

let troca = 0;

console.log(`Antes da troca`);
console.log(`Variavel X: ${x}`);
console.log(`Variavel Y: ${y}`);

troca = y;
y = x;
x = troca;

console.log(`Depois da troca`);
console.log(`Variavel X: ${x}`);
console.log(`Variavel Y: ${y}`);
