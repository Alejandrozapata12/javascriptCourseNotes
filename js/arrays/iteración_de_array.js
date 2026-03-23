/*

Array forEach
Array map()
Array flatMap()
Array filter()
Array reduce()
Array reduceRight()
Array every()
Array some()
Array from()
Array keys()
Entradas de array()
Array with()
Array Spread (...)
Array Rest (...)

*/

// ************************ITERACIÓN Y TRANSFORMACIÓN************************

//  forEach() -> Recorrer el array sin devolver uno nuevo.Es solo para efectos secundarios (logs, DOM, etc.)
const numeros = [1,2,3,4,5];
let doble = numeros.forEach(n => n * 2); // undefined  


// map() -> Transforma cada elemento y devuelve un nuevo array.
const nums = [1, 2, 3];
let dos = nums.map(item => item * 2); // 2,4,6

// flatMap() -> Hace map() + aplana un nivel (flat(1)).
const frases = ["Hola Mundo", "Ride", "By", "Lana De Rey"];
let plana = frases.flatMap(f => f.split(" ")); // Hola,Mundo,Ride,By,Lana,De,Rey


// ************************FILTRADO************************

// filter() -> Devuelve un nuevo array con los que cumplen una condición.
const dat = [10, 20, 40, 50, 60, 100];
let filtro = dat.filter(n => n > 20); // 40,50,60,100


// ************************REDUCCIÓN************************

// reduce() -> Reduce todo el array a un solo valor.
const suma = [1,2,3,4,5];
let rd = suma.reduce((uno, dos) => uno + dos, 0); // 15

// reduceRight() -> Igual que reduce(), pero de derecha a izquierda.
const palabras = ["Hola", "Mundo"];
const frase_completa = palabras.reduceRight((palabraUno, palabraDos) => palabraUno + " " + palabraDos); // Mundo Hola, y si ponemos al reves el proceso entonces ya queda Hola Mundo


// ************************VALIDACIONES************************

// every() -> Verifica si todos cumplen la condición. 
const ever = [2, 4, 6];
const resultado = ever.every(n => n % 2 === 0); //  true


// some() -> Verifica si al menos uno cumple. 
const som = [1, 3, 5];
const resulSom = som.some(item => item % 2 === 0); // true


// ************************UTILIDADES DE ARRAY************************

// Array.from() -> Convierte cosas “array-like” o iterables en arrays..
const str = "hola";
const arr = Array.from(str);
console.log(arr); // ["h", "o", "l", "a"]

//keys() -> Devuelve un iterador con los índices.
const arr_1 = ["a", "b", "c"];
for (let key of arr_1.keys()) {
  console.log(key);
}
// 0, 1, 2

// entries() -> Devuelve [índice, valor]
const arr_2 = ["a", "b"];

for (let [itemUno, itemDos] of arr_2.entries()) {
  console.log(itemUno, itemDos);
}
// 0 "a"
// 1 "b"

// ************************MODERNO (INMUTABLE)************************

// with() -> Cambia un elemento por índice sin modificar el original.
const ar = [1, 2, 3];

const nuevo = ar.with(1, 99);

console.log(nuevo); // [1, 99, 3]
console.log(ar);   // [1, 2, 3]


// ************************SPREAD Y REST************************

// Spread ...  -> Expandir elementos.
const arr1 = [1, 2];
const arr2 = [3, 4];

const combinado = [...arr1, ...arr2];

console.log(combinado); // [1,2,3,4]

// También clonar
const copia = [...arr1]; // 1, 2

// Rest ...  -> Agrupar múltiples valores en uno.
function suma(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}

console.log(suma(1, 2, 3)); // 6






