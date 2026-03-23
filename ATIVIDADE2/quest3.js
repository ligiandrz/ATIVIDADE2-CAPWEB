//Faça um algoritmo que leia quatro notas obtidas por um aluno, calcule a média das nota
//obtidas, imprima na tela o nome do aluno e se o aluno foi aprovado ou reprovado. Para o aluno
//ser considerado aprovado sua média final deve ser maior ou igual a 7.
const readline = require("readline");
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout});
leitor.question("digite o nome do aluno: ", function(nome) {
leitor.question("digite a 1° nota: ", function(A) {
leitor.question("digite a 2° nota: ", function(B) {
leitor.question("digite a 3° nota: ", function(C) {
leitor.question("digite a 4° nota: ", function(D) {
    A = Number(A);
    B = Number(B);
    C = Number(C);
    D = Number(D);
    let media = (A + B + C + D) / 4;
    console.log("aluno:", nome);
    console.log("média final:", media.toFixed(2));
    if (media >= 7) {
        console.log("parabéns ! você foi aprovada(o)");
    } else {
        console.log("reprovado");}
    leitor.close();
});
});
});
});
});