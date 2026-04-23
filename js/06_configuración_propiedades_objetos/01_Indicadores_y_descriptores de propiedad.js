// Una propiedad no es solo
user.name = "Alejandro";

// Internamente es algo así -> Eso es un descriptor de propiedad
/*
{
  value: "Alejandro",
  writable: true,
  enumerable: true,
  configurable: true
}
  */

// Los 3 flags muy importantes

// writable -> Si es true, se puede modificar el valor de la propiedad
// enumerable -> Si es true, la propiedad se muestra al iterar el objeto
// configurable -> Si es true, se puede eliminar la propiedad o cambiar sus flags
// Para configurar los flags de una propiedad, se utiliza Object.defineProperty()

Object.defineProperty(user, "name", {
  writable: false,
  enumerable: false,
  configurable: false
});

// ********* Descriptor *********
const user = {nombre: "Andres"};
const descriptor = Object.getOwnPropertyDescriptor(user, "nombre");
console.log(descriptor); // { value: 'Andres', writable: true, enumerable: true, configurable: true }

// Crear / modificar propiedades
const data = {};

Object.defineProperty(data, "apellido", {value: "Gomez", writable:false});

data.apellido = "Perez"; // No se modifica porque writable es false
console.log(data.apellido); // "Gomez"

/*
En este ejemplo se crea un objeto data y se define una propiedad apellido con el valor "Gomez" y writable en false. Luego se intenta modificar el valor de apellido a "Perez", pero no se modifica porque writable es false. Al imprimir data.apellido, se muestra "Gomez".
*/

// ********* Enumerable *********
const informacion ={
  user: "Alejandro"
};
Object.defineProperty(informacion, "password",{value: "4848", enumerable: false});
console.log(Object.keys(informacion)); // ["user"], solo muestra la propiedad user porque password no es enumerable, es decir, si existe, sin embargo, esta oculto. 


// ********* configurable *********
Object.defineProperty(informacion, "password", {configurable: false});
delete informacion.password; // No se elimina porque configurable es false
console.log(informacion.password); // "4848"

/*
En este ejemplo se define la propiedad password con configurable en false. Luego se intenta eliminar la propiedad password, pero no se elimina porque configurable es false. Al imprimir informacion.password, se muestra "4848".
*/

// Ejemplo real: Crear un objeto usuario con una propiedad id que no se pueda modificar ni eliminar, pero que se pueda mostrar al iterar el objeto.

function createUser(name) {
  const user = {};

  Object.defineProperty(user, "id", {
    value: Math.random(),
    writable: false,
    configurable: false
  });

  user.name = name;

  return user;
}

const u = createUser("Alejandro");

u.id = 999; // ❌ no cambia
delete u.id; // ❌ no se elimina



// Ejemplo de etos indicaciones y descriptores en una app o funcionalidad real: Supongamos que estamos creando una aplicación de gestión de tareas y queremos definir una propiedad "status" para cada tarea que solo pueda tener los valores "pendiente", "en progreso" o "completada". Además, queremos que esta propiedad no se pueda modificar directamente, sino a través de un método específico.

function createTask(name) {
  const task = {
    name: name,
    _status: "pendiente"
  };

  Object.defineProperty(task, "status", {
    get: function() {
      return task._status;
    },
    set: function(value) {
      if (["pendiente", "en progreso", "completada"].includes(value)) {
        task._status = value;
      } else {
        throw new Error("Valor inválido para la propiedad 'status'");
      }
    },
    configurable: false,
    enumerable: true
  });

  return task;
}

const task1 = createTask("Aprender JavaScript");

console.log(task1.status); // "pendiente"
task1.status = "en progreso"; // ✅ cambia el estado a "en progreso"
console.log(task1.status); // "en progreso"
task1.status = "finalizada"; // ❌ lanza un error porque el valor no es válido



// Otro ejemplo completo: 

function createUser(data) {
  const user = {};

  // 🔒 ID protegido (no editable ni eliminable)
  Object.defineProperty(user, "id", {
    value: data.id,
    writable: false,
    configurable: false,
    enumerable: true
  });

  // 👤 Nombre normal
  Object.defineProperty(user, "name", {
    value: data.name,
    writable: true,
    enumerable: true,
    configurable: true
  });

  // 🔑 Password oculto
  Object.defineProperty(user, "password", {
    value: data.password,
    writable: true,
    enumerable: false, // 🔥 no aparece en JSON
    configurable: false
  });

  return user;
}

const user1 = createUser({id: 1, name: "Alice", password: "secret"});

console.log(user1); // { id: 1, name: 'Alice' } -> password no se muestra porque enumerable es false
console.log(user1.password); // "secret" -> pero aún se puede acceder directamente

user1.id = 2; // ❌ no cambia porque writable es false
delete user1.id; // ❌ no se elimina porque configurable es false










































