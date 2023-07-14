let prompt = require ('prompt-sync')()
let numeroInteiro = parseInt( prompt( "Digite um numero inteiro:"))
if(numeroInteiro > 0) {
    console.log( "O numero inserido e positivo")

}else if (numeroInteiro < 0 ){
    console.log( "O numero inserido e Negativo")
  
}else{
    console.log( "O numero inserido e Zero")
   
}