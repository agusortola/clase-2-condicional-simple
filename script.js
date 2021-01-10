// EL EJERCICIO QUE NOS MANDARON A HACER



let numero = Number (prompt ("Por favor, ingrese un numero entero"));

if (numero >= 10 && numero <= 50 ) {alert('El número que ingresaste está entre 10 y 50')};








/* OTRO EJERCICIO QUE ESTUVE INTENTANDO... NO SE SI ES IDEAL HACERLO ASI, PERO ME SIRVIO PARA PRACTICAR

let bienvenida = alert('Bienvenido A CoderBurger, las mejores hamburguesas de la nube! Toca aceptar para continuar');
let burger = Number (prompt('Cuántos medallones querés que tenga tu burger? Hay 20% de dcto en dobles y 30% de descuento en triples'));
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




if (burger >= 6) { console.log('Se ve que viniste con hambre, gracias por pagarle la universidad a mis hijos!')} 
    else if (burger == 2) {descuento = 0.8} 
    else if (burger == 3) {descuento = 0.7}
    
    
if (burger > 0) {resultado = resultado + burger * (precioBurgers * descuento)}
else {console.log('Para comer una hamburguesa vacía, mejor volvete a tu casa')}

if (cheddar == "si") {resultado = resultado + precioCheddar};
if (bacon == "si") {resultado = resultado + precioBacon};
if (provoleta == "si") {resultado = resultado + precioProvoleta };
if (bebida == "si") {resultado = resultado + precioBebida};

console.log(`Gracias por tu compra, te sale  $${resultado} `)
*/

