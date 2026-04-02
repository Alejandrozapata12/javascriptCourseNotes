/*
Alcance = Visibilidad
El alcance determina la accesibilidad (visibilidad) de las variables.

Las variables JavaScript tienen 3 tipos de alcance:

Alcance global
Ámbito de la función
Alcance de bloques
*/

// *********Alcance global = Las variables declaradas Globalmente (fuera de cualquier bloque o función) tienen Alcance Global. Las variables globales pueden accederse desde cualquier lugar en un programa JavaScript. Las variables declaradas con , y son bastante similar cuando se declara fuera de una manzana.varletconst    .Todos tienen un alcance global:

var x = 1;    // Global scope

let y = 2;    // Global scope

const z = 3;  // Global scope

// Una variable declarada fuera de una función se convierte en GLOBAL.

let carName = "Volvo";
// code here can use carName

function myFunction() {
// code here can also use carName
}




// ********* Ámbito de la función = Cada función JavaScript tiene su propio alcance. Las variables definidas dentro de una función no son accesibles (visibles) desde fuera de la funcional.

function myFunction1() {
  var carName = "Volvo";  // Function Scope
}

function myFunction2() {
  let carName = "Volvo";  // Function Scope
}

function myFunction3() {
  const carName = "Volvo";  // Function Scope
}

// Las variables declaradas dentro de una función JavaScript son LOCALES a la función:

// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName



// ********* Alcance de bloques = 
/*
Alcance de bloques
Antes de ES6, las variables JavaScript solo podían tener Alcance Global o Alcance de Función.
ES6 introdujo dos importantes nuevas palabras clave en JavaScript: y .let const

Estas dos palabras clave proporcionan Alcance de Bloque en JavaScript.

Las variables declaradas con y dentro de un bloque de código son "con alcance por bloque", es decir, solo son accesibles dentro de ese bloque.letconst
*/


// Ejemplo
{
  let x = 2;
}
// x can NOT be used here



