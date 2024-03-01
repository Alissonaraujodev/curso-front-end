function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(2.5, 3.5, 4.5))
console.log(soma('a', 'b', 'c'))
console.log(soma('1', '2', '3', 'testando'))