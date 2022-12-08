const idadeMinima = 18;
const idadeCliente  = 29; 


const bebidaMaior = 'Cerveja'
const bebidaMenor = 'Suco'
const nome = 'Pedro'

const pedido =`${nome} diz: "Olá, minha idade é ${idadeCliente} e eu gostaria de beber ${idadeCliente >= idadeMinima ? bebidaMaior : bebidaMenor}"`
console.log(pedido)

                 // Condição                //True                //False   
//console.log(idadeCliente >= idadeMinima ? "Maior de idade" : "Menor de idade");
