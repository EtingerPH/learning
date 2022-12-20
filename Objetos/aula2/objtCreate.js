//Neste cód há um aexemplo de como criar um novo objeto a partir de um já existente, pois assim
//como os arrays criar uma noa variável recebendo um objeto existente apenas irá instanciar esse
//primeiro objto, então nesse exemplo é utilizado o método Object.create() onde é passado como 
//parâmetro o objeto protótipo.
const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   }
   
   const objPersonagem2 = Object.create(objPersonagem)
   objPersonagem2.nome = "Gandalf, o Cinzento"
   
   console.log(objPersonagem.nome) //Gandalf
   console.log(objPersonagem2.nome) //Gandalf, o Cinzento