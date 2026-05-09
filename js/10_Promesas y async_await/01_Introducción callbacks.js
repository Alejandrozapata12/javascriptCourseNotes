// Introducción: callbacks

/*
Un callback es una función que se pasa como argumento a otra función para ejecutarse después.
literalmente:
funcion(otraFuncion)
*/

function saludar (nombre, callback){
  console.log(`Hola mi nombre es ${nombre},`);
  despedir(); // Para como argumento a la función saludar
}

function despedir (){ // Función que se pasara como argumento
  console.log("Nos vemos pronto"); 
}

saludar("Alejandro", despedir); // Hola mi nombre es Alejandro, Nos vemos pronto


// caso real backend tipo API => el callback se ejecuta cuando los datos están listos

function obtenerUsuarios (callback){
   setTimeout(()=>{
    const user = {nombre : "Alejandro"};
    callback(user);
   },1000);
}

obtenerUsuarios ((usuario) =>{
  console.log("Usuario:" + usuario.nombre); 
})


// ============ Ejemplo basico de una callaback ============

const numeros = [1, 2, 3];

// numeros.forEach => se denomina Higher-Order Functions
numeros.forEach(function(numero) {  // la function .... se debonima callback
  console.log(numero);
})

numeros.forEach((numero) => {
  console.log(numero)
})

// callback sincrono
console.log("antes");
[1,2,3].forEach(n => console.log(n));
console.log("despues");

// Callback Asincrono
console.log("antes");
setTimeout(() => console.log("despues"), 0);
console.log("entre");

// Ejemplos 

// setTimeout: ejecuta el callback después de N milisegundos
setTimeout(() => {
  console.log("Han pasado 2 segundos");
}, 2000);

// addEventListener: ejecuta el callback cuando ocurre un evento
document.querySelector("button").addEventListener("click", () => {
  console.log("El usuario hizo clic");
});

// En ambos casos: tú defines la función, el entorno decide cuándo llamarla

// =================== Error first Callback  ===================


  import fs from "fs";

try {
  let usuario = undefined;
  console.log(usuario.nombre); // error porque usuario es undefined
} catch (error) {
  console.log("No se pudo leer la propiedad");
}


// El problema con try/catch y asincronía


// ❌ try/catch NO funciona con callbacks asíncronos
try {
  setTimeout(() => {
    throw new Error("Algo salió mal"); // Este error NO lo atrapa el try/catch
  }, 1000);
} catch (error) {
  console.log("Nunca llega aquí"); // Nunca se ejecuta
}

// El try/catch ya terminó cuando el callback se ejecuta.
// El error queda sin manejar y puede crashear el proceso.


// la convención de callbacks con error-first

fs.readFile("archivo.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error leyendo el archivo:", err.message);
    return;
  }
  console.log("Contenido:", data);
});


// Estructura de error-first

function callback(error, resultado) {}

// Error-first en APIs de Node.js

const fs = require("fs");

// fs.readFile sigue exactamente la convención error-first
fs.readFile("archivo.txt", "utf8", function(error, datos) {
  if (error) {
    console.error("No se pudo leer el archivo:", error.message);
    return;
  }
  console.log("Contenido:", datos);
});

// Lo mismo con fs.writeFile
fs.writeFile("salida.txt", "Hola mundo", function(error) {
  if (error) {
    console.error("Error al escribir:", error.message);
    return;
  }
  console.log("Archivo guardado correctamente");
});



// ❌ Sin return — código peligroso
function procesarDatos(error, datos) {
  if (error) {
    console.error("Error:", error.message);
    // ¡Falta el return! La función sigue ejecutándose
  }
  console.log(datos.length); // 💥 TypeError si datos es null
}

// ✅ Con return — código seguro
function procesarDatos(error, datos) {
  if (error) {
    console.error("Error:", error.message);
    return; // Corta la ejecución aquí
  }
  console.log(datos.length); // Solo llega aquí si no hubo error
}



// ======= Callback hell =======

// Callback Hell - Anidamiento profundo
login(usuario, function(err, user) {
  if (err) return manejarError(err);

  obtenerPerfil(user, function(err, perfil) {
    if (err) return manejarError(err);

    obtenerPermisos(perfil, function(err, permisos) {
      if (err) return manejarError(err);

      cargarDashboard(permisos, function(err, dashboard) {
        if (err) return manejarError(err);

        console.log("Todo listo");
      });
    });
  });
});



// Flujo realista de una app: login → perfil → posts → comentarios
login(credenciales, function(err, sesion) {
  if (err) { return manejarError(err); }
  actualizarUI("Cargando perfil...");

  obtenerPerfil(sesion.userId, function(err, perfil) {
    if (err) { return manejarError(err); }
    renderizarPerfil(perfil);

    obtenerPosts(perfil.id, function(err, posts) {
      if (err) { return manejarError(err); }
      renderizarPosts(posts);

      obtenerComentarios(posts[0].id, function(err, comentarios) {
        if (err) { return manejarError(err); }
        renderizarComentarios(comentarios);

        // En este punto ya nadie sabe qué está pasando
      });
    });
  });
});


// El intento de solución: funciones nombradas
// ✅ Más legible visualmente...
function manejarUsuario(err, usuario) {
  if (err) { return console.error(err); }
  obtenerPedidos(usuario.id, manejarPedidos);
}

function manejarPedidos(err, pedidos) {
  if (err) { return console.error(err); }
  obtenerProducto(pedidos[0].productoId, manejarProducto);
}

function manejarProducto(err, producto) {
  if (err) { return console.error(err); }
  console.log("Producto:", producto.nombre);
}

obtenerUsuario(1, manejarUsuario);