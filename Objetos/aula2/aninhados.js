//Nesse arquivo é usado o obj aninhado, ou seja um obj dentro do outro e para acessar as propriedades 
// é simples usando o méto
const cliente = {
    nome: 'Patricia',
    profissao: 'Enfermeira',
    idade: 50,
    telefone: ['13 99556-3254', '13 98456-3658']
}

cliente.endereco = {
    rua: 'Mal Floriano peixoto',
    numero : 272,
    complemento: 'casa'
}

console.log(cliente.endereco)