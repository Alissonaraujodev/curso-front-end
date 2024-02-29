const funcs = []

for(var i = 0; i < 10;i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

//nos dois casos serao retornados o valor q vez o loop(for) ser encerrado nesse caso o 10, devido var ter escopo global não respeitando a inicialização da variavel i 