//Nesse exercício foi usado o método de string "substring()"  onde é informado a posição inicial
// e a quantidade de posições que deseja que seja apresentada.
const cliente = {
    nome: 'Anna Julia',
    idade: 22,
    peso: '50kg',
    cpf: '11122233445'
}

console.log(`O nome da pessoa é ${cliente.nome} 
e os primeiros 3 digitos do seu cpf são ${cliente.cpf.substring(0,3)}`)