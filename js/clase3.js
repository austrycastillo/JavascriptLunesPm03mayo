/*
for(inicio;condición;ajuste){
    instrucciones
}
*/
// var p = 0;
// for (var i = 1; i <= 200; i++) {
//     console.log(i);
//     p= 4*(i*i)-3;
//     document.write("i:" + i + "  p:" + p)

// }
// var datos = ["Juan", 10, 80.2, true, "Ana"];
// var nombre = new Array('Luis', 'Axel', 'Samantha');
// console.log(datos[0]);
// datos[0] = "Pedro";
// console.log(datos[0]);
// console.log(datos.length)
// var tam = datos.length;
// for (var i = 0; i < tam; i++) {
//     document.write("Dato " + i + "-> " + datos[i] + "<br>");
// }
/*
atletismo:
-preguntar cuántos atletas van a participar
-registrar nombre y tiempo(2 vectores)
-determinar el atleta con menor tiempo(ganador)
*/
// var cantidad = 0, nombre = [], tiempo = [], menor, ganador;
// cantidad = window.prompt("Escribe la cantidad de atletas");
// for (var i = 0; i < cantidad; i++) {
//     nombre[i] = window.prompt("Escribe el nombre del atleta");
//     tiempo[i] = parseInt(window.prompt("Escribe el tiempo de " + nombre[i]));
// }
// menor = tiempo[0];
// ganador = nombre[0];
// for (var i = 0; i < tiempo.length; i++) {
//     if (tiempo[i] < menor) {
//         menor = tiempo[i];
//         ganador = nombre[i];
//     }
// }
// document.write("El ganador es " + ganador + " con un tiempo de " + menor + " minutos");

//algunas funciones de vectores
// var clientes = ["Ana", "Juan", "Samuel"];
//clientes.push("Santiago");//agregar al final
//clientes.unshift("Santiago");//agregar al principio
//clientes.pop();//eliminar al final
//clientes.shift();//eliminar al inicio
//clientes.splice(1, 0, "Santiago");
//clientes.splice(1, 1, "Santiago");
//clientes.splice(1, 2);
//console.log(clientes);
// var a = [1, 2, 3];
// var b = [4, 5, 6];
// //var c = a.concat(b);
// var c = [...a, ...b];
// var c = [1, 2, 3, 4, 5, 6, 7, 8, 9, ...a, 4, 5, 6];
// console.log(c);

//objetos -> clave:valor
// var alumno = {
//     nombre: "Juan",
//     apellido: "Asiatico",
//     edad: 20
// };
// console.log(alumno.nombre);
// let productos = [
//     {
//         nombre: "shampoo",
//         precio: 100
//     },
//     {
//         nombre: "acondicionador",
//         precio: 150
//     },
//     {
//         nombre: "crema",
//         precio: 50
//     }
// ];
// console.log(productos[1].nombre);
// let relleno = "<tr><th>Nombre del producto</th><th>Precio</th></tr>";
// for (var i = 0; i < productos.length; i++) {
//     relleno += "<tr><td>" + productos[i].nombre + "</td><td>" + productos[i].precio + "</td></tr>";
// }
// let tabla = document.getElementById("tabla");
// tabla.innerHTML = relleno;

//CREAR ELEMENTOS EN EL DOM
//PASO 1 : CREAR LA ETIQUETA
//2 (OPCIONAL): DARLE CONTENIDO
//3 : CONFIRMAR EL SITIO

let div = document.createElement('div');
div.innerHTML = "<p> Lorem ipsum dolor, sit amet <strong>consectetur</strong> adipisicing elit. Animi eum ducimus incidunt sunt vel</p>";
document.body.appendChild(div);

let link = document.querySelector("#link");
let a = document.createElement("a");
a.innerText = "Click para visitar google";
a.href = "https://www.google.com/";
a.target = "blank";
a.style.color = "orange";
link.appendChild(a);

/*
crear un listado de países por visitar (ul,ol)-> 5 elementos
*/
let ul = document.querySelector(".ul");
let paises = ["Suiza", "USA", "Venezuela", "Brasil", "Irlanda"];
for (var i = 0; i < paises.length; i++) {
    var item = document.createElement("li");
    item.innerHTML = paises[i];
    ul.appendChild(item);
}

/*
crear una tabla en html, agregar elementos (tr,td)desde js, tulizar for
*/