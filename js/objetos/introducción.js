/*
Los objetos son variables que pueden almacenar tanto valores como funciones.
Los valores se almacenan como pares clave:valor llamados propiedades.
Las funciones se almacenan como pares clave:función() llamados métodos.
*/

/*
Ejemplo: 

Objeto:  Auto
Propiedades = Diferentes coches tienen las mismas propiedades, pero los valores de las propiedades pueden variar de un coche a otro.
Métodos = Diferentes coches tienen los mismos métodos, pero los métodos pueden realizarse en distintos momentos.

*/

const auto = {
    tipo: "Fiat",
    modelo: 500,
    color: "White"
};

// Objeto literal = Un objeto literal describe "literalmente" un objeto usando una sintaxis concisa con pares clave:valor cero o más dentro de llaves curados para describir todas las propiedades del objeto:

const person_1 = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// Los espacios y los saltos de línea no son importantes. Un literal de objeto puede abarcar varias líneas:

const person_2 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// También puedes crear un objeto vacío y añadir las propiedades más adelante:

const person = {};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";


// Propiedades de los objetos

/*
Puedes acceder a las propiedades de los objetos de dos maneras:

Notación de puntos
Notación entre corchetes

*/

objectName.propertyName

person.firstName;

// Notación entre corchetes
objectName["propertyName"]
person["firstName"];

// Métodos de objetos JavaScript

/*
Los objetos también pueden tener métodos.
Los métodos de objeto son acciones que pueden realizarse sobre objetos.
Los métodos objeto son definiciones de funciones almacenadas como valores de propiedades:
*/

const person_4 = {
  firstName: "John",
  lastName : "Doe",
  age      : 50,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};


