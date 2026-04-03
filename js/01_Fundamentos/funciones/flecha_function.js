// Las Funciones de Flecha se introdujeron en ES6 y son comúnmente usado en JavaScript moderno.

/*
Una función de flecha utiliza el símbolo =>.
Una función flecha siempre se escribe como una expresión de función.
*/

const add = (a, b) => {
  return a + b;
};

const multiplicar = (a, b) => a * b;

// Si solo tenemos un argumento, se pueden omitir paréntesis alrededor de los parámetros, lo que lo hace aún más corto.

const numbers = n => n * 2; 

// Si no hay parámetros, los paréntesis estarán vacíos; pero deben estar presentes.
const data = () => alert("Hola"); 

/*
Funciones de flecha multilínea
Las funciones de flecha que estuvimos viendo eran muy simples. Toman los parámetros a la izquierda de =>, los evalúan y devuelven la expresión del lado derecho.

A veces necesitamos una función más compleja, con múltiples expresiones o sentencias. En ese caso debemos encerrarlos entre llaves. La diferencia principal es que las llaves necesitan usar un return para devolver un valor (tal como lo hacen las funciones comunes).

Como esto:
*/

let sum = (a, b) => {  // la llave abre una función multilínea
  let result = a + b;
  return result; // si usamos llaves, entonces necesitamos un "return" explícito
};

alert( sum(1, 2) ); // 3

