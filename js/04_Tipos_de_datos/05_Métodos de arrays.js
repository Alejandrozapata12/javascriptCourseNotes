// ================ Métodos arrays ================

// push() - Agrega un elemento al final del array
let frutas = ['manzana', 'banana', 'naranja'];
frutas.push('uva');
console.log(frutas); // ['manzana', 'banana', 'naranja', 'uva']

// pop() - Elimina el último elemento del array
frutas.pop();
console.log(frutas); // ['manzana', 'banana', 'naranja']

// shift() - Elimina el primer elemento del array
frutas.shift();
console.log(frutas); // ['banana', 'naranja']

// unshift() - Agrega un elemento al inicio del array
frutas.unshift('fresa');
console.log(frutas); // ['fresa', 'banana', 'naranja']

// indexOf() - Devuelve el índice del primer elemento encontrado
let indice = frutas.indexOf('banana');  
console.log(indice); // 1

// includes() - Verifica si un elemento existe en el array
let existe = frutas.includes('naranja');
console.log(existe); // true

// join() - Une todos los elementos del array en una cadena
let cadena = frutas.join(', ');
console.log(cadena); // 'fresa, banana, naranja'

// slice() - Devuelve una porción del array
let porcion = frutas.slice(1, 3);
console.log(porcion); // ['banana', 'naranja']

// splice() - Agrega o elimina elementos del array
frutas.splice(1, 1, 'kiwi');
console.log(frutas); // ['fresa', 'kiwi', 'naranja']

// sort() - Ordena los elementos del array
frutas.sort();
console.log(frutas); // ['fresa', 'kiwi', 'naranja']

// reverse() - Invierte el orden de los elementos del array
frutas.reverse();
console.log(frutas); // ['naranja', 'kiwi', 'fresa']  

// length - Devuelve la cantidad de elementos en el array
let cantidad = frutas.length;
console.log(cantidad); // 3

// split() - Divide una cadena en un array de subcadenas
let texto = 'manzana,banana,naranja';
let arrayFrutas = texto.split(',');
console.log(arrayFrutas); // ['manzana', 'banana', 'naranja']

// concat() - Combina dos o más arrays
let verduras = ['lechuga', 'tomate'];
let alimentos = frutas.concat(verduras);
console.log(alimentos); // ['naranja', 'kiwi', 'fresa', 'lechuga', 'tomate']

// forEach() - Ejecuta una función para cada elemento del array, esta es una función de orden superior que no devuelve un nuevo array, simplemente itera sobre los elementos del array y ejecuta la función proporcionada para cada uno de ellos.
alimentos.forEach(function(elemento) {
    console.log(elemento); // 'naranja', 'kiwi', 'fresa', 'lechuga', 'tomate'
});

// map() - Crea un nuevo array con los resultados de la función aplicada a cada elemento
let mayusculas = alimentos.map(function(elemento) {
    return elemento.toUpperCase(); // Convierte cada elemento a mayúsculas
});

console.log(mayusculas); // ['NARANJA', 'KIWI', 'FRESA', 'LECHUGA', 'TOMATE']

// filter() - Crea un nuevo array con los elementos que cumplen una condición
let frutasConA = alimentos.filter(function(elemento) {
    return elemento.includes('a');
});

console.log(frutasConA); // ['naranja', 'fresa', 'tomate']

// Otro ejemplo de filter()

const data = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 20 }
];

let filtroEdad = data.filter(item => item.age > 25);
console.log(filtroEdad); // [{ name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 }]


// reduce() - Aplica una función a un acumulador y a cada elemento del array para reducirlo a un solo valor
let concatenado = alimentos.reduce(function(acumulador, elemento) {
    return acumulador + ' ' + elemento; // Concatenar los elementos con un espacio
}, '');

console.log(concatenado.trim()); // 'naranja kiwi fresa lechuga tomate'


// typeof - Devuelve el tipo de dato de una variable
console.log(typeof frutas); // 'object' (los arrays son un tipo de objeto en JavaScript) 

// Array.isArray() - Verifica si una variable es un array
console.log(Array.isArray(frutas)); // true
























