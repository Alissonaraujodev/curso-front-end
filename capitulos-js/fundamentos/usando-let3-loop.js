const funcs = []

for(let i = 0; i < 10;i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[1]()
funcs[8]()

//nesse caso como let tem escoopo de bloco e respeita a inicialização de for ele retornara os valores certos do indice 

