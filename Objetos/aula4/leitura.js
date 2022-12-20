const dados = require("./cliente.json") //a função require() recebe como parâmetro um JSON 
//que será atribuído a variável dados.

console.log(dados)

const clienteString = JSON.stringify(dados)//a função stringify() recebe como parâmetro um objeto e  
//exibe esse objeto como uma string. Essa função é útil para preparar os dados para incluir em
//um JSON 

console.log(clienteString)
console.log(typeof clienteString)

const objetoCliente = JSON.parse(clienteString) //Essa função faz o caminho inverso da JSON.stringify(), ou seja,
//recebe como parâmetro uma string e converte em um objeto.

console.log(objetoCliente)