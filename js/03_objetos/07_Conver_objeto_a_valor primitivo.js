// Conversión de objetos a valores primitivos en JavaScript

/*
La conversión de objeto a valor primitivo es llamada automáticamente por muchas funciones y operadores incorporados que esperan un valor primitivo.

Hay 3 tipos (hints o sugerencias) de estas:

"string" (para alert y otras operaciones que necesitan un string)
"number" (para matemáticas)
"default" (pocos operadores, usualmente los objetos lo implementan del mismo modo que "number")
La especificación describe explícitamente qué operador utiliza qué sugerencia.

El algoritmo de conversión es:

Llamar a obj[Symbol.toPrimitive](hint) si el método existe,
En caso contrario, si la sugerencia es "string"
intentar llamar a obj.toString() y obj.valueOf(), lo que exista.
En caso contrario, si la sugerencia es "number" o "default"
intentar llamar a obj.valueOf() y obj.toString(), lo que exista.
Todos estos métodos deben devolver un primitivo para funcionar (si está definido).

En la práctica, a menudo es suficiente implementar solo obj.toString() como un método “atrapatodo” para todas las conversiones a string que deben devolver la representación “legible por humanos” de un objeto, con fines de registro o depuración.

Como en las operaciones matemáticas, JavaScript no ofrece una forma de “sobrescribir” operadores usando métodos. Así que en proyectos de la vida real raramente se los usa en objetos.
 */

// 1. Método toString()
const objeto1 = {
  nombre: "Juan",
  toString() {
    return `Objeto: ${this.nombre}`;
  }
};

console.log(String(objeto1)); // "Objeto: Juan"

// 2. Método valueOf()
const objeto2 = {
  valor: 42,
  valueOf() {
    return this.valor;
  }
};

console.log(Number(objeto2)); // 42

// 3. Symbol.toPrimitive (mayor prioridad)
const objeto3 = {
  [Symbol.toPrimitive](hint) {
    if (hint === "number") return 100;
    if (hint === "string") return "Soy un objeto";
    return true;
  }
};

console.log(+objeto3); // 100
console.log(String(objeto3)); // "Soy un objeto"
console.log(objeto3 == true); // true

// 4. Conversión implícita
const objeto4 = {
  valueOf() {
    return 10;
  }
};

console.log(objeto4 + 5); // 15
console.log(objeto4 * 2); // 20