/**
 * Compruba si la cadena de texto recibida se lee del mismo modo al revés
 */
function comprobarPalindromo(text) {

    // Poner en minuscula y eliminar los espacios del texto
    text = text.toLowerCase();
    text = text.replaceAll(" ", "");

    let normalText = text;

    // Convertir en array y separar por letra para dar la vuelta al string
    let normalArr = text.split('');
    let revesArr = normalArr;
    revesArr = revesArr.reverse();
    let revesText = revesArr.join('');

    // Comprobar si se escriben igual
    if (normalText === revesText) {
        alert("Es un palindromo")
        console.log("Es un palindromo")
    } else {
        alert("No es un palindromo")
        console.log("No es un palindromo")
    }
}

/*******************/
// Obtener el input del usuario
let text = prompt("Introducir un texto");
//Ejecutar la función de comprobar
comprobarPalindromo(text);