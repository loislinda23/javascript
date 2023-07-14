let prompt = require ('prompt-sync')();
let usuario = prompt("nome de usuario")
let senha = prompt("Digite a senha")
if  (usuario =="admin" && senha=="123"){
    console.log("acesso bem sucedido")
 
}else{console.log("senha incorreta")}
