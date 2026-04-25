// F.prototype

/*
Recuerde: se pueden crear nuevos objetos con una función constructora, como new F().

Si F.prototype es un objeto, entonces el operador new lo usa para establecerlo como [[Prototype]] en el nuevo objeto.
 */

function Empleado(nombre, rol){
  this.nombre = nombre;
  this.rol = rol;
}

Empleado.prototype.saludar = function(){
     return `Hola, soy ${this.nombre} y soy ${this.rol} de esta compañia`;
};

Empleado.prototype.esAdmin = function(){
  return this.rol === 'admin';
};

let persona1 = new Empleado("Alejandro", "Empleado"); 
let persona2 = new Empleado("Maria", "admin");

console.log(persona1.saludar()); // Hola, soy Alejandro y soy Empleado de esta compañia
console.log(persona2.saludar()); // Hola, soy Maria y soy admin de esta compañia
console.log(persona1.esAdmin()); // false
console.log(persona2.esAdmin()); // true



























































