//Métodos en tipos primitivos
/*
JavaScript nos permite trabajar con tipos de datos primitivos (string, number, etc) como si fueran objetos. Los primitivos también ofrecen métodos que podemos llamar. Los estudiaremos pronto, pero primero veamos cómo trabajan porque, por supuesto, los primitivos no son objetos (y aquí lo haremos aún más evidente).

Veamos las diferencias fundamentales entre primitivos y objetos.

(Un primitivo)

Es un valor de tipo primitivo.
Hay 7 tipos primitivos: string, number, bigint, boolean, symbol, null y undefined.

(Un objeto)
Es capaz de almacenar múltiples valores como propiedades.
Puede ser creado con {}. Ejemplo: {name: "John", age: 30}. Hay otras clases de objetos en JavaScript; las funciones, por ejemplo, son objetos.

*/

// Ejemplo: 

let data = {
  nombre: "John",
  edad: 30,
  fullData: function() {
    return `${this.nombre} tiene ${this.edad} años.`;
  } 
};

console.log(data.fullData()); // Output: "John tiene 30 años."

// En el ejemplo anterior, data es un objeto con dos propiedades (nombre y edad) y un método (fullData). El método fullData devuelve una cadena que describe a la persona usando las propiedades del objeto.

// Ahora veamos un ejemplo con un tipo primitivo:
let str = "Hello, World!";

// Aunque str es un tipo primitivo (string), podemos llamar a métodos en él, como toUpperCase():
console.log(str.toUpperCase()); // Output: "HELLO, WORLD!"
// Esto es posible porque JavaScript automáticamente convierte el string primitivo en un objeto String temporal para que podamos usar sus métodos. Después de llamar al método, el objeto temporal se descarta y seguimos trabajando con el valor primitivo original.

// En resumen, aunque los tipos primitivos no son objetos, JavaScript nos permite usar métodos en ellos gracias a la conversión automática a objetos temporales. Esto hace que trabajar con tipos primitivos sea más conveniente y flexible.

// Otro ejemplo es con los Numbers:
let n = 1.34254;
console.log(n.toFixed(2)); // Output: "1.34"
// Aquí, toFixed() es un método que formatea el número a un número fijo de decimales. Al igual que con los strings, JavaScript convierte el número primitivo en un objeto Number temporal para que podamos usar sus métodos. Después de llamar al método, el objeto temporal se descarta y seguimos trabajando con el valor primitivo original.








