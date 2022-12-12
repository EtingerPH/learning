const alunos = [
    "João",
    "Ana",
    "Caio",
    "Lara",
    "Marjorie",
    "Léo"
]

alunos.splice(1, 2, "Rodrigo")

console.log(alunos)

// O método splice aceita 3 parâmetros, o primeiro recebe a posição do array, 
// o segundo recebe quantos itens serão excluídos a partir dessa posição, eo terceiro é opcional 
// e inclui um valor no indice informado no primeiro parâmetro.