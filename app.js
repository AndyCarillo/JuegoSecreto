let numeroSecreto = 0;
let intentos = 1;
let numeroMaximo = 10;
let listaNumeroSorteados = []; 

function asignarTextoElemento  (elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento ("p",`Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`); 
        document.getElementById ("reiniciar").removeAttribute ("disabled");
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento ("p", "El número secreto es menor");      
            } else {
             asignarTextoElemento ("p", "El número secreto es mayor");
        }
        intentos ++;
    } 
    limpiarCaja ();
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log (numeroGenerado);
    console.log (listaNumeroSorteados);

    if (listaNumeroSorteados.length == numeroMaximo){
        asignarTextoElemento ("p", "Ya haz sorteado todos los números posibles");
    } else {
        if(listaNumeroSorteados.includes(numeroGenerado)){  
            return generarNumeroSecreto();
        } else {
        listaNumeroSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
        
    }
}

function  limpiarCaja (){
    document.querySelector("#valorUsuario").value = "";
}

function condicionesIniciales (){
    asignarTextoElemento ("h1", "Juego del número secreto");
    asignarTextoElemento ("p", `Indica un número del 1 al ${numeroMaximo}`); 
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}



function reiniciarJuego() {
    //limpiar caja 
    limpiarCaja ();
    //actualizar numero secreto
    //actualizar nuemeros de intentos 
    //colocar mensaje iniciales
    condicionesIniciales ();

    //deshabilitar boton de reinicio
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}

condicionesIniciales();


let ListaGenerica = [];
let leguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
let listaDeNumeros = [8,9,6,4,1,5];

leguajesDeProgramacion.push ('Java', 'Ruby', 'GoLang') ; 

function listaPrueba (){
    console.log (leguajesDeProgramacion) ;
}

function listaPruebareversa (){
    let reversed =  leguajesDeProgramacion.reverse(); 
    console.log (reversed)
}
listaPrueba();
listaPruebareversa();

function obtenerPromedio (){
    let suma = 0; 
    for (let i= 0; 
        i < listaDeNumeros.length; i ++){
        suma += listaDeNumeros [i]; 
    }
     console.log (suma);
     let promedioDeLista = suma/listaDeNumeros.length; 
     console.log (promedioDeLista)
}
obtenerPromedio ();



function maximoMinimo(x){
    let maximo = Math.max(...x);
    let minimo = Math.min(...x);
    console.log(`El número máximo es: ${maximo}`);
    console.log(`El número mínimo es: ${minimo}`);
    console.log(x);
    console.log(...x);
}
maximoMinimo (listaDeNumeros);