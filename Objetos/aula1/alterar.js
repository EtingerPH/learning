const pessoa = {
    nome: 'Anna',
    profissao: 'Veterinaria'
}
console.log(pessoa.nome)// aqui vai retornar o valor
//da chave nome do obj pessoa
console.log(pessoa.telefone)// como a propriedade telefone
//não foi definida no objeto aqui irá retornar undefined
pessoa.telefone = '13 99115-4456'//essa linha atribui um
//valor a propriedade telefone no objeto
console.log(pessoa.telefone)

pessoa.nome = 'Anna Julia' // essa linha altera a 
//propriedade nome 
console.log(pessoa)

