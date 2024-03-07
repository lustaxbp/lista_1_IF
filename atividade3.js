/* (5 pontos)
3 – Faça um programa que verifique se uma letra digitada é vogal ou consoante.
Nome Aluno: Luis Otavio Bordin Pereira
*/
var teclado = require("prompt-sync")();
var letra = String(teclado("digite uma letra: "));
if (letra == "A" || letra == "a" || letra == "E" || letra == "e"
    || letra == "i" || letra == "I" || letra == "o" || letra == "O"
    || letra == "u" || letra == "U") {
    console.log(" A letra ".concat(letra, " \u00E9 uma vogal"));
}
else {
    console.log(" a letra \"".concat(letra, "\" \u00E9 consoante"));
}
