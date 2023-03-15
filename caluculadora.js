window.onload = function () {
    pantalla = document.getElementById("textoPantalla");
}

let x1 = "0";
let x2 = 1;
let coma = 0;
let x3 = 0;
let igu = "no"

function numero (xx) {
    if (x1 == "0" || x2 == 1) {
        pantalla.innerHTML = xx;
        x1 = xx;
        if (xx == ".") {
            pantalla.innerHTML = "0.";
            x1 = xx;
            coma = 1
        }
    }else {
        if (xx == "." && coma == 0){
            pantalla.innerHTML += xx;
            x1 += xx;
            coma = 1;
        }
        else if (xx == "." && coma == 1) {}
        else {
            pantalla.innerHTML += xx;
            x1 += xx;
        }
    }
    x2 = 0;
}
function operar(s) {
    igualar();
    x3 = x1;
    igu = s; 
    x2 = 1;
}
function igualar() {
    if (igu == "no" ) { 
       pantalla.innerHTML= x1;
    }
    else { 
       sl = x3 + igu + x1;
       sol = eval(sl);
       pantalla.innerHTML = sol;
       x1 = sol;
       igu = "no";
       x2 = 1;
    }
}
function raiz () {
    x1 = Math.sqrt(x1);
    pantalla.innerHTML= x1;
    igu = "no";
    x2 = 1; 
}
function nagativo() {
    nx = Number(x1)
    nx = -nx;
    x1 = String(nx);
    pantalla.innerHTML = x1;
}
function pociento() {
    x1 = x1/100;
    pantalla.innerHTML = x1;
    igualar();
    x2 = 1;
}

const uno = document.getElementById("uno");
const dos = document.getElementById("dos");
const tres = document.getElementById("tres");
const cuatro = document.getElementById("cuatro");
const cinco = document.getElementById("cinco");
const seis = document.getElementById("seis");
const siete = document.getElementById("siete");
const ocho = document.getElementById("ocho");
const nueve = document.getElementById("nueve");
const cero = document.getElementById("cero");
const punto = document.getElementById("punto");
const igual = document.getElementById("igual");
const suma = document.getElementById("suma");
const resta = document.getElementById("resta");
const mult = document.getElementById("mult");
const barra = document.getElementById("barra");
const raizc = document.getElementById("raiz");
const negPos = document.getElementById("negPos");
const porcen = document.getElementById("porcen");


uno.onclick = function() {
    numero(1);
}
dos.onclick = function() {
    numero(2);
}
tres.onclick = function() {
    numero(3);
}
cuatro.onclick = function() {
    numero(4);
}
cinco.onclick = function() {
    numero(5);
}
seis.onclick = function() {
    numero(6);
}
siete.onclick = function() {
    numero(7);
}
ocho.onclick = function() {
    numero(8);
}
nueve.onclick = function() {
    numero(9);
}
cero.onclick = function() {
    numero(0);
}
punto.onclick = function() {
    numero(".");
}
igual.onclick = function() {
    igualar();
}
suma.onclick = function() {
    operar("+");
}
resta.onclick = function() {
    operar("-");
}
mult.onclick = function() {
    operar("*");
}
barra.onclick = function() {
    operar("/");
}
raizc.onclick = function() {
    raiz();
}
negPos.onclick = function() {
    nagativo();
}
porcen.onclick = function() {
    pociento();
}