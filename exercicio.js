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

const meuQuadrado = new Quadrado(5);

console.log(meuQuadrado.tamanhoLado); // 5
console.log(meuQuadrado.calcularArea()); // 25
meuQuadrado.tamanhoLado = 6;
console.log(meuQuadrado.tamanhoLado); // 6