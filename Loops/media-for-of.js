const notas = [10, 8, 7.5, 6.5]
let soma = 0

//Nesse cód é usado o for-of onde o parâmetro de for é feito de forma escrita 
for (const nota of notas) {
    soma += nota
}
let media = soma / notas.length

console.log(`A média das notas é ${media}`)