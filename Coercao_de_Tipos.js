// coercao de tipos (conversao)

//coercao explicita (manual)
const numero = 10;

console.log(numero, typeof numero)

const numeroEmFormatoDeString = String(numero);
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString);

console.log(Number("1245"))
console.log(parseFloat('13131.323'))
console.log(parseInt(21121.444))
console.log(Boolean(2323245))

console.clear()

// coercao de tipos implicita (automatica)

console.log(10 +"34")
console.log(10 -"4" )
console.log(45 * "5" )
console.log( )

console.clear()

// exercicios

let n = 1+"1";//11
n = n -1;//10
console.log(n)

console.log(2+3+4+"5")//95

console.log("5"+2+3+4);//5234

console.log("10"-"4"-"3"-2+"5");//15