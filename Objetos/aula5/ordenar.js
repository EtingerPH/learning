//Este cód ordena uma lista de objetos a partiri de um parâmetro de propriedade
const clientes = require("./clientes.json");

function ordenar(lista, propriedade) {
  const resultado = lista.sort((a, b) => { //Aqui é usado o método sort() que ordena um array, são passados
    // dois parâmetros de comparação dentro da arrow function
    if (a[propriedade] < b[propriedade]) {//Esse if compara as propriedades de 'a' e 'b'
      return -1; // Se lista.sort(a, b) for menor que 0, ordena 'a' para um índice anterior a 'b'
    }
    if (a[propriedade] > b[propriedade]) {
      return 1;
    }
    return 0; // Se retornar 0, deixa a e b inalterados em relação um ao outro, mas ordenado em 
    // relação a todos os outros elementos.
  });
  return resultado;
}

const ordenadoNome = ordenar(clientes, "nome");

console.log(ordenadoNome);
