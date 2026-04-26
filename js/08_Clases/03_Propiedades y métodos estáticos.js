// Propiedades y métodos estáticos.

const { useTransition } = require("react");

/*
static significa:
Esto pertenece a la clase, no a las instancias
 */

class User{
  constructor(name){
    this.name = name;
  }
   static saludo(){ // Método estático.
    return "Hola desde el remoto";
   }
}

// Uso correcto
console.log(User.saludo()); // "Hola desde el remoto"

// Uso incorrecto
const user1 = new User("Alice");
console.log(user1.saludo()); // Error: user1.saludo is not a function

// Esto porque los metodos estaticos no viven en los objetos creados por la clase, sino en la clase misma. Por eso se accede a ellos directamente desde la clase, no desde las instancias.



// ¿Que hace realmente este ejemplo?
/*
1. Creamos la clase User con un constructor que asigna el nombre a la instancia.
2. Definimos un método estático saludo() que devuelve un mensaje de saludo.
3. Este método no se puede llamar desde una instancia de User, sino directamente desde la clase User.saludo().
4. Si intentamos llamar user1.saludo(), obtendremos un error porque saludo() no es un método de la instancia, sino de la clase.

 */

/*
¿Para que sirve esto?

Para lógica que no depende de un objeto específico

*/

// Ejemplo real

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  static comparar(p1, p2) {
    return p1.precio - p2.precio;
  }
}

const productos = [
  new Producto("A", 200),
  new Producto("B", 100)
];

productos.sort(Producto.comparar);
console.log(productos); // Ordenados por precio: B, A 


// Ejemplo 2

class User1 {
  static metodoStatico(){
    console.log(this.User1); // Esto se refiere a la clase User1
  }
}

User1.metodoStatico(); // Imprime la clase User1 (true)

// Ahora bien si intentamos acceder a this.User1 desde una instancia, no funcionará:
const user2 = new User1();
user2.metodoStatico(); // Error: user2.metodoStatico is not a function

// El ejemplo anterior es lo mismo que 

class User {
  User.metodEstatico = function(){
    console.log(this.User2); // Esto se refiere a la clase User2
  }
}

User.metodEstatico(); // Imprime la clase User2 (true)

// En resumen, los métodos estáticos son útiles para funciones que no necesitan acceder a datos de instancias específicas, sino que operan a nivel de clase.

/*
El valor de this en la llamada User.staticMethod() es el mismo constructor de clase User (la regla “objeto antes de punto”).

Por lo general, los métodos estáticos se utilizan para implementar funciones que pertenecen a la clase como un todo, no a un objeto particular de la misma.
*/

// Ejemplo 3

class Articulo {
  constructor(nombre, fecha){ // El constructor no es estático, es un método de instancia.
    this.nombre = nombre; 
    this.fecha = fecha;
  }

  static comparar (articuloA, articuloB){ // Método estático para comparar dos artículos por fecha.
    return articuloA.fecha - articuloB.fecha;
  }
}

const articulos = [
  new Articulo("HTML", new Date(2026,4,25)),
  new Articulo("CSS", new Date(2025,3,20)),
  new Articulo("JS", new Date(2024,2,15))
];
articulos.sort(Articulo.comparar); // Ordenamos los artículos por fecha utilizando el método estático comparar de la clase Articulo.
console.log(articulos); // Ordenados por fecha: JS, CSS, HTML
console.log(articulos[0].fecha); // Fecha del artículo más antiguo: 2024-02-15T00:00:00.000Z


// ================ Propiedades estáticas ================

/*
Las propiedades estáticas también son posibles, se ven como propiedades de clase regular, pero precedidas por static:

*/

class Article {
  static publisher = "Ilya Kantor";
}

alert( Article.publisher ); // Ilya Kantor


// Eso es lo mismo que una asignación directa a Article
Article.publisher = "Ilya Kantor";


// ================ Herencia de propiedades y métodos estáticos ================
/* Las propiedades y métodos estáticos son heredados.
 Por ejemplo, Animal.compare y Animal.planet en el siguiente código son heredados y accesibles como Rabbit.compare y Rabbit.planet:
*/

class Animal {
  static planet = "Tierra";
  constructor(name, speed) {
    this.speed = speed;
    this.name = name;
  }

  run(speed = 0) {
    this.speed += speed;
    alert(`${this.name} corre a una velocidad de ${this.speed}.`);
  }

  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed;
  }

}

// Hereda de Animal
class Rabbit extends Animal {
  hide() {
    alert(`${this.name} se esconde!`);
  }
}

let rabbits = [
  new Rabbit("Conejo Blanco", 10),
  new Rabbit("Conejo Negro", 5)
];

rabbits.sort(Rabbit.compare);

rabbits[0].run(); // Conejo Negro corre a una velocidad de 5.

alert(Rabbit.planet); // Tierra



































