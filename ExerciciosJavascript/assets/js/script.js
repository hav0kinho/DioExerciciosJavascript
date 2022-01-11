//https://github.com/gabrieldarezzo/helpjs-ravi
//==========1===========
//console.log('Olá Mundo!');

//==========2===========
//console.log('Olá Mundo!');

//==========3===========
//alert(2 + 2);

//==========4===========
/*function exibirNome(){
    alert(`Nome Completo é: ${inputNome.value}`);
}

const inputNome = document.getElementById("inputNome");
const btnExibirNome = document.getElementById("btn-exibirNome");

btnExibirNome.addEventListener("click", exibirNome);
*/
//==========5===========
/*const nome = "Dennis Ritchie";

console.log(nome.length);*/


//==========6===========
/*function administraLampada(){
    if(imagemLampada.src === linkLampadaApagada){
        imagemLampada.src = linkLampadaAcesa;
    } else {
        imagemLampada.src = linkLampadaApagada;
    }
}

function consoleLogar(){
    console.log("Funcionando");
}

let imagemLampada = document.getElementById("imagem-lampada");

const linkLampadaApagada = "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true";

const linkLampadaAcesa = "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true"

imagemLampada.addEventListener('click', administraLampada);*/

//==========7===========
/*function administraLampada(){
    if(imagemLampada.src === linkLampadaApagada){
        imagemLampada.src = linkLampadaAcesa;
    } else {
        imagemLampada.src = linkLampadaApagada;
    }
}

function consoleLogar(){
    console.log("Funcionando");
}

let imagemLampada = document.getElementById("imagem-lampada");

const linkLampadaApagada = "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true";

const linkLampadaAcesa = "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true"

imagemLampada.addEventListener('mouseover', administraLampada);*/

//==========7a===========
/*function saudacao(){
    alert(`Olá ${inputNome.value} ${inputSobrenome.value}`);
}

const inputNome = document.getElementById("nome");
const inputSobrenome = document.getElementById("sobrenome");
const btnSaudacao = document.getElementById("btnSaudacao");

btnSaudacao.addEventListener('click', saudacao);*/

//==========8===========
/*function atualizaInput(){
    cpfAtualizado.value = cpfInput.value;
}

const cpfInput = document.getElementById("cpfInput");
const cpfAtualizado = document.getElementById("cpfAtualizado");*/


//==========9===========
/*function atualizaCpfSemPoint(){
    cpfSemPoint.value = cpfPoint.value;
    cpfSemPoint.value = trataCpf(cpfSemPoint.value);

}

function trataCpf(cpf){
    cpf = cpf.replace('.', '');
    cpf = cpf.replace('.', '');
    cpf = cpf.replace(/-/g, '');
    console.log(cpf);
    return cpf;
}

const cpfPoint = document.getElementById("cpfPoint");
let cpfSemPoint = document.getElementById("cpfSemPoint");*/


//==========10===========
/*function somar(){
    let soma = Number(inputSoma1.value) + Number(inputSoma2.value);
    console.log("Funcionando")
    resultadoSoma.innerHTML = soma;
}

const inputSoma1 = document.getElementById("soma1");
const inputSoma2 = document.getElementById("soma2");
const btnSoma = document.getElementById("btn-soma");
const resultadoSoma = document.getElementById("resultado-soma");

btnSoma.addEventListener('click', somar);*/

//==========12===========
//BOA NOITE! :D
/*function somar(){
    let soma = Number(inputSoma1.value) + Number(inputSoma2.value);
    console.log("Funcionando")
    resultadoSoma.innerHTML = soma;
}

const inputSoma1 = document.getElementById("soma1");
const inputSoma2 = document.getElementById("soma2");
const btnSoma = document.getElementById("btn-soma");
const resultadoSoma = document.getElementById("resultado-soma");

btnSoma.addEventListener('click', somar);*/


//==========12a===========
/*function mudarCorParaVermelho(){
    btnVermelho.style.backgroundColor = "red";
}

function mudarCorParaVerde(){
    btnVerde.style.backgroundColor = "green";
}

const btnVerde = document.getElementById('btn-verde');
const btnVermelho = document.getElementById('btn-vermelho');

btnVerde.addEventListener('click', mudarCorParaVerde);
btnVermelho.addEventListener('click', mudarCorParaVermelho);*/

//==========13===========
/*function atualizaCpfSemPoint(){
    cpfSemPoint.value = cpfPoint.value;
    cpfSemPoint.value = trataCpf(cpfSemPoint.value);

}

function trataCpf(cpf){
    cpf = cpf.replace('.', '');
    cpf = cpf.replace('.', '');
    cpf = cpf.replace(/-/g, '');
    console.log(cpf);
    return cpf;
}

const cpfPoint = document.getElementById("cpfPoint");
let cpfSemPoint = document.getElementById("cpfSemPoint");*/

//==========14===========

/*function inserirTexto(){
    resultado.innerHTML = texto;
    console.log("Inserido");
}

const resultado = document.getElementById("resultado");
const texto = "Esse texto foi inserido via Javascript";

window.onload = inserirTexto;*/

//==========15===========
/*function inserirTexto(){
    resultado.innerHTML = texto;
    console.log("Inserido");
}

const resultado = document.getElementById("resultado");
const texto = "Esse texto foi inserido via Javascript";
const btnInserir = document.getElementById("btn-inserir-texto");

btnInserir.addEventListener('click', inserirTexto);*/

//==========16===========
/*function somar(n1, n2){
    let soma = Number(n1) + Number(n2);
    resultadoSoma.innerHTML = soma;
    console.log(soma);
}

const inputSoma1 = document.getElementById("soma1");
const inputSoma2 = document.getElementById("soma2");
const btnSoma = document.getElementById("btn-soma");
const resultadoSoma = document.getElementById("resultado-soma");

btnSoma.addEventListener('click', () => somar(inputSoma1.value, inputSoma2.value));*/

//==========17===========
/*function somar(n1, n2){
    if(!n1 || !n2){
        return 0;
    }
    return n1 + n2;
}

console.log(somar(5, 7));
console.log(somar(2));
console.log(somar());*/
//==========18===========
//console.log(5 % 2);

//==========19===========
/*function retornaImparPar(numero){
    if(!numero){
        return "Parâmetro Inválido ou Ausente";
    }
    if(numero % 2 === 0){
        return "Par";
    } else {
        return "Impar";
    }
}

console.log(retornaImparPar(2));
console.log(retornaImparPar(3));
console.log(retornaImparPar());*/

//==========20===========
/*
const retornaMultiplicao = (n1, n2) => {
    return n1 * n2;
}

console.log(retornaMultiplicao(2, 5)); // 10
*/
//===========21===========

