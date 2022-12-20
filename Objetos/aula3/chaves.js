//Nesse cód é usado o método Object.keys() que serve para retornar um array com todas as chaves de um 
//objeto que é passado como parâmetro
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

  const chavesObjeto = Object.keys(cliente)

  if(!chavesObjeto.includes('enderecos')){
    console.error('É necessário ter um endereço.')
  }else{
    console.log(chavesObjeto)
  }