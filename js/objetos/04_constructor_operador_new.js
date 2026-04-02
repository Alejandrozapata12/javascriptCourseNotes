/*
El sintaxis habitual {...} nos permite crear un objeto. Pero a menudo necesitamos crear varios objetos similares, como múltiples usuarios, elementos de menú, etcétera.

Esto se puede realizar utilizando el constructor de funciones y el operador "new".
*/

// Función constructora => La función constructora es técnicamente una función normal. Aunque hay dos convenciones: Son nombradas con la primera letra mayúscula. Sólo deben ejecutarse con el operador "new".

// Ejemplo:

// Funcción constructora
function User(name){
    this.name =  name;
    this.isAdmin = true;
}

// Creación de un objeto apartir del constructor definido
let persona1 = new User("Alejandro");

// Impresión de las propiedades según la información introduccida
console.log(persona1.name); // "Alejandro"
console.log(persona1.isAdmin); // true

/*
Cuando una función es ejecutada con new, realiza los siguientes pasos:

Se crea un nuevo objeto vacío y se asigna a this.
Se ejecuta el cuerpo de la función. Normalmente se modifica this y se le agrega nuevas propiedades.
Se devuelve el valor de this.
En otras palabras, new User(...) realiza algo como:
*/

function Usr(name) {
  // this = {};  (implícitamente)

  // agrega propiedades a this
  this.name = name;
  this.isAdmin = false;

  // return this;  (implícitamente)
}


// ========================= Constructor modo test: new.target=========================
/*
Dentro de una función, podemos verificar si ha sido llamada con o sin el new utilizando una propiedad especial: new.target.
En las llamadas normales devuelve undefined, y cuando es llamada con new devuelve la función:
*/

function Data(){
   alert(new.target);
}

// sin  "new":
Data(); // undefined

// con  "new":
new Data(); // function Data { ... }


/*
Esto puede ser utilizado dentro de la función para conocer si ha sido llamada con new, "en modo constructor "; o sin él, “en modo regular”.
También podemos hacer que ambas formas de llamarla, con new y “regular”, realicen lo mismo
*/

function User(name) {
  if (!new.target) { // si me ejecutas sin new
    return new User(name); // ...Agregaré new por ti
  }

  this.name = name;
}

let john = User("John"); // redirige llamado a new User
alert(john.name); // John

// ========================= Return desde constructores=========================
/*
Normalmente, los constructores no tienen una sentencia return. Su tarea es escribir todo lo necesario al this, y automáticamente este se convierte en el resultado.
Pero si hay una sentencia return, entonces la regla es simple:
Si return es llamado con un objeto, entonces se devuelve tal objeto en vez de this.
Si return es llamado con un tipo de dato primitivo, es ignorado.
En otras palabras, return con un objeto devuelve ese objeto, en todos los demás casos se devuelve this.
Por ejemplo, aquí return anula this al devolver un objeto
*/


function BigUser() {

  this.name = "John";

  return { name: "Godzilla" };  // <-- devuelve este objeto
}

alert( new BigUser().name );  // Godzilla, recibió ese objeto


// Y aquí un ejemplo con un return vacío (o podemos colocar un primitivo después de él, no importa):
function SmallUser() {

  this.name = "John";

  return; // <-- devuelve this
}

alert( new SmallUser().name );  // John


// =========================  Métodos en constructor =========================

/*
Utilizar constructor de funciones para crear objetos nos da mucha flexibilidad. La función constructor puede tener argumentos que definan cómo construir el objeto y qué colocar dentro.

Por supuesto podemos agregar a this no sólo propiedades, sino también métodos.

Por ejemplo, new User(name) de abajo, crea un objeto con el name dado y el método sayHi
*/

function Usuario(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "Mi nombre es: " + this.name );
  };
}

let alejo = new Usuario("Alejandro");

john.sayHi(); // Mi nombre es: Alejandro

// Para crear objetos complejos existe una sintaxis más avanzada, classes. 










