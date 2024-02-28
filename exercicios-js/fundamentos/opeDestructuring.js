const pessoa = {
    nome: 'Ana',
    idade: 25,
    endereco:{
        logradouro: 'Rua Abc',
        numero: 1000
    }
}
// operador de desestruturação, extrair ou ter acesso algum valor da variavel, isso não quer dizer q esses valores serão apagados,eles serao apenas usados, mas a variavel a que eles pertencen continua da mesma forma
const { nome, idade} = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereco: { logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

console.log(pessoa)