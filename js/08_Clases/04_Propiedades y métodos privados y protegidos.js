// Propiedades y métodos privados y protegidos.

/*
Este tema (private y protected) es donde entiendes algo muy importante en desarrollo real:
👉 encapsulación (proteger lo que no debe tocarse)

No todo lo que tiene un objeto debería ser accesible desde fuera.

👉 Se divide en:

Public → accesible desde cualquier lado
Protected (_) → “no tocar” (convención)
Private (#) → realmente inaccesible

📌 Esto separa:

interfaz externa
lógica interna
 */

// 1. Public (Lo normal, sin nada especial)
class User {
  constructor(name){
    this.name = name; // público
  }
}

let u = new User("Alice");
console.log(u.name); // Alice

// 2. Protected (Convención, no es realmente privado)
class User2 {
  constructor(name){
    this._name = name; // protegido (convención) -> Significa, no debe tocarse desde fuera, pero no es realmente privado
  }
}

let u2 = new User2("Bob");
console.log(u2._name); // Bob (pero no deberíamos acceder) 👉 JS NO lo protege 👉 es solo disciplina entre devs


// 3. Private (Realmente privado, no se puede acceder desde fuera)

class Front {
  #password; // privado (con #) -> No se puede acceder desde fuera, ni siquiera con this.#password
  constructor(password){
   this.#password = password; // privado
  }
  getPassword() {
    return this.#password; // método público para acceder al privado
  }
}

let pass = new Front("12345");
console.log(pass.getPassword()); // 12345
console.log(pass.#password); // Error: Private field '#password' must be declared in an enclosing class

/*
En resumen:
- Public: accesible desde cualquier lado (lo normal)
- Protected: no tocar (convención, no es realmente privado)
- Private: realmente privado, no se puede acceder desde fuera
Esto es fundamental para mantener la integridad de los objetos y evitar que se modifiquen de manera no controlada.
*/


// Ejemplo real: 
class Account {
  #balance = 0;

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Monto inválido");
    }
    this.#balance += amount;
  }
  getBalance() {
    return this.#balance;
  }
}

const acc = new Account();
acc.deposit(1000);

console.log(acc.getBalance()); // ✔
console.log(acc.#balance);     // ❌


// Otro ejemplo real: 

class Producto {
  #stock = 0; // 🔒 privado real

  constructor(nombre, precio, stockInicial) {
    this.nombre = nombre;
    this._precio = precio; // ⚠️ protegido
    this.#stock = stockInicial;
  }

  // 🔹 getter público
  get stock() {
    return this.#stock;
  }

  // 🔹 getter/setter con validación
  get precio() {
    return this._precio;
  }

  set precio(valor) {
    if (valor <= 0) {
      throw new Error("Precio inválido");
    }
    this._precio = valor;
  }

  // 🔹 método controlado
  vender(cantidad) {
    if (cantidad > this.#stock) {
      throw new Error("Stock insuficiente");
    }
    this.#stock -= cantidad;
  }

  reponer(cantidad) {
    if (cantidad <= 0) {
      throw new Error("Cantidad inválida");
    }
    this.#stock += cantidad;
  }
}




























