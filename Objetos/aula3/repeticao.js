//Nesse cód é usado for in, que é um laço que percorre as propriedades de um objeto 
const cliente = {
  nome: "Patricia",
  profissao: "Enfermeira",
  idade: 50,
  telefone: ["13 99556-3254", "13 98456-3658"],
};

cliente.enderecos = [
  {
    rua: "Mal Floriano peixoto",
    numero: 272,
    complemento: "casa",
  },
];

for(let chave in cliente){ //Essa é a sintaxe de for in usada para percorrer o objeto cliente
    let tipo = typeof cliente[chave]

    if(tipo !== 'object' && tipo !== 'function') { //esse is filtra apenas as propriedades diferente de objeto e function
          console.log(`a chave ${chave} tem o valor: ${cliente[chave]}`)
    }
}