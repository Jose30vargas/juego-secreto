let numeroSectro = 0;
let intentos = 0;
let listaDeNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSectro);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    if (numeroDeUsuario === numeroSectro) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos ===1) ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled')
    } else{
    // El Usuario no acertó
        if (numeroDeUsuario > numeroSectro) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaDeNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaDeNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
            //Si el número generado está incluido en la lista
            if (listaDeNumerosSorteados.includes(numeroGenerado)) {
                return generarNumeroSecreto();
            } else {
                (listaDeNumerosSorteados.push(numeroGenerado));
                return numeroGenerado;
            }
    }    
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSectro = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de Intervalo de números
    //Generar el numero aleatorio
    //Inicializar el botón intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
}

condicionesIniciales();