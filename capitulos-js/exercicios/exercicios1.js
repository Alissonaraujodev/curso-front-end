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
function bhaskaras(a, b, c){
   console.log( (-b + (Math.sqrt(b**2 - (4*a*c) )))/ 2*a)
}
bhaskaras(3, 5, 12)
