{
    {
        {
            var sera = 'Será???'
            console.log(sera)
        }
    }
}
console.log(sera)

//uma variavel(var) pode ser acessada em qualquer logar mesmo estando dentro de um bloco, ela só não pode ser acessada se estiver dentro de uma função, var age de fotma global 

function teste(){
    var local = 123
    console.log(local)
}
teste()
//console.log(local) [ERRO!]