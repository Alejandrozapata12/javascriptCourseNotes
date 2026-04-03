/*

Array indexOf()
Array lastIndexOf()
Array includes()
Array find()
Array findIndex()
Array findLast()
Array findLastIndex()
*/

// indexOf() -> Busca un valor exacto y devuelve la primera posición (índice) donde aparece. Si no lo encuentra → devuelve -1
const numeros = [10, 20, 30, 20];
console.log(numeros.indexOf(20)); // 1

// lastIndexOf() -> Igual que indexOf, pero busca desde el final del array.
console.log(numeros.lastIndexOf(20)); // 3

// includes() -> Verifica si un valor existe en el array. Devuelve: true o false
console.log(numeros.includes(20)); // true
console.log(numeros.includes(50)); // false

// find() -> Busca el primer elemento que cumpla una condición. Devuelve: el valor encontrado (no el índice)
const usuarios = [
  { nombre: "Juan", edad: 17 },
  { nombre: "Ana", edad: 22 }
];

const mayor = usuarios.find(u => u.edad >= 18);

console.log(mayor); 
// { nombre: "Ana", edad: 22 }

// findIndex() -> Igual que find, pero devuelve el índice del elemento.
const index = usuarios.findIndex(u => u.edad >= 18);
console.log(index); // 1

// findLast() -> Busca desde el final y devuelve el último elemento que cumpla la condición.
const num = [5, 12, 8, 130, 44];
const resultado = num.findLast(n => n > 10);
console.log(resultado); // 44

// findLastIndex() -> Igual que findLast, pero devuelve el índice.
const index_ = numeros.findLastIndex(n => n > 10);
console.log(index_); // 4