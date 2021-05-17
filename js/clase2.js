// var fecha = new Date();
// var x = fecha.getFullYear()
// console.log(x);
// x = fecha.getDay();
// console.log(x);
// x = fecha.getTime();//Devuelve a partir del número de milisegundos entre enero 1 de 1970
// console.log(x);

//manipulando el DOM-> document objetc models
//var titulo = document.querySelector("p");
// titulo = document.querySelector("#titulo");
// titulo = document.querySelector(".titulo");
// titulo = document.getElementById("titulo");
// titulo = document.getElementsByClassName("titulo")[0];
// console.log(titulo);
//alert(titulo.innerHTML);
//titulo.innerHTML = "Hola JS <strong>manipulando</strong> el DOM";
// console.log(titulo.id);
// console.log(titulo.title);
// titulo.style.color = "red";
// titulo.style.backgroundColor = "lightpink";
// titulo.style.border = "1px solid blue";
// titulo.style.padding = "10px";
/*
if(){
    if(){

    }
}else{
    if(){

    }
}

vamos a un boliche-> un rango de edad entre 18 y 25 años
si la persona tiene 21 años obtiene una bebida gratis
si no puede acceder decir la razón
*/
// var h1 = document.querySelector("h1");
// var p = document.querySelector("p");
// var edad = window.prompt("Escribe tu edad");
// if (edad >= 18 && edad <= 25) {
//     h1.innerHTML = "Bienvenid@ ;)";
//     if (edad == 21) {
//         alert("Tienes bebida gratis!!!!!");
//     }
// } else {
//     h1.innerHTML = "No puede acceder ;(";
//     if (edad < 18) {
//         p.innerHTML = "por bebito";
//     } else {
//         p.innerHTML = "por viejito";
//     }
// }
/*
if(){

}else if(){

}else if(){

}else{

}
solicitar al usuario un número e identificar si tiene 1,2,3,4 o + cifras
6 -> es menor que 10 y mayor a 0
25 -> entre 10 y 99
*/
// var num = parseInt(window.prompt("Escribe un número"));
// if (num > 0 && num < 10) {
//     document.write("El número " + num + " tiene una cifra");
// } else if (num >= 10 && num < 100) {
//     document.write("El número " + num + " tiene dos cifras");
// } else if (num >= 100 && num < 1000) {
//     document.write("El número " + num + " tiene tres cifras");
// } else if (num >= 1000 && num < 10000) {
//     document.write("El número " + num + " tiene cuatro cifras");
// } else if (num >= 10000) {
//     document.write("El número " + num + " tiene más de cuatro  cifras");
// } else {
//     document.write("No existe el rango dentro del sistema");
// }

/*
switch(variable){
 case valor1:
     instrucciones
     break;
case valor2:
     instrucciones
     break;
default:
        instrucciones
        break;
}
*/
// var color = "verde";
// switch(color){
//     case "azul":
//     case "AZUL":
//     case "Azul":
//         document.write("Color azul");
//         break;
//     case "amarillo":
//         document.write("Color amarillo");
//         break;
//     case "verde":
//         document.write("Color verde");
//         break;
//     case "negro":
//         document.write("Color negro");
//         break;
//     default:
//         document.write("Ups no encuentro el color ;(");
//         break;
// }

/*
BUCLES:

while(condición){
    instrucciones
    ajuste
}
*/
// var n = 1;
// while(n <= 10){
//     console.log("Hola");
//     document.write("hola");
//     n++; //n = n + 1;
// }

/*
do{
    instrucciones
    ajuste
}while(condición);
*/
// var a = 10000;
// do {
//     document.write(a + "<br>");
//     a++;
// } while (a <= 10);

// var juegoPalabra = "";
// do {
//     var palabra = window.prompt("Escribe una palabra");
//     juegoPalabra += palabra;//juegoPalabra = juegoPalabra + palabra
// } while (window.confirm("sigues jugando????"));
// document.write("Escribiste: " + juegoPalabra);



/*
desarrollar un sistema de cajero automático
si accedo mostrar un menú (1 consulta 2 depósito 3 retiro 4 transf)
*/
var saldo = 300, clave, claveCorrecta = 123, cbu, destinatario, eleccion, monto;
var h1 = document.querySelector("h1");
var clave = parseInt(window.prompt("Ingrese su clave de acceso"));
if (clave == claveCorrecta) {
    eleccion = parseInt(window.prompt("Bienvenido al Banco Blajamblajam\nEscriba un número de opción:\n1 Consulta\n2 Depósito\n3 Retiro\n4 Transferencia"));
    switch (eleccion) {
        case 1:
            h1.innerHTML = "Su saldo a la fecha es " + saldo;
            break;
        case 2:
            monto = parseInt(window.prompt("Escribe el monto a depositar"));
            saldo += monto;
            h1.innerHTML = "Depósito realizado correctamente, su saldo actualizado es " + saldo;
            break;
        case 3:
            monto = parseInt(window.prompt("Escribe el monto a retirar"));
            if (monto <= saldo) {
                saldo -= monto;
                h1.innerHTML = "Retiro realizado correctamente, su saldo actualizado es " + saldo;
            } else {
                h1.innerHTML = "Saldo insuficiente!";
            }
            break;
        case 4:
            monto = parseInt(window.prompt("Escribe el monto a transferir"));
            cbu = parseInt(window.prompt("Escribe el cbu a transferir"));
            destinatario = window.prompt("Escribe el destinatario");
            if (monto <= saldo) {
                saldo -= monto;
                h1.innerHTML = "transferencia realizada correctamente a " + destinatario + ", cbu "+ cbu +", su saldo actualizado es " + saldo;
            } else {
                h1.innerHTML = "Saldo insuficiente!";
            }
            break;
    }
} else {
    document.write("Contraseña incorrecta!");
}