// // // /*
// // // métodos:
// // //     -procedimientos: no tiene return
// // //     -funciones: tiene return

// // //     function identificar(parametros){
// // //         instrucciones
// // //     }
// // // */
// // // function saludar() {
// // //     document.write("Holaaaa función pura!");
// // // }
// // // //saludar();
// // // function despedir() {
// // //     let mensaje = "chaito";
// // //     return mensaje;
// // // }
// // // //document.write(despedir());
// // // function nombrar(nombre) {
// // //     return "Hola " + nombre;
// // // }
// // // //document.write(nombrar("Austry"));
// // // function cantar(cantante = "Calamaro") {
// // //     document.write("tarara cantando con " + cantante);
// // // }
// // // //cantar("Marc Anthony");
// // // function sumar(a, b, c) {
// // //     return a + b + c;
// // // }
// // // //document.write(sumar(2, 4, 5));
// // // function probar(datos = [1, 2, 3, 4]) {
// // //     for (var i = 0; i < datos.length; i++) {
// // //         console.log(datos[i]);
// // //     }
// // // }
// // // //probar();
// // // /*
// // // crear 3 funciones:
// // //     - una para solicitar usuario
// // //     - otra para solicitar la contraseña
// // //     - otra para acceder al sistema
// // // */
// // // function solicitarUsuario() {
// // //     let user = window.prompt("Escriba su usuario");
// // //     return user;
// // // }

// // // function solicitarClave() {
// // //     let clave = window.prompt("Escriba su clave");
// // //     return clave;
// // // }

// // // function acceder(user, clave) {
// // //     let mensaje = "";
// // //     if (user == "admin" && clave == "abc123") {
// // //         mensaje = "Bienvenid@ al sistema";
// // //     } else {
// // //         mensaje = "Datos incorrectos ;(";
// // //     }
// // //     return mensaje;
// // // }
// // // let user = solicitarUsuario();
// // // let clave = solicitarClave();
// // // let mensaje = acceder(user, clave);
// // // let p = document.getElementById("parrafo1")
// // // p.innerHTML = mensaje;

// // //función anónima
// // var a = function () {
// //     console.log("Hola función anónima");
// // }
// // a();

// // //función flecha, arrow, lambda
// // var b = () => {
// //     console.log("Holaaaa flecha");
// // }
// // b();
// // var c = num => console.log("soy flecha " + num);
// // c(6);
// // /*
// // solicitar al usuario dos números
// // mostrar una secuencia con esos números de menor a mayor

// // */
// let p = document.querySelector("#parrafo1")
// let ms = (num1, num2) => {
//     for (var i = num1; i <= num2; i++) {
//         p.innerHTML += i + "<br>";
//     }
// }
// let num1 = parseInt(window.prompt("escribe un número"));
// let num2 = parseInt(window.prompt("escribe otro número"));
// if (num1 < num2) {
//     ms(num1, num2);
// } else if (num2 < num1) {
//     ms(num2, num1);
// } else {
//     p.innerHTML = "No corresponde";
// }

// function premiar() {
//     alert("Te ganaste un helado!!");
// }
// let botoncito = document.getElementById("btn");
// botoncito.onclick = premiar;
// let foco = document.querySelector("#foco")
// function apagar() {
//     foco.src = "off.gif";
// }
// function encender() {
//     console.log(foco.src);
//     foco.src = "on.gif";
// }
// let off = document.getElementById("off");
// let on = document.getElementById("on");
// on.onclick = encender
// off.onclick = apagar

function mostrarColor(color) {
    let caja = document.getElementById("caja");
    // let body = document.querySelector("body")
    caja.style.backgroundColor = color;
    // body.style.backgroundColor = color;
}

/*
crear un arreglo de objetos con pacientes 
mostrar esos pacientes en un recuadro del html
armar un form html con algunos datos de pacientes deben agregar al arreglo
a través de funciones, eventos, dom
*/
document.getElementById("dato").value = ""
