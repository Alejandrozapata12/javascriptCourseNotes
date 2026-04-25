// Herencia prototípica

/*
En JavaScript, los objetos pueden heredar propiedades de otros objetos mediante algo llamado prototipo.

👉 Cada objeto tiene un enlace interno llamado [[Prototype]] que apunta a otro objeto
 */

// Ejemplo de herencia prototípica
// Creamos un objeto prototipo
const animal = {
  tipo: 'Animal',
  comer() {
    console.log(`${this.tipo} está comiendo.`);
  }
};

// Creamos un nuevo objeto que hereda del prototipo 'animal'
const perro = Object.create(animal);
perro.tipo = 'Perro'; // Sobrescribimos la propiedad 'tipo' para el objeto 'perro'
perro.ladrar = function() {
  console.log(`${this.tipo} está ladrando.`);
}

// Caso real 

const user = {
  login(){
    console.log('Usuario ha iniciado sesión');
  }
};

const admin = {
   deleteUser(){
    console.log('Usuario ha sido eliminado');
   },
   _proto_:user
};

admin.login(); // Usuario ha iniciado sesión
admin.deleteUser(); // Usuario ha sido eliminado


// Sistema de roles

const role = {
   login(){
    return 'Usuario ha iniciado sesión';
   }
};

const empleado = Object.create(role);
empleado.role = "Empleado";

const administrador = Object.create(role);
administrador.deleteUser = function() {
  return 'Usuario ha sido eliminado';
}

console.log(empleado.login()); // Usuario ha iniciado sesión
console.log(administrador.login()); // Usuario ha iniciado sesión
console.log(administrador.deleteUser()); // Usuario ha sido eliminado


















































