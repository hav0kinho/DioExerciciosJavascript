/*1 - Some todos os números de um array
2 - Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.*/


//1
const listaNumeros = [2, 3, 4, 5, 6, 7, 8, 9, 120, 144, 133, 2022];
const listaNumerosReduce = listaNumeros.reduce((acumulador, numero) => {return acumulador + numero});

console.log(listaNumerosReduce);


//2
const lista = [
    {
        name: 'Sabao em po',
        preco: 30
    },
    {
        name: 'cereal',
        preco: 12
    },
    {
        name: 'toalha',
        preco: 30
    }
];

const saldoDisponivel = 100;


function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current){
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponivel)
}


console.log(calculaSaldo(saldoDisponivel, lista));


/*const calculaPreco = (listaPreco, saldo) => {

}*/
