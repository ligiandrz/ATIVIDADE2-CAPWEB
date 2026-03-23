//Faça um algoritmo que leia o ano em que uma pessoa nasceu, imprima na tela quantos
//anos, meses e dias essa pessoa ja viveu. Leve em consideração o ano com 365 dias e o mês com 30 dias.
const readline = require("readline");
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout});

leitor.question("digite o ano de nascimento: ", function(anoNascimento) {

    anoNascimento = Number(anoNascimento);
    let anoAtual = 2026; // pode mudar se quiser
    let idadeAnos = anoAtual - anoNascimento;
    let meses = idadeAnos * 12;
    let dias = idadeAnos * 365;
    console.log("Você já viveu:");
    console.log(idadeAnos, "anos");
    console.log(meses, "meses");
    console.log(dias, "dias");

    leitor.close();
});