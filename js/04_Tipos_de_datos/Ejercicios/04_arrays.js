// ¿El array es copiado? 

let fruits = ["Apples", "Pear", "Orange"];

// introduce un valor nuevo dentro de una copia
let shoppingCart = fruits;
shoppingCart.push("Banana");

// ¿Qué hay en "fruits"?
alert( fruits.length ); // 4, el valor se ha añadido también a fruits, porque shoppingCart no es una copia de fruits, sino que ambos variables apuntan al mismo array.

// Copiar un array
let fruits2 = ["Apples", "Pear", "Orange"]; 
let shoppingCart2 = fruits2.slice(); // slice() sin argumentos devuelve una copia del array completo
shoppingCart2.push("Banana");

// ¿Qué hay en "fruits2"?
alert( fruits2.length ); // 3, el valor se ha añadido solo a shoppingCart2, porque shoppingCart2 es una copia de fruits2, no una referencia al mismo array. 

/*
Operaciones en arrays.
Tratemos 5 operaciones de array.

Crear un array styles con los items “Jazz” y “Blues”.
Agregar “Rock-n-Roll” al final.
Reemplazar el valor en el medio por “Classics”. Tu código para encontrar el valor medio debe funcionar con cualquier array de longitud impar.
Quitar el primer valor del array y mostrarlo.
Anteponer Rap y Reggae al array.
El array durante el proceso:

Jazz, Blues
Jazz, Blues, Rock-n-Roll
Jazz, Classics, Rock-n-Roll
Classics, Rock-n-Roll
Rap, Reggae, Classics, Rock-n-Roll
*/

const styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor(styles.length / 2)] = "Classics";
console.log(styles.shift());
styles.unshift("Rap", "Reggae");
console.log(styles); // Imprime: ["Rap", "Reggae", "Classics", "Rock-n-Roll"]


// Suma de números ingresados
/*
Escribe una función sumInput() que:

Pida al usuario valores usando prompt y los almacene en el array.
Termine de pedirlos cuando el usuario ingrese un valor no numérico, una cadena vacía, o presione “Escape”.
Calcule y devuelva la suma de los items del array.
P.D. Un cero 0 es un número válido, por favor no detengas los ingresos con el cero.
*/

function sumInput() {
   let numbers = [];

   while (true) {
      let value = prompt("Ingresa un número (o presiona Cancelar para terminar):", "");
      if (value === null || value === "" || isNaN(value)) {
         break;
      }
      numbers.push(Number(value));
    }
}

