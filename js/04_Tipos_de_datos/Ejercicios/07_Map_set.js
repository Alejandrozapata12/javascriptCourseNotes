/*
Filtrar miembros únicos del array

Digamos que arr es un array.

Cree una función unique(arr) que debería devolver un array con elementos únicos de arr.

Por ejemplo:

function unique(arr) {
   tu código 
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare, Krishna, :-O
P.D. Aquí se usan strings, pero pueden ser valores de cualquier tipo.

P.D.S. Use Set para almacenar valores únicos.
*/


function unique(arr) {
  return Array.from(new Set(arr)); // La función unique toma un array como argumento y devuelve un nuevo array que contiene solo los elementos únicos del array original. Para lograr esto, se crea un nuevo Set a partir del array, lo que automáticamente elimina los elementos duplicados, ya que un Set solo puede contener valores únicos. Luego, se utiliza Array.from() para convertir el Set de nuevo a un array, que es el resultado final de la función.
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log(unique(values)); // Imprime ['Hare', 'Krishna', ':-O'], la función unique utiliza un Set para eliminar los elementos duplicados del array original y luego convierte el Set de nuevo a un array utilizando Array.from() para devolver un array con elementos únicos.



