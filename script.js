
/*
//PROBANDO SACAR UN NUMERO PAR O IMPAR 


numero = prompt('Por favor, ingrese un número')
resultado = Number(numero)


if (resultado%2 != 0) {console.log('El número es impar')
} else {console.log('el número es par') };


//  PROBANDO EL OR ||

var numeroUno = 20;
var numeroDos = 40;
var numeroTres = 33;

if (numeroUno > 35 || numeroDos > 35 || numeroTres > 35) {
    alert('Al menos una de las variables es mayor a 35')};

*/


//EJERCICIO DE CONDICIONALES, 
/*
let bienvenida = alert('Bienvenido A CoderBurger, las mejores hamburguesas de la nube! Toca aceptar para continuar');
let burger = Number (prompt('Cuántos medallones querés que tenga tu burger? Hay 20% de dcto en dobles y 50% de descuento en triples'));
let cheddar = prompt("Querés agregarle cheddar a tu burger? Por favor responde si o no para que funcione, por ahora no somos tan cracks programando, pero hacemos lo que podemos!");
let bacon = prompt("Querés agregarle bacon a tu burger? Por favor responde si o no, ya que otra respuesta puede que destruya este sitio  :)");
let provoleta = prompt('Querés agregarle una provoleta ahumada a tu burger?');
let bebida = prompt('Te gustaría agregar una bebida?');

let precioBurgers = 100;
let precioCheddar = 0;
let precioBacon = 0;
let precioProvoleta = 0;
let precioBebida = 0;




if (burger <= 0) { console.log('Es la primera vez en mi vida que veo a alguien encargar una burger sin ningun medallón!')} 
    else if (burger >= 6) { console.log('Se ve que viniste con hambre, gracias por pagarle la universidad a mis hijos!')} 
    else if (burger == 2) { precioBurgers = precioBurgers * 0.8}
    else if (burger == 3) {precioBurgers = precioBurgers * 0.5}

if (cheddar == "si") {precioCheddar = 80};
if (bacon == "si") {precioBacon = 50};
if (provoleta == "si") {precioProvoleta = 120};
if (bebida == "si") {precioBebida = 150};

console.log(resultado)


let resultado = (precioBurgers * burger) + precioCheddar + precioBacon + precioProvoleta + precioBebida;

console.log('de todas maneras, muchas gracias por tu compra!')
console.log(resultado)





let bienvenida = alert('Bienvenido A CoderBurger, las mejores hamburguesas de la nube! Toca aceptar para continuar');
let burger = Number (prompt('Cuántos medallones querés que tenga tu burger? Hay 20% de dcto en dobles y 50% de descuento en triples'));
let cheddar = prompt("Querés agregarle cheddar a tu burger? Por favor responde si o no para que funcione, por ahora no somos tan cracks programando, pero hacemos lo que podemos!");
let bacon = prompt("Querés agregarle bacon a tu burger? Por favor responde si o no, ya que otra respuesta puede que destruya este sitio  :)");
let provoleta = prompt('Querés agregarle una provoleta ahumada a tu burger?');
let bebida = prompt('Te gustaría agregar una bebida?');

let precioBurgers = 100;
let precioCheddar = 80;
let precioBacon = 50;
let precioProvoleta = 120;
let precioBebida = 150;

let resultado = 0;




if (burger <= 0) { console.log('Es la primera vez en mi vida que veo a alguien encargar una burger sin ningun medallón!')} 
    else if (burger >= 6) { console.log('Se ve que viniste con hambre, gracias por pagarle la universidad a mis hijos!')} 
    else if (burger == 2) {resultado = resultado + (precioBurgers = precioBurgers * 0.8)}
    else if (burger == 3) {resultado = resultado + (precioBurgers = precioBurgers * 0.5)}

if (cheddar == "si") {resultado = resultado + precioCheddar};
if (bacon == "si") {resultado = resultado + precioBacon};
if (provoleta == "si") {resultado = resultado + precioProvoleta };
if (bebida == "si") {resultado = resultado + precioBebida};

console.log(resultado)

*/


let bienvenida = alert('Bienvenido A CoderBurger, las mejores hamburguesas de la nube! Toca aceptar para continuar');
let burger = Number (prompt('Cuántos medallones querés que tenga tu burger? Hay 20% de dcto en dobles y 50% de descuento en triples'));
    if (burger < 0) {burger = Number (prompt('No existen hamburgesas negativas... cuántos medallones querés?'));}
let cheddar = prompt("Querés agregarle cheddar a tu burger? Por favor responde si o no para que funcione, por ahora no somos tan cracks programando, pero hacemos lo que podemos!");
let bacon = prompt("Querés agregarle bacon a tu burger? Por favor responde si o no, ya que otra respuesta puede que destruya este sitio  :)");
let provoleta = prompt('Querés agregarle una provoleta ahumada a tu burger?');
let bebida = prompt('Te gustaría agregar una bebida?');


let descuento = 1;
let precioBurgers = 100;
let precioCheddar = 80;
let precioBacon = 50;
let precioProvoleta = 120;
let precioBebida = 150;

let resultado = 0;




if (burger = 0) { console.log('Es la primera vez en mi vida que veo a alguien encargar una burger sin ningun medallón!')} 
    else if (burger >= 6) { console.log('Se ve que viniste con hambre, gracias por pagarle la universidad a mis hijos!')} 
    else if (burger == 2) {descuento = 0.8} 
    else if (burger == 3) {descuento = 0.5}
    
    

resultado = resultado + burger * (precioBurgers * descuento)

if (cheddar == "si") {resultado = resultado + precioCheddar};
if (bacon == "si") {resultado = resultado + precioBacon};
if (provoleta == "si") {resultado = resultado + precioProvoleta };
if (bebida == "si") {resultado = resultado + precioBebida};

console.log(resultado)