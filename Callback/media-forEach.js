//forEach serve para percorrer todo o array e executar uma função callback para cada um dos elementos

const notas = [10,7.5,8,6.5]
let soma = 0

//Nesse cód está sendo utilizado forEach para calcular a méda entre as notas do array
//Dentro do método forEach() é passado uma outra função chamada de função callback
// os parâmetros da função callback são nessa ordem: elemento, indice e array atual 
notas.forEach(nota => soma += nota)
    
    //console.log(i))

console.log(`A média das notas é ${soma / notas.length}`)