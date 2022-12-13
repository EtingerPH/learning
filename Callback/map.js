//Adicionar 1 ponto extra nas notas de um aluno utilizando o método map()
//Esse método reescreve os valores de um array sem modificar um array original
//sendo necessário a criação de uium novo array para receber esse resultado

const notas = [10, 9.5, 8, 7, 6]

const notasAtualizadas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1  
})

console.log(notasAtualizadas)

// Esta é uma forma de realizar a mesma tarefa usando forEach()
// notas.forEach((nota, i) => {
//     notas[i] = nota + 1 >= 10 ? 10 : notas[i] + 1
// })

// console.log(notas)