// 6 - Calculo letra DNI
console.log("-----------------------");

const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let numeroDNI = prompt("Introduce el número del DNI");
let letraDniIntroducida = prompt("Introduce la letra del DNI");
let letraCalculada;

// Method comprobar letra
function comprobarLetra(letraCalculada) {
    // Comprobar la letra calculada con la letra proporcionada
    if (letraDniIntroducida === letraCalculada) {
        console.log("Numero y letra del DNI son correctos");
    } else {
        console.log("Letra del DNI es incorrecta");
    }
}

// Comprobar si el numero del dni es válido, entonces calcular la letra.
if (numeroDNI < 0 || numeroDNI > 99999999) {
    alert("El número es incorrecto");
} else {
    letraCalculada = letras[numeroDNI % 23];
    comprobarLetra(letraCalculada);
}