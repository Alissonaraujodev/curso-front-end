// funcão sem retorno

function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)// irá execytar a funçao normalmente 
imprimirSoma(2)// o segundo número seriado considerado undefined retornan NaN
imprimirSoma(5,6,4,7,9)// aqui só seriam considerados os dois primeiros números
imprimirSoma()//os dois valores são comsideras umdefined retornando NaN

//Função com retorno 

function soma(a, b = 0){
    return a + b
}
console.log(soma(2, 3))
console.log(soma(2))//nesse caso mesmo não tendo colocado o segundo valor retornara um valor válido, pois o segundo paremetro (b) já foi pré-definido, pode-se pré-definir todos os parametros