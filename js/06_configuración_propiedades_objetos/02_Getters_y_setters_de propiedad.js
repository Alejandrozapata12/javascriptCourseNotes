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


// EJEMPLO de uso de compatibilidad

function PersonalData(name, birthday){ // Función constructora
  this.name = name;
  this.birthday = birthday; 

  Object.defineProperty(this, "age",{ // Definimos la propiedad age utilizando Object.defineProperty() con un getter que calcula la edad de la persona en función de su fecha de nacimiento.
    get (){
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  })
}

// Objeto de esa función constructora
let persona1 = new PersonalData("Laura", new Date(1990, 5, 15));

console.log(persona1.name); // Laura
console.log(persona1.birthday); // Thursday April 23 2001 00:00:00 GMT+0200 (Central European Summer Time)
console.log(persona1.age); // Hoy tiene 34 (dependiendo del año actual)


// Ahora un ejemplo en combinación con html, donde se muestra el uso de getters y setters para actualizar el contenido de una página web.

const user = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
    document.getElementById("userName").textContent = this.fullName; // Actualiza el contenido del elemento con id "userName" cada vez que se establece un nuevo valor para fullName.
  }
};

// Supongamos que en el HTML tenemos un elemento con id "userName" para mostrar el nombre completo del usuario.
document.getElementById("userName").textContent = user.fullName; // Muestra "John Doe"
// Luego, al establecer un nuevo valor para fullName, se actualizará automáticamente el contenido del elemento en la página web.
user.fullName = "Jane Smith"; // El contenido del elemento con id "userName" se actualizará a "Jane Smith"









