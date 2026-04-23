// Closure

// Bloques de código 
/*
Estas variables solo existen dentro del bloque de código donde fueron declaradas, por lo que no pueden ser accedidas desde fuera de ese bloque. Esto se aplica a estructuras como funciones, bucles, condicionales, etc.
*/

// Si una variable se declara dentro de un bloque de código {...}, solo es visible dentro de ese bloque.

{
  // hacer un trabajo con variables locales que no deberían verse fuera
  let message = "Hello"; // solo visible en este bloque
  alert(message); // Hello
}

alert(message); // Error: el mensaje no se ha definido (undefined)

// Otro ejemplo:

function sayHi() {
  let name = "John"; // name es una variable local de la función sayHi
  alert("Hi, " + name); // Hi, John
}
sayHi();
alert(name); // Error: name no está definida (undefined)


// Funciones anidadas y closures

// Las funciones anidadas pueden acceder a las variables de su función padre, incluso después de que la función padre haya terminado de ejecutarse. Esto se conoce como "closure" (cierre). Una función se llama “anidada” cuando se crea dentro de otra función.

function makeCounter() {
  let count = 0; // count es una variable local de makeCounter
  return function() { // esta función es un closure que tiene acceso a count
    return count++; // devuelve el valor actual de count y luego lo incrementa
  }
}

let counter = makeCounter();
alert(counter()); // 0
alert(counter()); // 1
alert(counter()); // 2  


// Otro Ejemplo:

function sayHiBye(firstName, lastName){

   function getFullName(){
     return firstName + " " + lastName;
   }

    console.log("Hi," + getFullName());
    console.log("Bye," + getFullName());
}

sayHiBye("John", "Smith"); // Hi, John Smith \n Bye, John Smith

/*
Aquí la función anidada getFullName() se hace por conveniencia. Puede acceder a las variables externas y, por lo tanto, puede devolver el nombre completo. Las funciones anidadas son bastante comunes en JavaScript.

Lo que es mucho más interesante, es que puede devolverse una función anidada: ya sea como propiedad de un nuevo objeto o como resultado en sí mismo. Luego se puede usar en otro lugar. No importa dónde, todavía tiene acceso a las mismas variables externas.
*/

// Ambito o alcance lexico

// El ámbito léxico significa que la función se ejecuta con el ámbito de su declaración, no con el ámbito de su ejecución. En otras palabras, una función siempre tiene acceso a las variables de su entorno externo, incluso si se ejecuta en un contexto diferente.

// Paso 1. Variables
/*
En JavaScript, todas las funciones en ejecución, el bloque de código {...} y el script en su conjunto tienen un objeto interno (oculto) asociado, conocido como Alcance léxico.
*/

// Ejemplo de alcance léxico:

function f() {
  let value = "test";
  console.log(value);
}
f(); // test
console.log(value); // Error: value no está definida (undefined)

// Paso 2. Declaración de funciones

function createFunc() {
  let name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}
let myFunc = createFunc();
myFunc(); // Mozilla



function makeCountPls(){
  let count = 0;

  return function(){
    count++;
    return count
  };
}

let countfn = makeCountPls();

console.log(countfn()); // 1
console.log(countfn()); // 2
console.log(countfn()); // 3


/*
¿Qué está pasando aquí?
makeCounter() se ejecuta y crea la variable count = 0.
Devuelve una función anónima que tiene acceso a count.
Aunque makeCounter ya terminó, la función devuelta sigue recordando la variable count gracias al closure.
Cada vez que llamas a countfn(), incrementa el mismo count. Esto demuestra cómo las funciones pueden "cerrar" sobre su entorno léxico, lo que les permite mantener el estado entre llamadas. Este es un concepto fundamental en JavaScript y se utiliza ampliamente para crear funciones con estado, como contadores, manejadores de eventos, etc.
*/























