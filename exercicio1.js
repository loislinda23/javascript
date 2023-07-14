/*
Faça um programa que receba o nome, cargo e salário de um
funcionário. Se o funcionário ganhar abaixo de 1000 reais, calcule o
salário acrescido de 10%. Ao final exiba o nome, o cargo e o salário
desse funcionário.
*/


let prompt = require ('prompt-sync')();

let nome = prompt("Digite o nome do funcionario: ")
let cargo = prompt("Digite o cargo")
let salario = parseFloat (prompt("digite o salario"))

if(salario<1000){
    let calculosalario = salario * 1.1
    console.log(nome)
    console.log(cargo)
    console.log(calculosalario)    
}else{
    console.log("voce nao tem aumento seu rico")
}
