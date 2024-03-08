//exercicio 01
/*
function operacoes(a, b){
    console.log(a + b)
    console.log(a - b)
    console.log(a * b)
    console.log(a / b)
}
operacoes(3, 4)
*/

//exercicio 02
/*
function triangulos (a ,b, c){
    if (a + b < c || b + c < a || a + c < b){
        return a + b, b + c, a + c,
        console.log('[ERRO] medidas invalidas!')
    }else if (a == b && b == c){
        console.log('Equilátaro!')
    }else if (a == b || b == c || a == c){
        console.log('Isósceles!')
    }else if (a != b || a != c || b != c){
        console.log('Escaleno!')
    }
}triangulos(2, 1, 3)
*/

//exercicio 03
/*
function expo(a, b){
   console.log(a**b)
}
expo(2, 3)
*/

//exercicio 04
/*
function restoDeDivisao (a, b){
    console.log(a / b)
    console.log(a % b)
}
restoDeDivisao(3, 2)
*/

//exercicio 05
/*
const a = 0.1
const b = 0.2
const c = a + b
const d = c.toFixed(2)
console.log(d)
*/

//exercicio 06
/*
function jurosSimples (ci, tj, ta){
    const a = ci * (1 + tj )
    const b = a - ci
    const c = b * ta
    const d = a + c - b
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
}
jurosSimples(1000, 0.2, 4)

function jurosCompostos (ci, tj, ta){
    const a = ci * (1 + tj)
    const b = a * (1 + tj)
    const c = b - ci
    const d = c * ta
    const e = b + d - c*2

    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    console.log(e)
}

jurosCompostos(1000, 0.1, 4)
*/

//exercicio 07
/*
function bhaskaras(ax2, bx, c){
    let resultado = []
    let delta = (bx ** 2) - (4*ax2*c)
    if(delta < 0){
        return 'Delta é negativo'
    }
    let x1 = (- bx + Math.sqrt(delta)) / (2*ax2)
    let x2 = (- bx - Math.sqrt(delta)) / (2*ax2)
    resultado.push(x1)
    resultado.push(x2)
    return resultado
}
console.log(bhaskaras(1, 3, 2))
console.log(bhaskaras(3, 1, 2))
*/

//exercicio 08
 
//exercicio 09
/*
function sistemaDeNotas(nota){
    let notasArredondadas = arredondar(nota)
    if(notasArredondadas < 40){
        console.log(`Sua nota foi ${notasArredondadas} , Reprovado!`)
    }else{
        console.log(`Sua nota foi ${notasArredondadas} , Aprovado!`)
    }
}
function arredondar(nota){
    if(nota % 5 > 2){
        return nota + (5 - (nota % 5))
    }else {
        return nota
    }
}
sistemaDeNotas(36)
sistemaDeNotas(43)
sistemaDeNotas(52)
sistemaDeNotas(88)
sistemaDeNotas(100)
*/

//exercicio 10
/*
function divisivelPor3(n){
    if(n % 3 > 0){
        return false
    }else {
        return true
    }
}
console.log(divisivelPor3(10))
console.log(divisivelPor3(15))
console.log(divisivelPor3(300))
*/

//exercicio 11
/*
function anoBissexto(ano){
    if(ano > 0 && ano % 4 == 0 || ano % 400 == 0 && ano % 100 != 0){
        return true
    }else {
        return false
    }
}
console.log(anoBissexto(2020))
console.log(anoBissexto(2021))
console.log(anoBissexto(2022))
console.log(anoBissexto(2023))
console.log(anoBissexto(2024))
console.log(anoBissexto(0))
*/

//exercicio 12
/*
function fatorial(numero){
   if(numero == 0) {
    return 1
   }else{
    return numero * fatorial(numero - 1) 
   }
}
console.log(fatorial(5))
*/

//exercicio 13
/*
function diaDaSemana(n){
    switch(n){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            console.log('Dia útil')
            break;
        case 1:
        case 7:
            console.log('Final de semana')
            break;
        default:
            console.log('Dia inválido')
            break;
    }
}
diaDaSemana(2)
diaDaSemana(8)
diaDaSemana(7)
diaDaSemana(1)
*/

//exercicio 14
/*
function mercado(fruta){
    switch(fruta){
        case 'maça':
            console.log('Não vensemos essa fruta aqui.')
            break;
        case 'kiwi':
            console.log('Estamos com escassez de kiwi.')
            break;
        case 'melancia':
            console.log('Aqui esta, são R$3,00 o Kg.')
            break;
        default:
            console.log('[ERRO]!')
    }
}
mercado('maça')
mercado('kiwi')
mercado('melancia')
mercado('laranja')
*/

//exercicio 15
/*
function comprarCarro(modelo){
    switch(modelo){
        case 'hatch':
            return 'Compra efetuada com sucesso.'
            break;
        case 'sedans': 
        case 'motocicletas': 
        case 'caminhonetes':
            return 'Tem certeza que não prefere outro modelo?'
            break;
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui.'
            break;
    }
}
console.log(comprarCarro('sedans'))
console.log(comprarCarro('motocicletas'))
console.log(comprarCarro('caminhonetes'))
console.log(comprarCarro('hatch'))
console.log(comprarCarro('onibus'))
console.log(comprarCarro('caminhoes'))
*/

//exercicio 16
/*
function calculadora(numero1, operacao, numero2){
    switch(operacao){
        case '+':
            return numero1 + numero2
            break;
        case '-':
            return numero1 - numero2
            break;
        case '*':
            return numero1 * numero2
            break;
        case '/':
            return numero1 / numero2
            break;
        default: 
            return 'Operação inválida'
    }
}
console.log(calculadora(1,'+',2))
console.log(calculadora(1,'-',2))
console.log(calculadora(1,'*',2))
console.log(calculadora(1,'/',2))
console.log(calculadora(1,'%',2))
*/

//exercicio 17
/*
function aumento(plano, salario){
    switch(plano){
        case 'a':
            return salario * (1 + 0.1)
            break;
        case 'b':
            return salario * (1 + 0.15)
            break;
        case 'c':
            return salario * (1 + 0.2)
            break;
        default:
            return 'Plano inválido'
    }
}
const a = aumento('a',1500)
console.log(a.toFixed())
const b = aumento('b',1500)
console.log(Math.round(b))
console.log(aumento('c',1500))
console.log(aumento('d',1500))
*/

//exercicio 18

