// Los objetos son creados usualmente para representar entidades del mundo real, como usuarios, órdenes, etc.:
let user = {
  name: "John",
  age: 30
};

/*
Y en el mundo real un usuario puede actuar: seleccionar algo del carrito de compras, hacer login, logout, etc.
Estas acciones se implementan asignando funciones a las propiedades del objeto.
*/

// “this” en métodos -> Es común que un método de objeto necesite acceder a la información almacenada en el objeto para cumplir su tarea.Para acceder al objeto, un método puede usar la palabra clave this.

let data = {
    firstName: "Alejandro",
    lastName: "Zapata",
    age: 24,
    fullName(){  // Método
     alert(`FullName is: ${this.firstName} ${this.lastName}`); // El this hace referencia a este objeto
    }
};

data.fullName(); // FullName is Alejandro Zapata


// Las funciones de flecha no tienen “this”

/*
Las funciones de flecha son especiales: ellas no tienen su “propio” this. Si nosotros hacemos referencia a this desde tales funciones, esta será tomada desde afuera de la función “normal”.
Por ejemplo, aquí arrow() usa this desde fuera del método user.sayHi()
*/

let usr = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

usr.sayHi(); // Ilya


