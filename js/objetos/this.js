/*
La palabra clave se refiere a un objeto.this
En JavaScript, se utiliza para acceder el objeto que llama a un método.this
*/


// Esto en un método de objeto. Cuando se usa dentro de un objeto, el método se refiere al objeto.this

// Ejemplo
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

