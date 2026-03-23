//Faça um algoritmo que receba um valor A e B, e troque o valor de A por B e o valor de B por
//A e imprima na tela os valores.
const readline = require("readline");
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout});
leitor.question("digite o valor de A: ", function(A) {
leitor.question("digite o valor de B: ", function(B) {
    console.log("antes da troca:");
    console.log("A =", A);
    console.log("B =", B);

    let temp = A;
    A = B;
    B = temp;
    console.log("Depois da troca:");
    console.log("A =", A);
    console.log("B =", B);

    leitor.close();
});
});