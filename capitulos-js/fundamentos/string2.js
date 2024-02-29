const nome = 'Alisson'
const concatenacao = 'Olá ' + nome + '!'
const templete = `
    Olá 
    ${nome} !`

console.log(concatenacao, templete)
/*O templete string permite concatenar sem o +, e permite a quebra de linha*/ 

console.log(`1 + 1= ${1 + 1 }`)
//Permite tambem fazer expreções numericas

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')} !`)
//Permite a chamada de funções 