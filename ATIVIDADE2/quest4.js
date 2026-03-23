//Faça um algoritmo que leia o valor de um produto e determine o valor que deve ser pago,
//conforme a escolha da forma de pagamento pelo comprador e imprima na tela o valor final do
//produto a ser pago. Utilize os códigos da tabela de condições de pagamento para efetuar o cálculo adequado.
//Tabela de Código de Condições de Pagamento
//1 - À Vista em Dinheiro ou Pix, recebe 15% de desconto
//2 - À Vista no cartão de crédito, recebe 10% de desconto
//3 - Parcelado no cartão em duas vezes, preço normal do produto sem juros
//4 - Parcelado no cartão em três vezes ou mais, preço normal do produto mais juros de 10%
const readline = require("readline");
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
leitor.question("digite o valor do produto: ", function(valor) {
leitor.question("digite a forma de pagamento (1 a 4): ", function(opcao) {
    valor = Number(valor);
    opcao = Number(opcao);
    let total;
    if (opcao === 1) {
        total = valor - (valor * 0.15);
        console.log("pagamento à vista (Pix/Dinheiro) - 15% de desconto");
    } else if (opcao === 2) {
        total = valor - (valor * 0.10);
        console.log("pagamento à vista no cartão - 10% de desconto");
    } else if (opcao === 3) {
        total = valor;
        console.log("parcelado em 2x - sem juros");
    } else if (opcao === 4) {
        total = valor + (valor * 0.10);
        console.log("parcelado em 3x ou mais - 10% de juros");
    } else {
        console.log("opção inválida");
        leitor.close();
        return;
    }
    console.log("valor final a pagar: R$", total.toFixed(2));
    leitor.close();
});
});