// Clases
/*
En informática, una clase es una plantilla para la creación de objetos de datos según un modelo predefinido. Las clases se utilizan para representar entidades o conceptos, como los sustantivos en el lenguaje. Cada clase es un modelo que define un conjunto de variables —el estado—, y métodos apropiados para operar con dichos datos —el comportamiento—. Las clases son un concepto fundamental en la programación orientada a objetos (OOP) y se utilizan para organizar y estructurar el código de manera eficiente. Permiten crear objetos que comparten características comunes, lo que facilita la reutilización del código y la creación de programas más complejos y mantenibles.
*/

// En la práctica a menudo necesitamos crear muchos objetos del mismo tipo: usuarios, bienes, lo que sea.
// Como vimos anteriormente para ello nos ayudo el new Function(función constructora) , pero es un poco difícil de entender y no es tan fácil de escribir.

/*
Pero en JavaScript moderno hay un constructor más avanzado, “class”, que introduce características nuevas muy útiles para la programación orientada a objetos.
*/

// ===================== Sintaxis básica de las clases =====================
class User{
   // Métodos de la clase
   constructor(){} // Función constructora, se ejecuta automáticamente al crear un nuevo objeto de la clase
   method1(){} // Método de la clase, se puede llamar a través de los objetos creados a partir de la clase
   method2(){} // Método de la clase, se puede llamar a través de los objetos creados a partir de la clase
   method3(){} // Método de la clase, se puede llamar a través de los objetos creados a partir de la clase 
}


// Clase llamada alejo con un constructor que recibe dos parámetros: nombre y edad, y los asigna a las propiedades del objeto creado a partir de la clase.
class Alejo{
    // Contructos con parametros
    constructor(nombre, edad){
      this.nombre = nombre;
      this.edad = edad;
    }

    // Metodo de la clase que devuelve un saludo personalizado utilizando el nombre del objeto creado a partir de la clase.
    data(){
       alert(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    }
}

// Nuevo objeto de acuerdo a la clase alejo, con los parámetros "Alejo" y 30, y se asigna a la variable usuario1.
let usuario1 = new Alejo("Alejandro",24);
console.log(usuario1); // Muestra el objeto usuario1 en la consola, que contiene las propiedades nombre y edad con los valores asignados.
usuario1.data(); // Llama al método data() del objeto usuario1, lo que muestra una alerta con el mensaje "Hola, mi nombre es Alejandro y tengo 24 años".

// Ejemplo con lo que haciamos antes con una función constructora, ahora con clases

function Sistema (nombre, rol){
  this.nombre = nombre;
  this.rol = rol;
}

Sistema.prototype.saludo = function(){
  alert(`Hola, mi nombre es ${this.nombre} y soy un ${this.rol}`);
}

// Ahora con clases

class Sistema2{
  // Constructor con parámetros para inicializar las propiedades del objeto creado a partir de la clase.
  constructor(nombre, rol){
    this.nombre = nombre;
    this.rol = rol;
  }

  // Método de la clase que devuelve un mensaje con el nombre y rol del objeto creado a partir de la clase.
  mostrarInfo(){
    return `Hola, mi nombre es ${this.nombre} y soy un ${this.rol}`;
  }

  // Método de la clase que verifica si el rol del objeto creado a partir de la clase es "Admin" (ignorando mayúsculas y minúsculas) y devuelve true o false en consecuencia.
  isAdmin(){
    return this.rol.toLowerCase() === "admin";
  }
}

// Nuevo objeto de acuerdo a la clase Sistema2, con los parámetros "Maria" y "Admin", y se asigna a la variable usuario2.
let usuario2 = new Sistema2("Maria", "Admin");
console.log(usuario2.mostrarInfo()); // Muestra el mensaje "Hola, mi nombre es Maria y soy un Admin" en la consola.
console.log(usuario2.isAdmin()); // Muestra true en la consola, ya que el rol del usuario es "Admin".


// Una clase es un tipo de función 
class User {
  constructor(name) { this.name = name; }
  sayHi() { alert(this.name); }
}

// La prueba: User es una función
alert(typeof User); // function

 
// ===================== Expresión de clases =====================
/*
Al igual que las funciones, las clases pueden ser definidas dentro de otra expresión, pasadas, devueltas, asignadas, etc.

Aquí hay un ejemplo de una expresión de clase:
*/

let User2 = class {
  sayHi() {
    alert("Hola");
  }
};

new User2().sayHi(); // Hola

/*
En este ejemplo, se define una clase anónima (sin nombre) y se asigna a la variable User2. Luego, se crea una instancia de esa clase y se llama al método sayHi(), que muestra una alerta con el mensaje "Hola". Las expresiones de clase son útiles cuando deseas definir una clase de manera más flexible, como dentro de otra función o como parte de una expresión más compleja.
*/

// ===================== Getters/setters =====================
/*
Al igual que los objetos literales, las clases pueden incluir getters/setters, propiedades calculadas, etc.

Aquí hay un ejemplo de user.name, implementado usando get/set
*/

class User3 {
  constructor(name){
    this._name = name;
  }

  get name(){
    return this._name;
  }

  set name (validador){
    if(validador.length < 4){
      alert("El nombre es muy corto, debe tener al menos 4 caracteres");
      return;
    }
    this._name = validador;
  }
}

let user3 = new User3("Alejo");
alert(user3.name); // Alejo
user3.name = "Al"; // El nombre es muy corto, debe tener al menos 4 caracteres
alert(user3.name); // Alejo (el nombre no se cambió debido a la validación en el setter)

// ===================== Class fields =====================

/*
Las class fields (campos de clase) son una característica de JavaScript que permite definir propiedades directamente dentro de la clase, sin necesidad de usar un constructor para inicializarlas. Esto hace que el código sea más limpio y fácil de leer. Las class fields pueden ser públicas o privadas, y se definen utilizando la sintaxis de asignación dentro de la clase.
Aquí hay un ejemplo de class fields:
*/

class User4 {
  // Campo de clase público, se puede acceder y modificar desde fuera de la clase.
  name = "Alejo";
  // Campo de clase privado, solo se puede acceder y modificar desde dentro de la clase.
  #age = 24;
}

let user4 = new User4();
alert(user4.name); // Alejo
user4.name = "Maria";
alert(user4.name); // Maria
alert(user4.#age); // SyntaxError: Private field '#age' must be declared in an enclosing class


// Ejemplo completo: 

/*
Este lo que hace es crear una clase llamada Clock que tiene un constructor que recibe un objeto con una propiedad template. La clase tiene tres métodos: render(), stop() y start(). El método render() obtiene la hora actual, formatea las horas, minutos y segundos, y luego reemplaza los caracteres 'h', 'm' y 's' en el template con los valores correspondientes. El método stop() detiene el temporizador que se inicia en el método start(), y el método start() llama a render() inmediatamente y luego establece un intervalo para llamar a render() cada segundo. Finalmente, se crea una instancia de la clase Clock con un template de 'h:m:s' y se llama al método start() para iniciar el reloj.
 */

class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}


let clock = new Clock({template: 'h:m:s'});
clock.start();

























