const calculaIdade = function(anos){
    return `Após ${anos} anos, ${this.nome} terá ${this.idade + anos} anos`;
}

let processador = {
    nome: "i5 4220",
    idade: 2
};

let caneca = {
    nome: "xicara",
    idade: 7
}

console.log(calculaIdade.call(processador, 2))
console.log(calculaIdade.call(caneca, 5));


