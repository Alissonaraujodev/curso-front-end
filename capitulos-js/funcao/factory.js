/*
const prod1 = {
    neme: '....',
    preço: 8
}
const prod2 = {
    neme: '....',
    preço: 99
}
*/

//factory
function criarProduto(nome, preco){
    return{
        nome:'abc',
        preco: 10
    }
}

console.log(criarProduto())