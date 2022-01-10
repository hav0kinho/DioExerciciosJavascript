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
function mudarCorParaVermelho(){
    btnVermelho.style.backgroundColor = "red";
}

function mudarCorParaVerde(){
    btnVerde.style.backgroundColor = "green";
}

const btnVerde = document.getElementById('btn-verde');
const btnVermelho = document.getElementById('btn-vermelho');

btnVerde.addEventListener('click', mudarCorParaVerde);
btnVermelho.addEventListener('click', mudarCorParaVermelho);



//==========13===========


//==========14===========


//==========15===========


//==========16===========


//==========17===========


//==========18===========


//==========19===========


//==========20===========

