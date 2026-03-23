// ¿Como mostrar objetos en JS? - Mostrar un objeto JavaScript generará [objeto Objeto].

// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

let text = person; // resultado =  [object Object] 

/*
[Objeto Objeto] aparece cuando intentas poner un objeto (una estructura de datos con propiedades) en un contexto donde se espera una cadena.

[Objeto Objeto] cómo JavaScript maneja esta situación.

Algunas soluciones para mostrar objetos JavaScript son:

Mostrar las propiedades del objeto por nombre
Mostrar las propiedades del objeto en un bucle
Mostrar el objeto usando Object.values()
Mostrar el objeto usando JSON.stringify()
*/

// Visualización de propiedades del objeto. Las propiedades de un objeto pueden añadirse en una cadena:

// Ejemplo
// Create an Object
const person_1 = {
  name: "John",
  age: 30,
  city: "New York"
};

// Add Properties
let text_1 = person.name + "," + person.age + "," + person.city;


// Usando un for in loop

// Create an Object
const person_2 = {
  name: "John",
  age: 30,
  city: "New York"
};

// Build a Text
let text_2 = "";
for (let x in person_2) {
  text_2 += person_2[x] + " ";
};

// Usando Object.values() - crea un array a partir de los valores de propiedad

// Create an Object
const person_3 = {
  name: "John",
  age: 30,
  city: "New York"
};

// Create an Array
const myArray = Object.values(person_3);

// Stringify the Array
let text_3 = myArray.toString(); // John,30,New York


// Usando Object.entrries() - Facilita el uso de objetos en bucles

const fruits = {Bananas:300, Oranges:200, Apples:500};

let tex= "";
for (let [fruit, value] of Object.entries(fruits)) {
  tex += fruit + ": " + value + "<br>";
}

// Usando JSON.stringify() - Los objetos JavaScript pueden convertirse en una cadena con el método JSON .

/*
El resultado será una cadena escrita en notación JSON:
{"nombre":"John", "edad":50,"ciudad":"Nueva York"}
*/

// Create an Object
const pers = {
  name: "John",
  age: 30,
  city: "New York"
};

// Stringify Object
let tet = JSON.stringify(pers); // {"name":"John","age":30,"city":"New York"}


