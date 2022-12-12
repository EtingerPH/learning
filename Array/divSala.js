//função slice separa o array em posições definidas no parâmetro, lembrando que a posição 
//final informada não será exibida.
//OBS: esse método não altera o array original
const alunos = [
    "Anna",
    "Julia",
    "Pedro",
    "Vicente",
    "PH",
    "Henrique",
    "Patricia",
    "Lunardi",
    "Santos",
    "Zeus",
    "Negão",
    "Laila",
    "Chester",
    "Migalhos",
    "Blutuco",
    "Blutuca",
    "Furia",
    "Vanda",
    "Valentina",
    "Nathalia",
    "Bruno"
]

console.log('os alunos da sala 1 são: ', alunos.slice(0, alunos.length / 2))
console.log('Os alunos da sala 2 são:', alunos.slice(alunos.length / 2)) // nesse caso não é necessário 
// informar a posição final, pois o prórpio js já entende.



