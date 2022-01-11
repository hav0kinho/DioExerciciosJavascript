class Bola{
    constructor(cor, circuferencia, material){
        this._cor = cor;
        this.circuferencia = circuferencia;
        this.material = material;
    }

    get cor(){
        return this._cor;
    }
    set cor(novaCor){
        this._cor = novaCor;
    }
}

class Quadrado{
    constructor(tamanhoLado){
        this._tamanhoLado = tamanhoLado;
    }

    get tamanhoLado(){
        return this._tamanhoLado;
    }
    set tamanhoLado(novoTamanho){
        this._tamanhoLado = novoTamanho;
    }

    calcularArea(){
        return this._tamanhoLado ** 2;
    }
}

class Retangulo{
    constructor(ladoA, ladoB){
        this._ladoA = ladoA;
        this._ladoB = ladoB;
    }

    get ladoA(){
        return this._ladoA;
    }
    get ladoB(){
        return this._ladoB;
    }
    set ladoA(valor){
        this._ladoA = valor;
    }
    set ladoB(valor){
        this._ladoB = valor;
    }

    calcularArea(){
        return this._ladoA * this._ladoB;
    }

    calcularPerimetro(){
        return this._ladoA + this._ladoB;
    }

}

class Pessoa{
    constructor(nome, idade, peso, altura){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
    }

    atualizaAltura(){
        if(this.idade < 21){
            altura += 0.5;
        }
    }

    envelhecer(anos){
        if(anos < 0){
            return "Numero Inválido";
        }
        this.idade += anos;
        this.atualizaAltura();
    }
    engordar(peso){
        if(peso < 0){
            return "Numero Inválido";
        }
        this.peso += peso;
    }
    emagrecer(peso){
        if(peso > this.peso){
            return "Peso muito alto ou Número Inválido"
        }
        this.peso -= peso;
    }
    crescer(anos){
        if(anos < 0){
            return "Numero Inválido";
        }
        this.anos += anos;
    }
}

class ContaCorrente{
    constructor(numeroConta, nome, saldo=0){
        this.numeroConta = numeroConta;
        this._nome = nome;
        this.saldo = saldo;
    }
    get nome(){
        return this._nome;
    }
    set nome(valor){
        this._nome = valor;
    }

    depositar(valor){
        if(valor < 0){
            return "Valor Inválido";
        }
        this.saldo += valor;
    }
    
    saque(valor){
        if(valor > this.saldo){
            return "Não é possivel sacar esse valor";
        }
        this.saldo -= valor;
        return valor;
    }
}
