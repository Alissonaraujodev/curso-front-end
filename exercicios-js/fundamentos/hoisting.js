console.log('a= ', a)
var a = 2
console.log('a= ', a)

//A linguagem faz um isamento(hoisting), no caso da variavel ter sido declarada com var, mesmo a variavel sendo declarada depois, ela é reconhecida como undefined e depois é colocado um valor nela é como se ela fizesse da seguinte forma  
/*
var a
console.log('a= ', a)
a= 2
console.log('a= ', a)
*/

console.log('b= ', b)//[ERRO!]
let b = 2
console.log('b= ', b)

//No caso de let nao é feito o isamento devido ela ser de escopo de bloco, gerando um erra
