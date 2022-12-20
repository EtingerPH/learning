//Esse cód filtra todos os clientes do array que tem a chave apartamento = true, mas não possuem
//o complemento, nesse caso é usado o método hasOwnProperty() que verifica se o objeto
//possui a propriedade passada como parâmetro do método.
const clientes = require("./clientes.json")

function apartamentosSemComplementos(clientes){
    return clientes.filter((cliente)=>{
        return cliente.endereco.apartamento && 
        !cliente.endereco.hasOwnProperty("complemento")//Obs: sinal de "!"" no inicio da linha informa negação
    })
}

const filtrado = apartamentosSemComplementos(clientes)
console.log(filtrado)



