/* (5 pontos)
1 - Faça um programa que calcule e apresente o valor do volume de uma lata,
 sabendo que PI é um valor constante de 3.14159, o programa deve pedir os valores de RAIO e ALTURA, 
 utilize a fórmula VOLUME = PI * RAIO² *ALTURA.
Nome:  Luís Otávio Bordin 
*/

const teclado = require(`prompt-sync`)();
let raio = parseFloat(teclado(`Digite o valor do raio da lata: `));
let altura = parseFloat(teclado(`Digite a altura da lata: `));
let volume = 0;
let pI= 3.14159
volume= pI * Math.pow(raio, 2) * altura
console.log(`o volume da lata é ${volume}`);
