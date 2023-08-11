// funcoes

function saudacao(){
    console.log("ola, seja bem vindo(a) ao nosso curso de Javascript")
}

saudacao()

console.clear()

// como enviar paramentros para as funcoes

function saudacao(nome, curso = "Javascript"){
    console.log(`ola, ${nome} seja bem vindo(a) ao nosso curso de ${curso}`)
}

saudacao("Jorge", "Javascript")

console.clear()

// retorno da funcao


function soma(numero1, numero2){
    console.log("soma= ", numero1+numero2)
    return numero1 + numero2
}
const resultado = soma(10,40)

console.log(resultado/2)

console.clear()

function maiorDoQue50(numero){
    if(numero>50){
        return true
    }
    return false
}
maiorDoQue50(50)