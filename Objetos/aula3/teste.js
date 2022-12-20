const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
   }
   
   const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
   }

   const guerreiro = {
    ...fichaGuerreiro,
    ...equipoGuerreiro
   }

console.log(guerreiro)

const novoGuerreiro = {
    nome: fichaGuerreiro.nome,
    classe: fichaGuerreiro.classe,
    espada: equipoGuerreiro.espada,
    capa: equipoGuerreiro.capa
}

console.log(novoGuerreiro)