//Faça algoritmo que leia o nome e a idade de uma peso e imprima na tela o nome da pessoa e se ela é maior ou menor de idade.
const readline = require("readline");
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout});
leitor.question("digite seu nome: ", function(nome) {
leitor.question("digite sua idade: ", function(idade) {
    idade = Number(idade);
    console.log("nome:", nome);
    if (idade >= 18) {
        console.log("você é maior de idade");
    } else {
        console.log("você é menor de idade");
    }
    leitor.close();
});
});