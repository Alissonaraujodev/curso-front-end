const notas = [6.7, 7.7, 9.5, 8.1, 6.2]
for(let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso:64
}
for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}