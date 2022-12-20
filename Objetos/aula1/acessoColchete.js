//Nesse caso é usado um forEach dentro de um campo que possui o valor das chaves no caso de não saber
//exatamente quais sao as chaves existentes no objeto
//o forEach vai percorrer todo o array chaves que possui os valores que desejamos e utilizando o parâmetro
//da função irá acessar a propriedade dessa chave no objeto, para isso é necessário utilizar os [] ao
//invés de cliente.nome por exemplo
const cliente = {
    nome: 'Anna Julia',
    idade: 22,
    peso: '50kg',
    cpf: '11122233445'
}
    
const chaves = ['nome', 'idade', 'peso', 'cpf']

chaves.forEach((chave) =>{
    console.log(`A chave ${chave} tem o valor de ${cliente[chave]} `)
})
