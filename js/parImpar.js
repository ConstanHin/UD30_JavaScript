/**
 * Compruba si el numero es par o impar
 */
function parImpar(numero) {

    if (numero % 2 === 0) {
        alert("El numero es par");

    } else {
        alert("El numero es impar");

    }

}

// Obtener el input del usuario
let numero = prompt("Añadir un numero entero");
numero = parseInt(numero);

// Continuar ejecucción si el valor introducido es un numero integro
if (Number.isInteger(numero)) {
    parImpar(numero);
} else {
    alert("El valor introducido es incorrecto")
}