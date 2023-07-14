let prompt = require ('prompt-sync')();
let numero = prompt("digite um numero de 1 a 7: ")
switch (numero) {
    case "1":
        console.log("o dia corresponde a segunda-feira")
        
        break;
        case "2":
            console.log("o dia corresponde a terca-feira")
            break
            case "3":
            console.log("o dia corresponde a quarta-feira")
            break  
            case "4":
            console.log("o dia corresponde a quinta-feira")  
             break
             case "5":
                console.log("o dia corresponde a sexta- feira")
              break
              case "6":
                console.log("o dia corresponde sabado") 
                break
                case "7":
                    console.log("o dia corresponde a domingo")
                break 

    default:
        console.log("o valor digitado não corresponde a um dia da semana")
        break;
}