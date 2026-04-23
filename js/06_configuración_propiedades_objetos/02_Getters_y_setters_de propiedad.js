// getters y setters (accessor properties)

// Un accessor es una propiedad que en realidad ejecuta código. 

// Ejemplo basico con get - obtener el valor de una propiedad a través de una función

const datos = {
  nombre: "Alejandro",
  apellido: "Zapata",
  edad: 24,

  get fullName(){
    return `${this.nombre} ${this.apellido}`;
  }
};

console.log(datos.fullName); // Alejandro Zapata

// Ejemplo con set - asignar un valor a una propiedad a través de una función

const datos2 = {
  nombre: "Alejandro",
  apellido: "Zapata",
  edad: 24,
  get fullName(){
    return `${this.nombre} ${this.apellido}`;
  },
  set fullName(value){
    const parts = value.split(" ");
    this.nombre = parts[0];
    this.apellido = parts[1];
  }
};

console.log(datos2.fullName); // Alejandro Zapata
datos2.fullName = "Maria Garcia";
console.log(datos2.nombre); // Maria
console.log(datos2.apellido); // Garcia

/*
Lo que paso en este caso es que al asignar un valor a la propiedad fullName, se ejecuta el código dentro del setter, que divide el valor en partes y asigna el primer nombre a this.nombre y el apellido a this.apellido. Luego, al acceder a datos2.nombre y datos2.apellido, vemos que han sido actualizados con los nuevos valores.
*/

// Caso real de uso de ambos getters y setters

const producto = {
  _precio = 0,

  get precio(){
    return this._precio;
  },

  set precio(validador){
    if(validador < 0){
      console.log("El precio no puede ser negativo");
    } else {
      this._precio = validador;
    }
  }
};

console.log(producto.precio); // 0
producto.precio = 100;
console.log(producto.precio); // 100
producto.precio = -50; // El precio no puede ser negativo
console.log(producto.precio); // 100 (no se actualiza debido a la validación)


// RELACIÓN CON PROPERTY DESCRIPTORS
// Los getters y setters también se pueden definir utilizando property descriptors con Object.defineProperty()


// Definición del objeto persona el cual tiene 2 propiedades: nombre y apellido. Luego se define una propiedad fullName utilizando Object.defineProperty() con un getter y un setter para obtener y establecer el nombre completo de la persona.
const persona = {
  nombre: "Carlos",
  apellido: "López"
};

Object.defineProperty(persona, "fullName", {
  get: function() {
    return `${this.nombre} ${this.apellido}`;
  },
  set: function(value) {
    const parts = value.split(" ");
    this.nombre = parts[0];
    this.apellido = parts[1];
  }
});

console.log(persona.fullName); // Carlos López
persona.fullName = "Ana Martínez";
console.log(persona.nombre); // Ana
console.log(persona.apellido); // Martínez













