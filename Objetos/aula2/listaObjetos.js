//Neste arquivo é usada uma lista de objetos como uma propriedade do objeto cliente
// a partir do momento que temos uma lista dentro de um objeto podemos manipular como 
//com todas as funções de array pq de fato é um array porém dentro de um objto
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

cliente.enderecos.push( // nessa linha é utilizado o método push() de arrays para incluir no final mais
//dois objetos ao array enderecos 
  {
    rua: "Rio Branco",
    numero: 1170,
    complemento: "casa",
  },
  { 
    rua: "Marechal Mallet", 
  numero: 300, 
  complemento: "apartamento 13" 
  }
);

  const apenasCasa = cliente.enderecos.filter(// esa linha é usado o método filter() que é um 
  //método de arrays, para filtrar apenas os objetos da lista enderecos que possuem "casa" na propriedade
  // complemento 
    (endereco) => endereco.complemento === 'casa'
  )

//console.log(cliente);
console.log(apenasCasa)
