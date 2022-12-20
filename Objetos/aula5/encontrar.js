//Este Cód. procura um objeto dentro do array que tenha um determinado valor em uma chave informada.
const clientes = require("./clientes.json")

function encontrar (lista, chave, valor){
    return lista.find((objeto) => objeto[chave].includes(valor))
}
    const encontrado = encontrar(clientes, "nome", "Olva")
    
    const encontrado2 = encontrar(clientes, "telefone", "1198123183")

    console.log(encontrado2)

//console.log(clientes)
