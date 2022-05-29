// 1 - Se muestra por consola una cadena de texto
console.log("-----------------------");
console.log('Hola Mundo!');
console.log("Soy el primer script");

// 2 ---------------------------------
console.log("-----------------------");

// Definición de la constante con el mensaje
const mensaje = `Hola Mundo!
Qué facil es incluir 'comillas simples' y "comillas dobles"`;

// Mostrar un mensaje emergente al usuario
// alert(mensaje);

// 3 ---------------------------------
console.log("-----------------------");

const nombresMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

// Mostrar por consola los nombres de los meses
for (let index = 0; index < nombresMeses.length; index++) {
    console.log(nombresMeses[index]);

}

// 4 -----------------------------------
console.log("-----------------------");

let valores = [true, 5, false, "hola", "adios", 2];

// Comparar cual de los 2 textos es mayor

if (valores[3].length > valores[4].length) {
    console.log(`"${valores[3]}" tiene más letras que "${valores[4]}"`);
} else {
    console.log(`"${valores[4]}" tiene más letras que "${valores[3]}"`);
}

// Suma, resta, multiplicación, división, modulus
console.log("-----------------------");


const operando1 = valores[1];
const operando2 = valores[5];

console.log("Resultado suma de " + operando1+ " y " + operando2);
console.log(operando1 + operando2);
console.log("Resultado rest de " + operando1+ " y " + operando2);
console.log(operando1 - operando2);
console.log("Resultado multiplicación de " + operando1+ " y " + operando2);
console.log(operando1 / operando2);
console.log("Resultado división de " + operando1+ " y " + operando2);
console.log(operando1 * operando2);
console.log("Resultado modulo de " + operando1+ " y " + operando2);
console.log(operando1 % operando2);

// 5 -----------------------------------
console.log("-----------------------");

let numero1 = 5;
let numero2 = 8;

if (numero1 > numero2) {
    console.log("Numero1 és mayor que Numero2");
}

if (numero2 > 0) {
    console.log("numero2 es positivo");
}

if (numero1 < 0) {
    console.log("numero1 es negativo o distinto de 0");
}

if (!(++numero1 >= numero2)) {
    console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}
