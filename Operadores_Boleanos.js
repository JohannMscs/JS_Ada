// Operadores boleanos

//igualdade ==(ou ===, difere os tipos)
//desigualdade !=(ou !==, difere os tipos)
//maior que >
//menor que <
// maior ou igual >=
//menor ou igual <=

const numero = 10;
console.log( numero == 20)
console.log( numero != 20)
console.log( numero > 20)
console.log( numero < 20)
console.log( numero >= 20)
console.log( numero <= 20)

console.clear()
console.log(10 == "10")
console.log(10 === "10")
console.log(10 != "10")
console.log(10 !== "10")

console.clear()

//conjucoes logicas

// AND => &&
let idade = 20;
let tenhoCNH = true;

const possoDirigir = idade >=18 && tenhoCNH === true

console.log("posso dirigir ? ",possoDirigir)

// OR => ||
idade =60

const votoFacultativo = idade <18 || idade>=65

console.log("meu voto é facultativo ?", votoFacultativo)


// NOT => 

const estouEstudandoJavascript = false 
console.log(!estouEstudandoJavascript)