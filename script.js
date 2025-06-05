let verde = document.querySelector('.verde');
let amarelo = document.querySelector('.amarelo');
let vermelho = document.querySelector('.vermelho');
let pedestreVerde = document.querySelector('.pedestreVerde');
let pedestreVermelho = document.querySelector('.pedestreVermelho');
let botao = document.querySelector('.btnPedestre');
let contador = 0;
let contadorElemento = document.querySelector('.contador');
let ciclo = setInterval(trocarSemaforo, 4000);



setInterval(() => {
    contador++;
    contadorElemento.textContent = `Timer: ${contador}`;
}, 1000);



function iniciarCiclo() {
    ciclo = setInterval(trocarSemaforo, 4000);
    contador = 0;
};


function pausarCiclo() {
    clearInterval(ciclo);
    contador = 0;
};


function trocarSemaforo() {
    if (verde.classList.contains('apagado') && amarelo.classList.contains('apagado')) {
        verde.classList.remove('apagado');
        amarelo.classList.add('apagado');
        vermelho.classList.add('apagado');
    } else if (amarelo.classList.contains('apagado')) {
        amarelo.classList.remove('apagado');
        vermelho.classList.add('apagado');
        verde.classList.add('apagado');
    } else if (vermelho.classList.contains('apagado')) {
        vermelho.classList.remove('apagado');
        verde.classList.add('apagado');
        amarelo.classList.add('apagado');
    }
    // sinal vermelho para veiculos e verde para pedestres
    if (verde.classList.contains('apagado') && amarelo.classList.contains('apagado')) { 
        pedestreVerde.classList.remove('apagado');
        pedestreVermelho.classList.add('apagado');
    } 
    // sinal verde/amarelo para veiculos e vermelho para pedestres
    else if (vermelho.classList.contains('apagado')) {
        pedestreVermelho.classList.remove('apagado');
        pedestreVerde.classList.add('apagado');
    }
}   

botao.addEventListener('click', () => {
    setTimeout(() => {
        pausarCiclo();
        pedestreVerde.classList.remove('apagado');
        pedestreVermelho.classList.add('apagado');
        verde.classList.add('apagado');
        amarelo.classList.add('apagado');
        vermelho.classList.remove('apagado');
    }, 4000);
    setTimeout(() => {
        iniciarCiclo();
    }, 4000);
    });