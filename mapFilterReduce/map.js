/*const maca = {
    value: 2,
};

const laranja = {
    value: 3,
};

const numeros = [1, 2];

function mapComThis(array, thisArg){
    return array.map(function(item, thisArg){
        return item * this.value;
    }, thisArg);
}

/*function mapComThisEArrow(array, thisArg){
    return array.map((item, thisArg) => {
        return item * this.value;
    }, thisArg);
}



console.log(mapComThis(numeros, maca)); // [2, 4]

console.log(mapComThisEArrow(numeros, laranja)); // [3, 6]*/

//SEM THIS
function mapSemThis(array){
    return array.map(function(item){
        return item * 2;
    });
}

const nums = [2, 4, 6, 8, 10];

console.log(mapSemThis(nums));