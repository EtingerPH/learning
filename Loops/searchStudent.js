const alunos = [["Pedro", "Chester", "Anna", "Patricia"], [8, 7, 10, 9]]

function buscar (nome){
    const res = alunos[0].indexOf(nome)
    if (res !== -1 ) {
        console.log(`O aluno ${alunos[0][res]} tem média ${alunos[1][res]}`)
    }else{
        console.log(`o nome ${nome} não foi encontrado na lista`)
    }
}

console.log(buscar("Patricia"))