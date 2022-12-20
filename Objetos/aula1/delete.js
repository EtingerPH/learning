//nesse arquivo será usado o operador delete para remover
//uma propriedade de um objeto
const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }

   delete objPersonagem.aliado //essa linha deleta a propriedade aliado

console.log(objPersonagem.aliado) //undefined

delete objPersonagem["status"]// Também é possível utilizar a notação de colchetes

console.log(objPersonagem.aliado) //undefined
console.log(objPersonagem.status) //undefined