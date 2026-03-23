//Francisco tem 1,50m e cresce 2 centímetros por ano, enquanto Sara tem 1,10m e cresce 3
//centímetros por ano. Faça um algoritmo que calcule e imprima na tela em quantos anos serão
//necessários para que Francisco seja maior que Sara.
let francisco = 1.50;
let sara = 1.10;
let anos = 0;
while (francisco <= sara) {
    francisco += 0.02;
    sara += 0.03;    
    anos++;
}
console.log("serão necessários", anos, "anos para Francisco ser maior que Sara");