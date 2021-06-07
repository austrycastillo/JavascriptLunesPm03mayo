// //PRACTICA 1 un mundo asincronico
// function mostrar() {
//     console.log("hola uno")
//     setTimeout(function () {
//         console.log("Hola setTimeout")
//         alert("Holaaa")
//     }, 3000)
//     console.log("hola dos ")
// }
// function mostrar2() {
//     console.log("hola uno")
//     setInterval(function () {
//         console.log("Hola setTimeout")
//         alert("Holaaa")
//     }, 3000)
//     console.log("hola dos ")
// }

// let fecha = new Date()
// // console.log(fecha.getSeconds())
// let dia = fecha.getDate()
// let mes = fecha.getMonth() + 1
// let anio = fecha.getFullYear()
// let hora = fecha.getHours()
// let minutos = fecha.getMinutes()
// let seg = fecha.getSeconds()
// let h1 = document.querySelector("h1")
// function regresivo() {
//     setInterval(() => {
//         h1.innerHTML = `0${dia} - 0${mes} - ${anio} ${hora}: ${minutos}: ${seg}`//template literal
//         if (seg > 0) {
//             seg--;
//         }else{
//             seg = 59 
//             minutos--;
//         }

//     }, 1000);

// }

/*PRACTICAS JQUERY
$("selector").acción()
algunos métodos: text, html, val, click, mouseover, hide, show, animate
*/
// let titulo = $("h1").text()
// let titulo = $("#titulo").text()
// let titulo = $(".t").text()
//alert(titulo)
//PRACTICA 1 JQUERY
// $("h1").text("Hola JQuery")
// $("#d").click(desaparecer)
// $("#a").click(aparecer)
// function desaparecer(){
//     //$("#cajita").hide()
//     $("#cajita").fadeOut("slow")
// }
// function aparecer(){
//     //$("#cajita").show()
//     $("#cajita").fadeIn("slow")
// }

//PRACTICA 2 JQUERY
// $("#ver").click(function () {
//     $("#content").slideToggle("slow")
// })

//PRACTICA 3 JQUERY
$("#activar").click(function(){
    $("#anime").animate({left:'350px'})
})

