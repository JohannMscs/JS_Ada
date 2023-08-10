// laços númericos for

const input = require('readline-sync')

//o problema
/*const nota1 = Number(input.question("informe a nota 1: "))

const nota2 = Number(input.question("Informe a nota 2: "))

const nota3 = Number(input.question("Informe a nota 3: "))

let media = (nota1+nota2+nota3) /3
*/
//acumulador

let acumulador = 0

acumulador = acumulador +10

acumulador +=2 

acumulador++
console.log(acumulador)

acumulador ++

console.clear()

//estrutura for

for(let i = 0; i <10; i++){ 
    console.log("repeticao", i)
}

console.clear()

for(let i = 12; i >8; i--){
    console.log("repeticao", i)
}

console.clear()

//resolver o problema inicial

let nota;
let soma = 0;

for(let i =1; i<=3; i++){
    nota = Number(input.question(`informe a nota ${i} do aluno: `))

    soma = soma+ nota
}
console.log(`A media do aluno e ${soma/3}`)