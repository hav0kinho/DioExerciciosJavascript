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
/*function calculaDesconto(preco){
    return preco - (preco * 0.05);
}

console.log(calculaDesconto(100));
*/
//============22=========
/*function retornaMaiorDeIdade(anoNascimento){
    if(anoNascimento >= 18){
        return "Maior de Idade";
    } else {
        return "Menor de Idade";
    }
}

console.log(retornaMaiorDeIdade(22));
console.log(retornaMaiorDeIdade(17));*/

//===========23===========
/*const divResultado = document.getElementById("resultado");

for(let i = 0; i < 1; i++){
    divResultado.innerHTML += "Repetição<br>";
}*/

//===========24===========
/*const divResultado = document.getElementById("resultado");

for(let i = 0; i < 2; i++){
    divResultado.innerHTML += "Repetição<br>";
}*/

//===========25===========
/*const divResultado = document.getElementById("resultado");

for(let i = 0; i < 20; i++){
    divResultado.innerHTML += "Repetição<br>";
}*/
//===========26===========
//Não entendi como posso utilizar o forEach nisso


//===========27===========
/*const divResultado = document.getElementById('resultado');
let i = 0;

while(i < 5){
    divResultado.innerHTML += "Repetição<br>";
    i++;
}*/

//===========28===========
/*const divResultado = document.getElementById("resultado");
let i = 0;

do{
    divResultado.innerHTML += "Resultado<br>";
    i++;
}while(i < 5);
*/

//===========29===========

/*const divResultado = document.getElementById("resultado");

for(let i = 0; i < 11; i++){
    divResultado.innerHTML += `${i}<br>`;
}*/


//===========30===========
/*const divResultado = document.getElementById("resultado");

for(let i = 0; i < 21; i++){
    if(i % 2 === 0){
        divResultado.innerHTML += `${i}<br>`;
    }
}*/

//===========31===========

/*const divResultado = document.getElementById('resultado');

for(let i = 0; i <= 10; i++){
    for(let j = 0; j <= 10; j++){
        divResultado.innerHTML += `${i} x ${j} = ${i * j}<br>`;
    }
    divResultado.innerHTML += "<br><br>";
}*/

//===========32===========
/*const verificaDota = (texto) => {
    let textoCarga = texto.toUpperCase();
    if(textoCarga.includes('DOTA')){
        return true;
    } else {
        return false;
    }
}

let texto = "Dota é melhor que LOL";
let texto2 = "Lol é melhor que CS";
console.log(verificaDota(texto));
console.log(verificaDota(texto2));*/

//===========33===========
//alert(Math.floor((Math.random() * 100)));

//==========34============
/*function geraNumeroAleatorioEVerificaIgualdade(num1){
    let numeroAleatorio = Math.floor(Math.random() * 10);
    console.log(numeroAleatorio);
    if(parseInt(num1) === numeroAleatorio){
        alert("Você acertou! Sortudo!");
    } else {
        alert("Você Errou!");
    }
}

const butao = document.getElementById("enviar");
const inputNumero = document.getElementById("inputNumero");

butao.addEventListener("click", () => geraNumeroAleatorioEVerificaIgualdade(inputNumero.value));*/


//==========35 e 36============
/*const mostrarData = () => {
    let data = new Date();
    console.log(data);
}
const mostrarDataFormatada = () => {
    let data = new Date();
    console.log(`${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`) // DD/MM/AAAA
    console.log(`${verificaMes(data.getMonth() + 2)} é o próximo mês`);
}

const verificaMes = (num) => {
    if(!num){
        return "Insira um Mês"
    }
    if(num > 12 || num < 0){
        return "Mês Inválido";
    }

    switch(num){
        case 1:
            return "Janeiro";
            break;
        case 2:
            return "Fevereiro";
            break;
        case 3:
            return "Março";
            break;
        case 4:
            return "Abril";
            break;
        case 5:
            return "Maio";
            break;
        case 6:
            return "Junho";
            break;
        case 7:
            return "Julho";
            break;
        case 8:
            return "Agosto";
            break;
        case 9:
            return "Setembro";
            break;
        case 10:
            return "Outubro";
            break;
        case 11:
            return "Novembro";
            break;
        case 12:
            return "Dezembro";
            break;
    }
}
let dataTeste = new Date();
const btn = document.getElementById("btn");



btn.addEventListener('click', mostrarDataFormatada);*/


