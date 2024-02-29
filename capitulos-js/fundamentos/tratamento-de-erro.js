function tratarErrorlancar(erro){
    //throw new Error ('[erro!!!]')
    //throw 10
    //throw true
    //throw 'msg'
    throw {
        nome: erro.name,
        msg : erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }catch(e){
        tratarErrorlancar(e)
    }finally{
        console.log('final.')
    }
    
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)