const teclado = require(`prompt-sync`)();

let n1: number = parseFloat(teclado(`Digite a primeira nota:`));
let n2: number = parseFloat(teclado(`Digite a segunda nota:`));

let media: number = (n1+n2)/ 2;

if (media >= 8.5 && media <= 10){
  console.log(`A media ${media} tem nota "A"`);
}
if (media >= 7 && media < 8.5){
  console.log(`A media ${media} tem nota "B"`);

}
if (media >= 5 && media < 7){
  console.log(`A media ${media} tem nota "C"`);
}

if(media >= 3 && media < 5){
  console.log(`A media ${media}tem nota "D"`);
}

if(media < 3){
 console.log(`A media ${media} tem nota "E"`);
}