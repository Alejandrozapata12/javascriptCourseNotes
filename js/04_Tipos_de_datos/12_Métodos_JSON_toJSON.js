// Métodos JSON.stringify() y JSON.parse()

/*
Digamos que tenemos un objeto complejo y nos gustaría convertirlo en un string (cadena de caracteres), para enviarlos por la red, o simplemente mostrarlo para fines de registro.

Naturalmente, tal string debe incluir todas las propiedades importantes.
*/

let user = {
  name: "John",
  age: 30,
};

// El método JSON.stringify(user) convierte el objeto user a un string:

let json = JSON.stringify(user);
console.log(json); // {"name":"John","age":30}

// El método JSON.parse() convierte un string de JSON de vuelta a un objeto:
let user2 = JSON.parse(json);
console.log(user2); // {name: "John", age: 30}


// Ejemplo real fullstack

// En el frontend, tenemos un objeto con los datos del usuario:
let user3 = {
  name: "John",
  age: 30,
};

// Enviamos los datos al backend como un string JSON:
let json3 = JSON.stringify(user3);
// Aquí se enviaría json3 al backend, por ejemplo, usando fetch o XMLHttpRequest asi:

fetch('/api/user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: json3 // Enviamos el string JSON al backend
})
.then(response => response.json())
.then(data => {

  console.log('Success:', data);
});

// En el backend, recibimos el string JSON y lo convertimos de nuevo a un objeto asi:
// Supongamos que recibimos el string JSON en una variable llamada jsonData
let jsonData = '{"name":"John","age":30}'; // Este sería el string JSON recibido
let user4 = JSON.parse(jsonData);
console.log(user4); // {name: "John", age: 30}

// Ahora otro ejemplo real

// FRONTEND
const datos = {
  nombre: "Juan",
  email: "juan@example.com"
};


await fetch('/api/guardar-datos', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(datos) // Convertimos el objeto a un string JSON antes de enviarlo 
});

// BACKEND
app.post('/api/guardar-datos', (req, res) => {
  const { nombre, email } = req.body; // Express automáticamente parsea el JSON recibido en el cuerpo de la solicitud
  console.log(`Nombre: ${nombre}, Email: ${email}`);
  res.send('Datos recibidos correctamente');
});



// Ahora toJson() es un método que se puede definir en objetos para personalizar su conversión a JSON. Cuando JSON.stringify() encuentra un objeto con un método toJSON(), llama a ese método y utiliza su resultado para la conversión a JSON.

let user5 = {
  name: "John",
  age: 30,
  toJSON() {
    return { name: this.name }; // Solo incluimos el nombre en la conversión a JSON
  }
};

let json5 = JSON.stringify(user5);
console.log(json5); // {"name":"John"}












