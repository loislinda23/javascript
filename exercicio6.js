let prompt = require("prompt-sync")();
let nota1 = parseFloat (prompt("Digite o primeira nota"))
let nota2 = parseFloat (prompt("Digite o segunda nota"))
let nota3 = parseFloat (prompt("Digite o terceira nota"))
let nota4 = parseFloat (prompt("Digite o quarta nota"))
let medianota = (nota1+nota2+nota3+nota4)/4
if(medianota>=7){
    console.log("Aprovado media="+medianota)
}else if(medianota>=5 && medianota <7){
    console.log("Recuperacao media="+medianota)

}else{
    console.log("Reprovado media="+medianota)
}

