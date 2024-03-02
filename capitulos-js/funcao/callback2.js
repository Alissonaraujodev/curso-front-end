const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem callback
const notasBaixas = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

//Com callback
const reprovados = nota =>  nota < 7
const notasBaixas2 = notas.filter(reprovados)
console.log(notasBaixas2)
