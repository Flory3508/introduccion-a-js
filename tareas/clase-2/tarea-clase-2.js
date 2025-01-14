// TAREA: Tenemos 2 funciones de la tarea anterior -- 'sumar' y 'restar'
//      Vamos a decirle a la máquina qué función tiene que correr,
//      dependiendo del operador artmético (+, -, /, *, etc.)
//
//      Si el (IF) operador es '+', vamos a usar la función para sumar.
//      Si no (ELSE), vamos a usar la función para restar.
//
// Paso 1 - Crear una variable llamada 'operador' y asignarle el valor '+'.
// Paso 2 - Crear 2 variables que contengan 2 números cualquiera.
// Paso 3 - Crear una condición if/else basada en el operador que tenemos.

let num1 = 0;
let num2 = 0;

function sumar(num1, num2) {
    return num1 + num2;
}
//console.log (sumar(2,3));

function restar(num1, num2) {
    return num1 - num2;
}

let operador = "-";
num1 = 5;
num2 = 8;

if (operador === "+") {
    console.log(sumar(num1, num2));
} else {
    console.log(restar(num1, num2))
};
//
// Si (if) tenemos un operador igual a '+', llamamos (ejecutamos. sumar(1,2)) la función
// 'sumar' con nuestros números (las variables del paso 2).
// Si no (else), tenemos que llamar la función 'restar', con nuestros números (las variables del paso 2).
//
// No se olviden de hacer un console.log para ver el resultado!
//

// TAREA: Cambiar el operador a '-', y fijarse que llame a la función 'restar' en vez de a la de 'sumar'.



//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/template_strings