/*
Ordenamiento de Matrices de JavaScript
Array sort() Array reverse() Array toSorted() Array toReversed() Numeric Sort Numeric Sort Random Sort Math.min() Math.max() Home made Min() Home made Max()
*/

// sort()-> Ordena el array en el mismo lugar (MUTA el array original).
const numeros = [100, 25, 3];

numeros.sort();
console.log(numeros); // [100, 25, 3] ❌ (mal orden)

numeros.sort((a, b) => a - b);
console.log(numeros); // [3, 25, 100]

// reverse() -> Invierte el orden del array (también muta el original)
const numeros_2 = [1, 2, 3];

numeros_2.reverse();
console.log(numeros_2); // [3, 2, 1]

// toSorted() -> Igual que sort() pero NO modifica el array original (inmutable).
const numeros_3 = [3, 1, 2];

const ordenado = numeros_3.toSorted((a, b) => a - b);

console.log(ordenado); // [1, 2, 3]
console.log(numeros_3);  // [3, 1, 2] ✅ intacto


// toReversed() -> Igual que reverse(), pero sin modificar el original.
const numeros_4 = [1, 2, 3];

const invertido = numeros_4.toReversed();

console.log(invertido); // [3, 2, 1]
console.log(numeros_4);   // [1, 2, 3] ✅ intacto


// ************* Ordenamiento númerico*************
const  data = [40,500,5,800,4,50];

// 🔹 Ascendente
let ascen = data.sort((a, b) => a - b); // → menor a mayor => 4,5,40,50,500,800

// 🔹 Descendente
let desen = data.sort((a,b) => b - a); // → mayor a menor => 800,500,50,40,5,4

// *************  RANDOM SORT*************
const items = [1, 2, 3, 4, 5];
items.sort(() => Math.random() - 0.5); // 3,5,2,4,1 - cada vez cambia el orden mas random



// Math.min() -> Obtiene el número menor.

const dat = [10, 5, 8];
console.log(Math.min(...dat)); // 5

// Math.max() -> Obtiene el número mayor
console.log(Math.max(...dat)); // 10

