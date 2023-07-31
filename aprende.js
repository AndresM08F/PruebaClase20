// var nombre = "Andres ";
// let num1 = 23;
// let num2 = 10;
// let respuesta = num1 + num2;
// alert(nombre + respuesta)

// let nombre = prompt ("Dame tu nombre")
// alert("Bienvenido " + nombre)

// let nombre = prompt("¿Cual es tu nombre?")
// let edad = prompt("¿Cual es tu edad?")
// document.getElementById('contenido').innerHTML=`<h2>Bienvenido ${nombre}</h2><h3> Tu edad es ${edad}</h3>`

let nombre = prompt("¿Cual es tu nombre?")
let apellido = prompt("¿Cual es tu apellido?")
let empresa = prompt("¿Cual es tu Empresa/Institucion?")
let ambito = prompt("¿Cual es tu Ambito de la empresa?")
let cargo = prompt("¿Cual es tu cargo?")
let usuario = prompt("¿Cual es tu Nombre de usuario?")
let contraseña = prompt("¿Cual es tu Contraseña?")
let r_contraseña = prompt("¿Cual es tu Repita contraseña?")
let correo = prompt("¿Cual es tu Correo electronico?")

document.getElementById('contenido').innerHTML=`<h1>Bienvenido ${nombre}</h1><h2> Tu apellido es ${apellido},
tu empresa es ${empresa}, tu ambito de empresa es ${ambito}, tu cargo es ${cargo}, tu usuario es ${usuario},
tu contraseña es ${contraseña}, tu correo es ${correo}</h2>`