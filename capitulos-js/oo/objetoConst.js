const pessoa = {nome: 'joão'}
pessoa.nome = 'Pedro'
console.log(pessoa)

Object.freeze(pessoa)
pessoa.nome = ' Maria'
console.log(pessoa.nome)