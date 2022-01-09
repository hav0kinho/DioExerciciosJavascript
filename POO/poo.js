class ContaBancaria{
    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = saldo;
    }
    //GET E SETTERS
    get saldo(){
        return this.saldo;
    }
    set saldo(value){
        this.saldo = value;
    }

    sacar(valor){
        this.saldo -= valor;
    }
    depositar(valor){
        this.saldo += valor;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(cartaoDeCredito, tipo='conta corrente'){
        this.cartaoDeCredito = cartaoDeCredito;
        this.tipo = tipo;
    }

    get cartaoDeCredito(){
        return this.cartaoDeCredito;
    }
    set cartaoDeCredito(value){
        this.cartaoDeCredito = value;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(){
        super()
    }
}

class ContaUniversitaria extends ContaBancaria{

}