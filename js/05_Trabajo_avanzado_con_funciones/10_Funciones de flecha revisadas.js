// Una arrow function es una forma más corta de escribir funciones.
// Sintaxis:
// const nombreFuncion = (parametros) => {
//     // cuerpo de la función
// }

const sumar = (d, f) =>{ d + f };
// Si la función tiene una sola expresión, se puede omitir el bloque de llaves y el return.
const sumar2 = (d, f) => d + f; 

// Si la función tiene un solo parámetro, se pueden omitir los paréntesis.
const cuadrado = x => x * x;
// Si la función no tiene parámetros, se deben usar paréntesis vacíos.
const saludar = () => console.log("¡Hola!");

// Las arrow functions no tienen su propio contexto de "this", por lo que heredan el valor de "this" del ámbito en el que fueron definidas.
