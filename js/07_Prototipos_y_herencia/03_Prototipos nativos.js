// Prototipos nativos

/*
La propiedad "prototype" es ampliamente utilizada por el núcleo mismo de JavaScript. Todas las funciones de constructor integradas lo usan.
*/

// Por ejemplo, el constructor de objetos tiene un prototipo que proporciona métodos como "hasOwnProperty" o "toString":

console.log(Object.prototype); 
// El constructor de arrays tiene un prototipo que proporciona métodos como "push", "pop", "map", etc.:

console.log(Array.prototype); 
// El constructor de funciones tiene un prototipo que proporciona métodos como "call", "apply", etc.:

console.log(Function.prototype);
// El constructor de cadenas tiene un prototipo que proporciona métodos como "toUpperCase", "toLowerCase", etc.:

console.log(String.prototype);
// El constructor de números tiene un prototipo que proporciona métodos como "toFixed", "toExponential", etc.:
console.log(Number.prototype);
// El constructor de booleanos tiene un prototipo que proporciona métodos como "toString", etc.:
console.log(Boolean.prototype); 



// Ejemplo

const obj = {};
console.log(obj.toString()); // Método heredado de Object.prototype 

// Otro ejemplo

"Hola".toUpperCase(); // Método heredado de String.prototype

// Otro ejemplo
[1, 2, 3].push(4); // Método heredado de Array.prototype

// Otro ejemplo
function saludar() {
  console.log("¡Hola!");
}
saludar.call(null); // Método heredado de Function.prototype

// En resumen, los prototipos nativos son fundamentales para el funcionamiento de JavaScript, ya que proporcionan métodos y propiedades esenciales a los objetos creados a partir de los constructores integrados.



























