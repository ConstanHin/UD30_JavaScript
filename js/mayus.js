/**
 * Compruba si la cadena de texto recibida está compuesta
 * solo de minusculas, mayusculas o ambas
 */
function comprobarMayus(text) {
    if (text === text.toLowerCase()) {
        alert("El texto está en minusculas")
        console.log("El texto está en minusculas")
    } else if (text === text.toUpperCase()){
        alert("El texto está en mayusculas")
        console.log("El texto está en mayusculas")
    } else {
        alert("El texto combina mayusculas y minusculas")
        console.log("El texto combina mayusculas y minusculas")
        
    }


}

// Obtener el input del usuario
let text = prompt("Introducir un texto");
//Ejecutar función
comprobarMayus(text);