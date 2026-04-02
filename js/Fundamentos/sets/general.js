/*
Un conjunto(set) de JavaScript es una colección de valores únicos.
Cada valor solo puede aparecer una vez en un Conjunto.
Los valores pueden ser de cualquier tipo, valores primitivos u objetos.

Cómo crear un conjunto
Puedes crear un conjunto de JavaScript mediante:

Pasar un array a new Set()
Crea un conjunto vacío y úsalo para sumar valoresadd()
*/

// Creación de un conjunto
const letters = new Set(["a", "b", "c"]);
document.getElementById("demo").innerHTML = "The set has " + letters.size + " values."; // The set has 3 values.

// Creación de un conjunto vacio y agregar los valores. 
const palabra = new Set();
palabra.add("a");
palabra.add("b");
palabra.add("c");

document.getElementById("demo").innerHTML = "The set has " + palabra.size + " values."; // The set has 3 values.

// Crear conjunto vacio y agregar variables
const frase = new Set();

let letter1 = "a";
let letter2 = "a";
let letter3 = "a";

frase.add(letter1);
frase.add(letter2);
frase.add(letter3);



