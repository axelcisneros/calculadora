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
function raiz() {
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
    x1 = x1*(x3/100);
    pantalla.innerHTML = x1;
    igualar();
    x2 = 1;
}
function retro() {
    cifras = x1.length;
    br = x1.substr(cifras-1,cifras);
    x1 = x1.substr(0,cifras-1);
    if (x1 == "") {x1 = "0";};
    if (br == ".") {coma = 0;};
    pantalla.innerHTML = x1;
}
function correccion() {
    pantalla.innerHTML = 0
    x1 = 0;
    coma = 0;
}
function borrado() {
    pantalla.innerHTML = 0;
    x1 = "0" ;
    coma = 0;
    x3 = 0;
    igu = "no";
}
function exponente() {
    x1 = Math.pow(x1, 2);
    pantalla.innerHTML = x1;
    igu = "no";
    x2 = 1;
}
