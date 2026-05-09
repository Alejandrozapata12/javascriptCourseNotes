// Promise chaining = encadenar .then() para ejecutar pasos en secuencia
/*
cada .then():

recibe el resultado anterior
devuelve una nueva promesa
Eso permite seguir encadenando


Volvamos al problema mencionado en el capítulo Introducción: callbacks: tenemos una secuencia de tareas asincrónicas que deben realizarse una tras otra, por ejemplo, cargar scripts. ¿Cómo podemos codificarlo correctamente?

Las promesas proporcionan un par de maneras para hacerlo.

En este capítulo cubrimos el encadenamiento de promesas.

Cada .then() devuelve otra promesa.
*/

new Promise((resolve) => {
  setTimeout(() => resolve(1), 1000);
})
.then(result => {
  console.log(result); // 1
  return result * 2;
})
.then(result => {
  console.log(result); // 2
  return result * 2;
})
.then(result => {
  console.log(result); // 4
});

/*
Flujo:

1 → 2 → 4

👉 cada .then recibe el resultado anterior
👉 porque cada .then devuelve una nueva promesa

*/

// Ejemplo real con un API
function obtenerUsuario() {
  return Promise.resolve({ id: 1, nombre: "Alejandro" });
}

function obtenerPosts(user) {
  return Promise.resolve(["post1", "post2"]);
}

function procesarPosts(posts) {
  return posts.length;
}

obtenerUsuario()
  .then(user => {
    console.log("Usuario:", user.nombre);
    return obtenerPosts(user); // 🔥 importante
  })
  .then(posts => {
    console.log("Posts:", posts);
    return procesarPosts(posts);
  })
  .then(total => {
    console.log("Total posts:", total);
  })
  .catch(err => console.log(err));

// Ahora ejemplo tipo html  + js

/*
<button id="btn">Cargar</button>
<p id="out"></p>

const btn = document.getElementById("btn");
const out = document.getElementById("out");

function paso1() {
  return new Promise(res => setTimeout(() => res(2), 1000));
}

function paso2(num) {
  return new Promise(res => setTimeout(() => res(num * 3), 1000));
}

btn.addEventListener("click", () => {

  out.textContent = "Cargando...";

  paso1()
    .then(result => {
      return paso2(result);
    })
    .then(final => {
      out.textContent = "Resultado: " + final;
    })
    .catch(err => {
      out.textContent = "Error";
    });

});

*/

new Promise (function (resolve, reject){
  setTimeout(() => resolve(1),2000);
})
.then (function(solucion){
   console.log(solucion); // 1
   return solucion * 2; 
})
.then (function(solucion){
   console.log(solucion); // 2
   return solucion * 2; 
})
.then (function(solucion){
   console.log(solucion); // 4
   return solucion * 2; 
})

/*
Aquí el flujo es:

La promesa inicial se resuelve en 1 segundo (*),
Entonces se llama el manejador .then (**), que a su vez crea una nueva promesa (resuelta con el valor 2).
El siguiente .then (***) obtiene el resultado del anterior, lo procesa (duplica) y lo pasa al siguiente manejador.
…y así sucesivamente.
A medida que el resultado se pasa a lo largo de la cadena de controladores, podemos ver una secuencia de llamadas de alerta: 1 → 2 → 4.

*/

/*
Si un controlador .then (o catch/finally, no importa) devuelve una promesa, el resto de la cadena espera hasta que ésta quede establecida (sea resuelta o rechazada). Cuando lo hace, su resultado (o error) pasa más allá.


 */

//  ================== EJEMPLO USANDO UNA API FAKE DE PLATZI ==================

function obtenerUsuario(id) {
  return fetch(`https://api.escuelajs.co/api/v1/users/${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      return response.json();
    });
} 

obtenerUsuario(1)
  .then(usuario => {
    console.log("usuario", usuario.name);
    return usuario;
  })
  .then(usuario => {
    console.log("Id recibido:", usuario.id);
    return usuario;
  })
  .then(usuario => {
    console.log("Role:", usuario.role);
    return usuario;
  })
  .then(usuario => {
    console.log("Email:", usuario.email);
    return usuario;
  })
  .catch(error => {
    console.error("Error al obtener usuario:", error.message);
  });

// ANTES: Callback Hell
operacion1(function(res1) {
  operacion2(res1, function(res2) {
    operacion3(res2, function(res3) {
      console.log(res3);
    });
  });
});

// AHORA: Promise Chaining
operacion1()
  .then(res1 => operacion2(res1))
  .then(res2 => operacion3(res2))
  .then(res3 => console.log(res3));

//Retornando promesas dentro de .then()
function obtenerPedidos(userId) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([{ id: 101, producto: "Laptop" }, { id: 102, producto: "Mouse" }]);
    }, 400);
  });
}

function obtenerDetalle(pedidoId) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: pedidoId, estado: "enviado", total: 1200 });
    }, 300);
  });
}

// Encadenamiento con Promesas anidadas
obtenerUsuario(1)
  .then(usuario => obtenerPedidos(usuario.id))   // Retorna una Promesa
  .then(pedidos  => obtenerDetalle(pedidos[0].id)) // Espera y retorna otra
  .then(detalle  => console.log("Detalle:", detalle));

// RETO: usando la fake API de Platzi, obtener un usuario, convertirlo a JSON, 
// Transformar el string a UpperCase, mostrar su role e imprimirlo en consola

fetch("https://api.escuelajs.co/api/v1/users/1")
  .then(respuesta => respuesta.json())          // Convierte a JSON
  .then(usuario => usuario.name.toUpperCase())  // Transforma el string
  .then(nombre => console.log(nombre));         // "JHON"

// ¿Cuáles son las tres reglas del promise chaining?
/*
1. Siempre retornar algo dentro del .then: sin el return, la cadena se rompe.
2. Si no retornas, el siguiente .then recibe undefined: esto causa errores difíciles de depurar.
3. El encadenamiento es secuencial: primero se ejecuta el primer .then, luego el segundo, y así sucesivamente
*/










