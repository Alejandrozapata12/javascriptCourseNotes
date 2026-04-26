// ============== Herencia de clase ==============

/*
La herencia de clase es el modo para que una clase extienda a otra.
De esta manera podemos añadir nueva funcionalidad a la ya existente.
*/

// La palabra clave “extends”
// Digamos que tenemos una clase llamada “Animal” y queremos crear una nueva clase llamada “Perro” que herede de “Animal”. Para ello, utilizamos la palabra clave “extends”:

class Animal {
   constructor(nombre, speed){
    this.nombre = nombre;
    this.speed = 0;
   }

   run(speed){
    this.speed = speed;
    return `${this.nombre} corre a una velocidad de ${this.speed} km/h.`;
   }
   stop(){
    this.speed = 0;
    return `${this.nombre} se ha detenido.`;
   }
}

let animal = new Animal("Animal", 0);
console.log(animal.run(10)); // Output: "Animal corre a una velocidad de 10 km/h."
console.log(animal.stop()); // Output: "Animal se ha detenido."

/*
…Y nos gustaría crear otra clase Rabbit.
Como los conejos son animales, la clase ‘Rabbit’ debería basarse en ‘Animal’ y así tener acceso a métodos animales, para que los conejos puedan hacer lo que los animales “genéricos” pueden hacer.
La sintaxis para extender otra clase es: class Hijo extends Padre.
Construyamos la clase Rabbit que herede de Animal
*/


class Rabbit extends Animal{
  hide(){
    return `${this.nombre} se ha escondido.`;
  }
}

let rabbit = new Rabbit("Conejo", 0);
console.log(rabbit.run(20)); // Output: "Conejo corre a una velocidad de 20 km/h."
console.log(rabbit.hide()); // Output: "Conejo se ha escondido."

/*
Por ejemplo, para encontrar el método rabbit.run, el motor revisa (en la imagen, de abajo hacia arriba):

El objeto rabbit: no tiene el método run.
Su prototipo, que es Rabbit.prototype: tiene el método hide, pero no el método run.
Su prototipo, que es Animal.prototype (debido a extends): Este finalmente tiene el método run.
 */


// ============== Sobrescribir un método ==============

/*
Ahora avancemos y sobrescribamos un método. Por defecto, todos los métodos que no están especificados en la clase Rabbit se toman directamente “tal cual” de la clase Animal.
Pero Si especificamos nuestro propio método stop() en Rabbit, es el que se utilizará en su lugar
*/

class Rabbit extends Animal {
  stop() {
    // ...esto se usará para rabbit.stop()
    // en lugar de stop() de la clase Animal
  }
}

/*
Sin embargo, no siempre queremos reemplazar totalmente un método padre sino construir sobre él, modificarlo o ampliar su funcionalidad. Hacemos algo con nuestro método, pero queremos llamar al método padre antes, después o durante el proceso.

Las clases proporcionan la palabra clave "super" para eso.

super.metodo(...) llama un método padre.
super(...) llama un constructor padre (solo dentro de nuestro constructor).
Por ejemplo, hagamos que nuestro conejo se oculte automáticamente cuando se detenga
*/

class Rabbit extends Animal {
  hide() {
    return `${this.nombre} se ha escondido.`;
  }

  stop() {
    super.stop();
    this.hide();
 }
}

let rabbit2 = new Rabbit("Conejo", 0);
console.log(rabbit2.run(20)); // Output: "Conejo corre a una velocidad de 20 km/h."
console.log(rabbit2.stop()); // Output: "Conejo se ha detenido. Conejo se ha escondido."


// ============== Sobrescribir un constructor ==============

/*
Con los constructores se pone un poco complicado.
Hasta ahora, Rabbit no tenía su propio constructor.
De acuerdo con la especificación, si una clase extiende otra clase y no tiene constructor, se genera el siguiente constructor “vacío”
*/

class Rabbit extends Animal {
  // es generado por extender la clase sin constructor propio
  constructor(...args) {
    super(...args);
  }
}

/*
Como podemos ver, básicamente llama al constructor padre pasándole todos los argumentos. Esto sucede si no escribimos un constructor propio.
Ahora agreguemos un constructor personalizado a Rabbit. Especificará earLength además de name
*/

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  // ...
}

class Rabbit extends Animal {

  constructor(name, earLength) {
    this.speed = 0;
    this.name = name;
    this.earLength = earLength;
  }

  // ...
}

// No funciona!
let rabbit = new Rabbit("Conejo Blanco", 10); // Error: this no está definido.

/*
La respuesta corta es:
Los constructores en las clases heredadas deben llamar a super(...), y (¡!) hacerlo antes de usar this.
*/

class Perro extends Animal {
  constructor(name, raza){
    super(name); // Llamamos al constructor padre con el argumento name
    this.raza = raza; // Ahora podemos usar this para asignar la propiedad raza
  }
}

// Ejemplo real

class Usuario {
  constructor(nombre){
    this.nombre = nombre;
  }

  login(){
    return `${this.nombre} ha iniciado sesión.`;
  }
}

class Admin extends Usuario {
  constructor(nombre, nivel){
    super(nombre);
    this.nivel = nivel;
  }
  deleteUser(user){
    return `${this.nombre} ha eliminado al usuario ${user.nombre}.`;
  }
}

class Cliente extends Usuario {
  constructor(nombre, email){
    super(nombre);
    this.email = email;
  }
  purchase(item){
    return `${this.nombre} ha comprado ${item}.`;
  }
}

let admin = new Admin("Admin1", "Alto");
console.log(admin.login()); // Output: "Admin1 ha iniciado sesión."
console.log(admin.deleteUser(new Usuario("Usuario1"))); // Output: "Admin1 ha eliminado al usuario Usuario1."

let cliente = new Cliente("Cliente1", "cliente1@example.com");
console.log(cliente.login()); // Output: "Cliente1 ha iniciado sesión."
console.log(cliente.purchase("Producto A")); // Output: "Cliente1 ha comprado Producto A."  






































