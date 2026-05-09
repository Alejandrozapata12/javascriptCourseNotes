// Async/await
// ¿Qué es async/await?
/*
Es azúcar sintáctico sobre las promesas que hace que el código asíncrono se lea como si fuera síncrono.
*/

// ❌ Con promesas tradicionales (anidación)
fetch('/api/usuario')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    return fetch(`/api/posts/${data.id}`);
  })
  .then(res => res.json())
  .then(posts => console.log(posts))
  .catch(err => console.error(err));

// ✅ Con async/await (lectura lineal)
async function cargarDatos() {
  try {
    const res = await fetch('/api/usuario');
    const data = await res.json();
    
    const resPosts = await fetch(`/api/posts/${data.id}`);
    const posts = await resPosts.json();
    
    console.log(posts); 
  } catch (err) {
    console.error(err);
  }
}

// 🔑 Las 2 palabras clave (Async y await)

// Async -> Va antes de una función

async function name(params) {
    return params;
}

// await -> Pausa la ejecución hasta que la promesa se resuelva

async function ejemplo(){
    console.log("1. Inicio");

    const resuelto = await nuevaPromesa(); // ⏸️ Se pausa aquí

    console.log("3.Despues del await");
    return resuelto;
}

function nuevaPromesa(){
    return new Promise(resolve => {
        setTimeout(() =>{
            console.log("2. Promesa resuelta");
           resolve("✅ Listo");
        }, 2000);
    });
}

ejemplo();

// Output
/*
1. Inicio
2. Promesa resuelta    ← (después de 2 segundos)
3. Después del await
*/


/*
Reglas esenciales (¡No las olvides!)

🚫 await solo dentro de async -> await fetch() en función normal === ❌ Error de sintaxis
✅ await espera promesas -> const data = await fetch() === ✅ Obtienes el valor resuelto
⚡ await también funciona con "thenables" -> Objetos con método .then === ✅ Compatible con librerías de terceros
🎯 Los errores se lanzan como excepciones -> Promesa rechazada → throw === ✅ Usa try/catch para manejarlos
*/


// 🛠️ Manejo de errores con async/await

async function obtenerCliente(id){
     try {
         const respuesta = await fetch (`/api/users/${id}`)

         if(!respuesta.ok){
            throw Error(`Error HTTP ${respuesta.status}`);
         }

         const json = await respuesta.json();
         return json;
     } catch (error) {
        console.log(`Error ${error.message}`);
        throw error;
     }
}

obtenerCliente(2)
.then(resp => console.log(resp))
.catch (err => console.log("Error global: ", err ));





















