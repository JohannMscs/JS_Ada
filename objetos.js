//objetos

// como criar um objeto no Javascript

let pessoa = {
    nome: "Johann",
    idade: 21,
}

console.log(pessoa.nome)
console.log(pessoa.idade)

// como adicionar um elemento chave-valor

pessoa.altura = 1.72

console.log(pessoa)
console.log(pessoa.altura)

// como remver um elemento chave-valor

delete pessoa.altura

console.log(pessoa)

console.clear()

// como percorrer

for(let chave in pessoa){
    console.log(chave)
}