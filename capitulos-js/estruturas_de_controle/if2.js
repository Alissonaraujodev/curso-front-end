function teste1(num){
    if(num > 7)
        console.log(num)
        console.log('final')
    
}
//caso não use chaves somente a primeira linha(sentença) fara parte de if 

teste1(6)
teste1(8)

function teste2(num){
    if(num > 7);{
        console.log(num)
    }
}

//caso coloque um poto e vírgula apos os parametro de if, vai ser como se o bloco estivesse vazio

teste2(6)
teste2(8)