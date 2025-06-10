// Função para detectar o click do mouse.
document.querySelectorAll(".drum").forEach(button => {
button.addEventListener("click", function() {
    let tecla = this.innerHTML; // Define a tecla corretamente
    console.log("Você clicou na tecla " + tecla);
    tocarSom(tecla);
    animarBotao(tecla); 
});
});

// Função para detectar o pressionamento da tecla.
document.addEventListener("keydown", function (event) {
    let tecla = event.key.toLowerCase();
    tocarSom(tecla);
    animarBotao(tecla);
});

// Função para alterar entre a teclas dos teclados para acionar o som.
function tocarSom(tecla) {
    let audio;
    switch (tecla) {
        case "A":
        case "a":    
            audio = new Audio("./sounds/crash.mp3");
            break;
        case "S":
        case "s":    
            audio = new Audio("./sounds/tom1.mp3");
            break;
        case "D":
        case "d":    
            audio = new Audio("./sounds/snare.mp3");
            break;
        case "G":
        case "g":    
            audio = new Audio("./sounds/kickbass.mp3");
            break;
        case "J":
        case "j":    
            audio = new Audio("./sounds/tom3.mp3");
            break;
        case "K":
        case "k":    
            audio = new Audio("./sounds/tom2.mp3");
            break;
        case "L":
        case "l":    
            audio = new Audio("./sounds/crash.mp3");
            break;
        default:
            console.log("Tecla não associada a som.");
            return;
    }
    audio.play();
}

// Função para animar os botões na hora de pressionar.
function animarBotao(tecla) {
    let botao = document.querySelector(`.${tecla}`);
    if (botao) {
        botao.classList.add("pressed");
        setTimeout(() => botao.classList.remove("pressed"), 100);
    }
}