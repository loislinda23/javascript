let prompt = require("prompt-sync")();
let numero = parseInt( prompt("Digite um numero;"))
if(numero % 2 == 0){
    console.log("Esse e um numero par")
}else{
    console.log("Esse numero e impar")
}
