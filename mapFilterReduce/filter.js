//Filtre e retorne todos os números pares de um array.
let listaNumeros = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 120];

let listaNumerosFilter = listaNumeros.filter((item) => item % 2 === 0);

console.log(listaNumerosFilter);