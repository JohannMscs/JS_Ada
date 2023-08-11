//Array parte 2 metodos de arrays

const arr1 = [30,12,45,34,29]
let arr2 =[]

//fatiamento: slice
console.log(arr1.slice(0,4))// declara inicio e fim

console.log(arr1.slice(2))// so declara o final

console.clear()
//adicionando elemento push | unshift

console.log("antes de adicionar", arr2)

arr2.push(20,30)
arr2.push(10)

console.log("depois de adicionar", arr2)

console.log("antes de adicionar com unshift", arr2)

arr2.unshift(40)

console.log("depois de adicionar com unshift", arr2)

console.clear()

//removendo elementos: pop | shift

console.log("antes de remover com o pop", arr2)

const elementoRemovido = arr2.pop()

console.log("depois de remover com o pop", arr2)

console.log("elemento removido", elementoRemovido)

console.log("antes de remover com o shift", arr2)

const elementoRemovido2 = arr2.shift()

console.log("depois de remover elemento com o shift", arr2)

console.log("elemento removido", elementoRemovido2)

console.clear()
// concatenacao de arrays
console.log("arr1", arr1)
console.log("arr2", arr2)

console.log(arr1.concat(arr2))

console.clear()

//buscando elementos no array indexOf | lastIndexOf

console.log(arr1)

let indiceDoElemento34 = arr1.indexOf(34)

console.log(indiceDoElemento34)

console.clear()

let arr3 = [1,3,4,5,3]

console.log(arr3)

console.log(arr3.indexOf(3))

console.log(arr3.lastIndexOf(3))

console.clear()

//descobrindo a existencia de um elemento: includes

console.log(arr1)

console.log(arr1.includes(10))

console.log(arr1.includes(12))

console.clear()

// invetendo array: reverse

console.log("arr1 normal", arr1)

let arr1Invertido = arr1.reverse()

console.log("arr1 invertido", arr1Invertido)

