//Nesse cód é usado o espalhamento, como em arrays porém são espalhadas as propriedades de um objeto em outro objeto
const cliente = {
    nome: "Patricia",
    profissao: "Enfermeira",
    idade: 50,
    telefone: ["13 99556-3254", "13 98456-3658", "13 99254-6349"],
  };
  
  cliente.enderecos = [
    {
      rua: "Mal Floriano peixoto",
      numero: 272,
      complemento: "casa",
    },
  ];

  function ligandoParaCliente(telefoneComercial, telefoneResidencial,telefoneAdicional){
    console.log(`ligando para ${telefoneComercial}`)
    console.log(`ligando para ${telefoneResidencial}`)
    console.log(`ligando para ${telefoneAdicional}`)
  }

  //ligandoParaCliente(cliente.telefone[0], cliente.telefone[1]) 
//acima temos uma forma de executar a chamada da função usando o array telefone como parâmetro
  ligandoParaCliente(...cliente.telefone)// essa é a forma usando espalhamento

  const encomenda = {
    destinatario: cliente.nome,
    //endereco: cliente.enderecos[0] //essa seria a forma de trazer um objeto endereço 
    ...cliente.enderecos[0] //dessa foram todas as propriedades do objeto cliente.endereco serão espalhadas
    //como propriedades dentro deste objeto encomenda
  }

  console.log(encomenda)