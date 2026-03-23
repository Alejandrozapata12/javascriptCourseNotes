/*
Funciones constructoras de objetos
A veces necesitamos crear muchos objetos del mismo tipo.
Para crear un tipo de objeto usamos una función constructora de objetos.
Se considera buena práctica nombrar funciones constructoras con una letra mayúscula.
*/


// Función constructora para objetos Persona
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Crear un objeto persona con los criterios del constructor
const myFather = new Person("John", "Doe", 50, "blue");

// Ahora podemos usar para crear muchos objetos nuevos de Persona.
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");
const mySelf = new Person("Johnny", "Rally", 22, "green");

/*
Valores predeterminados de propiedades
Un valor dado a una propiedad será un valor por defecto para todos los objetos Creado por el constructor
*/

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English";
}

// Ejemplo de creación de objetos a raiz del constructor  - My father is English. My mother is English
const myFather_2 = new Person("John", "Doe", 50, "blue"); 
const myMother_2 = new Person("Sally", "Rally", 48, "green");

/*
Añadir una propiedad a un objeto
Añadir una propiedad a un objeto creado es sencillo:
*/

// Constructor function for Person objects
function Person_2(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Create 2 Person objects
const myFather_3 = new Person_2("John", "Doe", 50, "blue");
const myMother_3 = new Person_2("Sally", "Rally", 48, "green");

// Add nationality to first object
myFather_3.nationality = "English";


// Añadir una propiedad a un constructor
// NO puedes añadir una nueva propiedad a un constructor de objetos

// Will Not Work
Person.nationality = "English";

// Para añadir una nueva propiedad, debes añadirla al prototipo de la función constructora
Person.prototype.nationality = "English";


// Métodos de función constructora
// Una función constructora también puede tener métodos

function Persn(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.fullName = function() {
    return this.firstName + " " + this.lastName;
  };
}

// Crear un objeto Persn
const me = new Persn("Alejandro","Zapata",24, "Coffe");


// Utilizar el método creado en el constructor para mostrar la info del objeto 
let show = me.fullName(); // Alejandro Zapata


// Añadir un método a un objeto ya creado: 
/*
Tomamos el objeto creado llamado "me" posteriormente creamos el método el cual llamamos en esta ocación "changeAge", creamos la función del método el cual toma 1 parametro que es la nuevaEdad, ya en el codigo a ejecutar, llamamos la propiedad del objeto con this.age y le asignamos el nuevo valor de la nuevaEdad.
*/
me.changeAge = function(nuevaEdad){
   this.age = nuevaEdad;
}

// Llamamos la función/método y le asignamos la nueva edad. 
me.changeAge(25);

let mostrar = me.age; // Ya al momento de mostrar la propiedad age me arroja 25 mas no 24 que era el valor anterior. 


// Añadir un método a un constructor - No puedes añadir un método nuevo a una función constructora de objetos. Añadir un nuevo método a un constructor debe hacerse en el prototipo de la función constructor

Person.prototype.changeName = function (name) {
  this.lastName = name;
}

myMother.changeName("Doe");








