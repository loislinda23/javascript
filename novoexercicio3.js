let prompt = require ('prompt-sync')();
let primeiroNumero = parseInt(prompt("Digite o primeiro numero"))
let segundoNumero = parseInt(prompt("Digite o segundo numero"))
let terceiroNumero = parseInt(prompt("Digite o terceiro numero"))
if(primeiroNumero < segundoNumero < terceiroNumero){
    console.log("os numeros estao em ordem crescente!!")

}else{
    console.log("os numeros nao estao em ordem crescente")
}