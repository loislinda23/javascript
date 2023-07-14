let prompt = require("prompt-sync")();
let numero1 = parseFloat (prompt("Digite o primeiro numero"))
let numero2 = parseFloat (prompt("Digite o segundo numero"))
if( numero1 > numero2) {
    console.log("O numero1 e > numero2")

}else{
    console.log("O numero2 e > numero1")
}