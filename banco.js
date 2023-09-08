
var Banco = {
    conta: "001213",
    saldo: 1500,
    tipoDeConta: "Corrente",
    agencia: "2269",
    
    
    buscarSaldo: function() {
        return this.saldo;
    },
    
    
    deposito: function(valor) {
        this.saldo += valor;
        return "Depósito de R$" + valor + " realizado. Novo saldo: R$" + this.saldo;
    },
    
   
    saque: function(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            return "Saque de R$" + valor + " realizado. Novo saldo: R$" + this.saldo;
        } else {
            return "Saldo insuficiente para realizar o saque.";
        }
    },
    
    
    numeroDaConta: function() {
        return this.conta;
    }
};


console.log("Saldo atual: R$" + Banco.buscarSaldo());
console.log(Banco.deposito(750));
console.log(Banco.saque(250));
console.log("Número da conta: " + Banco.numeroDaConta());
