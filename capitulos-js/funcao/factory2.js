function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto:0.1
        }
    }


console.log(criarProduto('iPad', 1000.00))
console.log(criarProduto('celular', 700.00))