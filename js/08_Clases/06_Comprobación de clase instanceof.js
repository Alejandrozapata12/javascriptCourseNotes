// Comprobación de clase: "instanceof"

/*
instanceof responde a esta pregunta:

👉 “¿Este objeto fue creado por esta clase (o alguna que herede de ella)?”
 */


obj instanceof Clase // Devuelve true o false

class User {}

let u = new User();
console.log(u instanceof User); // True

/*
instanceof NO mira la clase directamente
👉 mira la cadena de prototipos
*/


// Herencia
class Animal {}
class Perro extends Animal {}

const dog = new Perro();

console.log(dog instanceof Perro);  // true
console.log(dog instanceof Animal); // true




























