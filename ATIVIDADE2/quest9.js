//Faça um algoritmo que leia uma temperatura em Fahrenheit e calcule a temperatura
//correspondente em grau Celsius. Imprima na tela as duas temperaturas.
//Fórmula: C = (5 * ( F-32) / 9)
const readline = require("readline");
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout});
leitor.question("digite a temperatura em Fahrenheit: ", function(F) {
    F = Number(F);
    let C = (5 * (F - 32)) / 9;
    console.log("temperatura em Fahrenheit:", F);
    console.log("temperatura em Celsius:", C.toFixed(2));
    leitor.close();
});