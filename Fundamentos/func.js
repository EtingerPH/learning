const soma = (num1, num2) => {
    const type1 = typeof num1
    const type2 = typeof num2 
    
    if (type1 !== 'number' || type2 !== 'number') {
        console.log('Há um valor diferente de número em sua conta')
    }
    else{
        return num1 + num2
    }
}
const n1 = 4 
const n2 = 'Brasil'
console.log(soma(n1, n2))
