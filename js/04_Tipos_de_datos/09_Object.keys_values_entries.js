// Object.keys, values, entries

/*
En el capítulo anterior vimos métodos map.keys(), map.values(), map.entries().

Estos métodos son genéricos, existe un acuerdo común para usarlos para estructuras de datos. Si alguna vez creamos una estructura de datos propia, también deberíamos implementarla.

Son compatibles para:

Map
Set
Array
Los objetos simples también admiten métodos similares, pero la sintaxis es un poco diferente.

Object.keys, values, entries
Para objetos simples, los siguientes métodos están disponibles:

Object.keys(obj) – devuelve un array de propiedades.
Object.values(obj) – devuelve un array de valores.
Object.entries(obj) – devuelve un array de pares [propiedad, valor].
 */


let user = {
    name: "John",
    age: 30
};

console.log(Object.keys(user)); // ["name", "age"]
console.log(Object.values(user)); // ["John", 30]
console.log(Object.entries(user)); // [["name", "John"], ["age", 30]]


/*
Ejercicio: 

Suma las propiedades
importancia: 5
Hay un objeto salaries con un número arbitrario de salarios.

Escriba la función sumSalaries(salaries) que devuelva la suma de todos los salarios utilizando Object.values y el bucle for..of.

Si salaries está vacío, entonces el resultado debe ser 0.

Por ejemplo:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650

*/

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries(salaries) {
    let sum = 0;

    for (let salary of Object.values(salaries)) {
        sum += salary;
    }

    return sum;

}

alert( sumSalaries(salaries) ); // 650


// Contador de propiedades
let data = {
  "Alejandro" : 400,
  age: 24
};

function countProperties(obj) {
    return Object.keys(obj).length;
}

alert( countProperties(data) ); // 2




















