//Faça um algoritmo que leia três valores que representam os três lados de um triângulo e
//verifique se são válidos, determine se o triângulo é equilátero, isósceles ou escaleno.
const readline = require("readline");
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout});
leitor.question("digite o lado A: ", function(A) {
leitor.question("digite o lado B: ", function(B) {
leitor.question("digite o lado C: ", function(C) {
    A = Number(A);
    B = Number(B);
    C = Number(C);
    if (A < B + C && B < A + C && C < A + B) {
        if (A === B && B === C) {
            console.log("triângulo equilátero");
        } else if (A === B || A === C || B === C) {
            console.log("triângulo isósceles");
        } else {
            console.log("triângulo escaleno");
        }
    } else {
        console.log("os valores não formam um triângulo");
    }
    leitor.close();
});
});
});