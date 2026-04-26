// Mixins
 
// Un mixin es un objeto con métodos que puedes “mezclar” en una clase SIN usar herencia.

// Porque en JS:
class A extends B {}

// no puedes hacer
class A extends B, C {}// ❌

// Entonces aparece el mixin -> para “simular” múltiples comportamientos

const saludarMixin = {
  saludar() {
    return `Hola ${this.nombre}`;
  },

  despedir() {
    return `Adiós ${this.nombre}`;
  }
};

class Usuario {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

// 🔥 mezclamos el mixin
Object.assign(Usuario.prototype, saludarMixin);

const u = new Usuario("Alejandro");

console.log(u.saludar()); // Hola Alejandro

// NO hay herencia-> solo copiaste métodos al prototype

































