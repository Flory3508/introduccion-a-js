/* // Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

let nombreUsuario = prompt('Por favor, ingresa tu nombre', 'Tu nombre aqui');
if(nombreUsuario.trim().length === 0){
    console.log('No ingresaste ningún nombre');
}else if(nombreUsuario === 'Florencia'){
    console.log('Tocaya!, yo tambien me llamo Florencia!');
}else if(nombreUsuario === 'Javier'){
    console.log('Hola '+ nombreUsuario + ' te llamas igual que mi pareja')
}else (//(nombreUsuario !== 'Florencia'){
    console.log('Hola ' + nombreUsuario));
//}

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

let edadUsuario = Number(prompt('Por favor ingresa tu edad'));
if(edadUsuario == 34){
    console.log('Tenemos la misma edad');
}if(edadUsuario > 34){
    console.log('Eres mas grande que yo!');
}if(edadUsuario < 34){
    console.log('Eres mas joven que yo!')
}
 */
//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

let edadUsuario2 = prompt('¿Tenés dni? Si o No');
if(edadUsuario2.toLowerCase().trim() == 'si'){
    let edad = propmt('¿Qué edad tienes?');
    if(edad >= 18){
        console.log('Puedes entrar');
    }else{
        console.log('Lo siento, no puedes entrar');
    }
if(edadUsuario2.toLowerCase().trim() == 'no'){
    console.log('Lo siento, no puedes entrar');
}

}


