// Armazenando uma função em uma váriavel*

const imprimirSoma = function(a, b){
    console.log(a + b)
}
imprimirSoma(2,3)

// Armazenando uma função arrow em uma variavel*
//Arrow => é uma forma abreviada de chamar uma função // sistaxe reduzida 

const soma = (a, b) => {
    return a + b
} 
console.log(soma(2,3))

//retorno implicito 
//Aqui tambem é uma reduzaida de função, quando tem apenas um parametro nao é necessario nem chacem{} nem parenteses () // sistaxe reduzida
 const subtracao = (a, b) => a - b
 console.log(subtracao(3, 3))