var teclado = require("prompt-sync")();
var n1 = parseFloat(teclado("Digite a primeira nota:"));
var n2 = parseFloat(teclado("Digite a segunda nota:"));
var media = (n1 + n2) / 2;
if (media >= 8.5 && media <= 10) {
    console.log("A media ".concat(media, " tem nota \"A\""));
}
if (media >= 7 && media < 8.5) {
    console.log("A media ".concat(media, " tem nota \"B\""));
}
if (media >= 5 && media < 7) {
    console.log("A media ".concat(media, " tem nota \"C\""));
}
if (media >= 3 && media < 5) {
    console.log("A media ".concat(media, "tem nota \"D\""));
}
if (media < 3) {
    console.log("A media ".concat(media, " tem nota \"E\""));
}
