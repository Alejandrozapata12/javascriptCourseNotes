// Arrays

// Un array es una estructura de datos que puede contener múltiples valores.

// Declaración Hay dos sintaxis para crear un array vacío:

const miArray1 = new Array(); // Usando el constructor Array para crear un array vacío, esta forma es menos común y no se recomienda para crear arrays vacíos.
const miArray = []; // Array vacío
const numeros = [1, 2, 3, 4, 5]; // Array con números
const frutas = ['manzana', 'banana', 'naranja']; // Array con strings 

// Acceso a elementos
console.log(numeros[0]); // Imprime: 1
console.log(frutas[1]); // Imprime: banana    


// Modificación de elementos
numeros[2] = 10;
console.log(numeros[2]); // Imprime: 10 

// Length de un array
console.log(numeros.length); // Imprime: 5

// Un array puede almacenar elementos de cualquier tipo.
const mixto = [1, 'hola', true, null, undefined, { nombre: 'Juan' }, [1, 2, 3]];
console.log(mixto); // Imprime: [1, 'hola', true, null, undefined, { nombre: 'Juan' }, [1, 2, 3]]


// Métodos de arrays
numeros.push(6); // Agrega un elemento al final del array
console.log(numeros); // Imprime: [1, 2, 10, 4, 5, 6] 
numeros.pop(); // Elimina el último elemento del array
console.log(numeros); // Imprime: [1, 2, 10, 4, 5]
numeros.shift(); // Elimina el primer elemento del array
console.log(numeros); // Imprime: [2, 10, 4, 5]
numeros.unshift(0); // Agrega un elemento al inicio del array
console.log(numeros); // Imprime: [0, 2, 10, 4, 5]
numeros.splice(1, 2); // Elimina elementos a partir del índice 1, eliminando 2 elementos
console.log(numeros); // Imprime: [0, 4, 5]


// Bucles en arrays
for (let i = 0; i < frutas.length; i++) { // En este bucle, se itera desde 0 hasta la longitud del array de frutas, accediendo a cada elemento mediante su índice.
    console.log(frutas[i]); // Imprime cada fruta en el array
}

for (const fruta of frutas) { // En este bucle, se utiliza la sintaxis "for...of" para iterar directamente sobre los elementos del array de frutas, asignando cada fruta a la variable "fruta" en cada iteración. Alli en otras palabras dice que por cada fruta en el array de frutas, se ejecutará el bloque de código dentro del bucle, imprimiendo cada fruta en la consola.
    console.log(fruta); // Imprime cada fruta en el array
}   

// Tecnicamente los arrays tambien son objetos por ende se puede usar tambien for in para iterar sobre las propiedades del array, aunque no es tan común como los otros métodos de iteración, sin embargo, es mala práctica usar "for...in" para iterar sobre arrays, ya que este bucle está diseñado para iterar sobre las propiedades enumerables de un objeto, y no garantiza el orden de los elementos en un array. Además, si se agregan propiedades personalizadas al array, estas también serán iteradas, lo que puede causar resultados inesperados. Por lo tanto, es recomendable utilizar "for...of" o un bucle tradicional "for" para iterar sobre arrays en lugar de "for...in".
for (const index in frutas) { // En este bucle, se utiliza la sintaxis "for...in" para iterar sobre los índices del array de frutas, asignando cada índice a la variable "index" en cada iteración. Luego, se accede al elemento correspondiente utilizando el índice.
    console.log(frutas[index]); // Imprime cada fruta en el array
}

// new Array() 
const arrayVacio = new Array(); // Crea un array vacío
console.log(arrayVacio); // Imprime: []
const arrayConTamaño = new Array(5); // Crea un array con 5 elementos vacíos
console.log(arrayConTamaño); // Imprime: [ <5 empty items> ]
const arrayConElementos = new Array(1, 2, 3); // Crea un array con los elementos 1, 2 y 3
console.log(arrayConElementos); // Imprime: [1, 2, 3]

// Arrays multidimensionales
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matriz[0][1]); // Imprime: 2 (accede al elemento en la primera fila, segunda columna)



// toString 
const numerosString = numeros.toString(); // Convierte el array de números a una cadena de texto
console.log(numerosString); // Imprime: "0,4,5"







































