//Faça um algoritmo que leia três notas obtidas por um aluno, e imprima na tela a média das notas.
//node quest2.js no terminal pra usar
const readline = require("readline");
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout });
leitor.question("digite o valor da sua 1° nota: ", function(A) {
leitor.question("digite o valor da sua 2° nota: ", function(B) {
leitor.question("digite o valor da sua 3° nota: ", function(C) {
    A = Number(A);
    B = Number(B);
    C = Number(C);
    let media = (A + B + C )/ 3;
        console.log("A sua média final é:", media);
    leitor.close();
});
});
});