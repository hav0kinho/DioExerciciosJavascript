function changeMode(){
    changeClasses();
    changeText();
}

function changeClasses(){
    botao.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
}

/* MINHA MANEIRA DE USAR O CHANGE TEXT
function changeText(){
    if(botao.innerHTML === "Dark Mode"){
        h1.innerHTML = "Dark Mode ON";
        botao.innerHTML = "Light Mode";
    } else {
        h1.innerHTML = "Light Mode ON";
        botao.innerHTML = "Dark Mode";
    }

}*/

function changeText(){
    if(botao.classList.contains('dark-mode')){
        h1.innerHTML = "Dark Mode ON";
        botao.innerHTML = "Light Mode";
    } else {
        h1.innerHTML = "Light Mode ON";
        botao.innerHTML = "Dark Mode";
    }
}


const botao = document.getElementById("mode-selector");
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

console.log(body);

botao.addEventListener("click", changeMode);