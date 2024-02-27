let valor //nao inicializada(undefined)
console.log(valor)

valor = null //ausencia de valor ou endereço de memória 
console.log(valor)

//console.log(valor.toString())[ERRO!]
//não é possivel acessar valores,funções... de null 

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined 
//evite atribuir undefined, deixar pra própria linguagem, use delete ou null
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço ou zerar o preço
console.log(!!produto.preco)
console.log(produto)
