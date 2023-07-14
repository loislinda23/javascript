const PromptSync = require("prompt-sync");

let prompt = require (~PromptSync)()
let salario =parseFloat(prompt("Digite o salario:"))
if(salario < 500){
// calcular  o acrescimo
salario = salario * 1.3
console.log("O novo salario e de: R$" + salario.toFixed(2))

}else {
    // Exibe mensagem 
    console.log(`Seu Salario è de R$ ${salario}, voce nao atende o requisito de reajuste n`)
}
