// Tipo Symbol
/*
Según la especificación, solo dos de los tipos primitivos pueden servir como clave de propiedad de objetos:

string, o
symbol.
Si se usa otro tipo, como un número, este se autoconvertirá a string. Así, obj[1] es lo mismo que obj["1"], y obj[true] es lo mismo que obj["true"].

Hasta ahora solo estuvimos usando strings.

Ahora exploremos symbols y ver lo que pueden hacer por nosotros.
 */

// Creando un Symbol
let sym1 = Symbol();
let sym2 = Symbol("descripcion");

console.log(sym1); // Symbol()
console.log(sym2); // Symbol(descripcion)

// Un Symbol es único
let sym3 = Symbol("descripcion");
console.log(sym2 === sym3); // false

// Usando Symbols como claves de propiedad
let obj = {};
let symKey = Symbol("clave");
obj[symKey] = "Valor asociado al símbolo";
console.log(obj[symKey]); // Valor asociado al símbolo

// Los símbolos no aparecen en for...in o Object.keys()
for (let key in obj) {
  console.log(key); // No se muestra symKey
}
console.log(Object.keys(obj)); // [] - No se muestra symKey
console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(clave)] - Muestra symKey

// Usando Symbols para evitar colisiones de nombres
let symA = Symbol("propiedad");
let symB = Symbol("propiedad");
console.log(symA === symB); // false
let myObject = {};
myObject[symA] = "Valor A";
myObject[symB] = "Valor B";
console.log(myObject[symA]); // Valor A
console.log(myObject[symB]); // Valor B


