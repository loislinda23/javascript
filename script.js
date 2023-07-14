console.log("Exemplo 4")

let prompt = require("prompt-sync")();
//camelCase
let primeiraNota = parseFloat( prompt("digite a primeira nota;"))
let segundaNota = parseFloat(prompt("digite a segumda nota;"))
let soma = primeiraNota + segundaNota
console.log(soma)
let media = soma / 2
console.log(" A media dos alunos que vao embora antes da hora e:" + media)
