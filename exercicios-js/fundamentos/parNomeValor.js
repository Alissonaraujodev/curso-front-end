//par nome/valor
const saudacao = 'opa' // contexto léxico 1

function exec(){
    const saudacao = 'Falaaaaa'
    return saudacao
}

//objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome:'pedro',
    idade: 90,
    peso:85,
    endereco:{
        logradouro:'rua muito legal',
        numero:123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)