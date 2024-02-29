const escola = 'Cod3r'

console.log(escola.charAt(4))//retorna a string que está na posição do indice indicado
console.log(escola.charAt(5))//Caso o indice escolhido não exista retornará um valor vazio
console.log(escola.charCodeAt(3))//retorna não a string, mas sim o valor da tabela ask ou unicod
console.log(escola.indexOf('3'))//para saber o indice que esta pocisionado a string
console.log(escola.substring(1))//mostra todos os strings depois do indice escolhido
console.log(escola.substring(0, 3))//montra os string que estao entre os indice escolhidos (nesse caso ira mostrar o indice 0 1 2 )
console.log('Escola '.concat(escola).concat('!'))
console.log(escola.replace(3, 'e'))
console.log('Ana, Maria, Pedro'.split(','))// Cria uma Array a vírgula é o separador 
console.log('escola ' + escola + '!')//Támbem irá concatenar +