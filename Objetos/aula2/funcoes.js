//Nesse cód há uma função passada como propriedade do objt cliente, essa função efetuaPagamento()
// identifica se o valor de saldo do cliente é suficiente para efetuar uma compra, se for irá 
//apresentar o novo saldo, senão retornará uma mensagem informando saldo insuficiente.
const cliente = {
    nome: "Patricia",
    profissao: "Enfermeira",
    idade: 50,
    telefone: ["13 99556-3254", "13 98456-3658"],
    saldo: 200,
    efetuaPagamento: function(valor){
        if(valor > this.saldo) { // o termo "this" usado nessa função serve para informar que a palavra saldo se refere a propriedade do objt atual 
            console.log('Saldo insuficiente')
        }else{
            this.saldo -= valor
            console.log(`Pagamento efetuado! Novo saldo: ${this.saldo}`)
        }
    }
  };
  
  cliente.efetuaPagamento(100)