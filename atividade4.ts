/* (5 pontos)
4-Escreva um programa que receba três números inteiros
 e mostre eles em ordem crescente.
Nome Aluno: Luís Otávio Bordin Pereira
*/
const teclado = require(`prompt-sync`)();
let n1:number = parseFloat(teclado(`digite o prieiro numero: `));
let n2:number = parseFloat(teclado(`digite o segundo numero: `));
let n3:number = parseFloat(teclado(`digite o terceiro numero: `))

let maior :number=0;
let mediano: number=0;
let menor:number=0;
 if (n1>n2 && n1>n3){
if (n2>n3){
    maior=n1
    mediano=n2;
    menor=n3;
}
else{
    
    mediano=n3;
    menor=n2;
}
 }
 else if (n2>n1 && n2>n3){
  maior = n2;
  menor = n1
  mediano=n3
 }
 else {
    console.log(`!algo deu errado!`)
 }
 console.log(`A ordem crescente é ${menor},${mediano},${maior}`)
