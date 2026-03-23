//1 - Faça um algoritmo que calcule o IMC (Índice de Massa Corporal) de uma pessoa, leia o seu
//peso e sua altura e imprima na tela sua condição de acordo com a tabela abaixo:
//Fórmula do IMC = peso / (altura) 2
//Tabela Condições IMC
//Abaixo de 18,5 | Abaixo do peso
//Entre 18,6 e 24,9 | Peso ideal (parabéns)
//Entre 25,0 e 29,9 | Levemente acima do peso
//Entre 30,0 e 34,9 | Obesidade grau I
//Entre 35,0 e 39,9 | Obesidade grau II (severa)
//Maior ou igual a 40 | Obesidade grau III (mórbida)
//node quest1.js no terminal pra usar
const readline = require("readline");
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout});
leitor.question("digite o seu peso: ", function(peso) {
    leitor.question("digite a sua altura: ", function(altura) {
        peso = parseFloat(peso);
        altura = parseFloat(altura);
        let IMC = peso / (altura ** 2);
        if (IMC < 18.5) {
            console.log("abaixo do peso");
        } else if (IMC >= 18.5 && IMC <= 24.9) {
            console.log("peso ideal (parabéns)");
        } else if (IMC >= 25.0 && IMC <= 29.9) {
            console.log("levemente acima do peso");
        } else if (IMC >= 30.0 && IMC <= 34.9) {
            console.log("obesidade grau I");
        } else if (IMC >= 35.0 && IMC <= 39.9) {
            console.log("obesidade grau II (severa)");
        } else {
            console.log("obesidade grau III (mórbida)");
        }
        console.log("seu IMC é:", IMC.toFixed(2));
        leitor.close();
    });
});