const valores = [7.7, 8.8, 9.9, 5.5]//Array podem armazenar mais e um valor, sejam números, strings e ficam entre []

console.log(valores[0], valores[3])
console.log(valores[4])

valores[6] = 10 // para adicionar um valor em um indice especifico, caso ele não exista será criado, pode ser criado um espaçp de indice vazio(<# empty items) dependo da escolha de indice
console.log(valores)
console.log(valores.length)//quantidade de valores na array

//valores.push({id: 3}, !4,null, 'test' )//para adicionar valores no final da array
console.log(valores)

console.log(valores.pop())// deletar o ultimo indice da array
delete valores [0]// deletar um indice especifico 
console.log(valores)

console.log(typeof valores)


