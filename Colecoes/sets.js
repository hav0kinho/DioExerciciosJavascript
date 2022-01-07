/*Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos. */

let listaNumeros = [30, 30, 40, 5, 223, 2049, 3034, 5];
let setNumeros = new Set();

for(numero of listaNumeros){
    setNumeros.add(numero);
}

console.log(setNumeros);

function teste(array){
    return [...array];
}

console.log(teste([1,2,3,4,5,6]));