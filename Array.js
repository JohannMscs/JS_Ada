// Array


// como criar um array

let arr =['Johann', 21, 1.72, true]

console.log(arr)

// como acessar os elementos do arry

console.log(`Primeiro elemento ${arr[0]}`)
console.log(`Segundo elemento ${arr[1]}`)
console.log(`Terceiro elemento ${arr[2]}`)
console.log(`Quarto elemento ${arr[3]}`)

//como obter o tamanho do array

console.log(arr.length)

console.clear()

//percorrendo array

//modo 1
for(i = 0; i < arr.length; i++){
    console.log(arr[i])
    }


console.clear()

//modo 2
for(let elemento of arr){
    console.log(elemento)
}

console.clear()

//modo 3, percorre os indices e os elementos
for(let indice in arr){
    console.log(indice, arr[indice])
}