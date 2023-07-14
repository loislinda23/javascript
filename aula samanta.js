//operadores logicos 
// OU (||)
// E (&&)
//NÀO (!)
// ! true = false
// Quero validar se o numero digitado pelo usuario 
// esta no intervalo entre 10 a 20 
let prompt = require ('prompt-sync')();
// let numero =parseInt(prompt ("Digite um numero"));
// if(numero >= 10 && numero <=20){
//     console.log("o numero informado esta no intervalo desejado, entre 10 e 20")
// }else{
//     console.log("o numero esta fora do intervalo desejado!!!!!!!!")

// }

let animal = prompt("Digite o nome do animal pra saber o que ele tem a dizeer:")
switch(animal){
    case "cachorro":
        console.log("au auuuuu")
        break;
    case"gato":
        console.log("miauuuu")
    case "vaca":
            console.log("muuuuu")
            break;
}