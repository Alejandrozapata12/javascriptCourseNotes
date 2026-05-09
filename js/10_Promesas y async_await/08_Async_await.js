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




// ================ EJEMPLO PLATZI ================

function salud() {
    return "hola";
}

console.log(salud());

// async function

async function saludAsync() {
    return "hola async";
}

console.log(await saludAsync()); // Promise.resolve(valor);

// ANTES PROMESAS

function obtenerUsuario(id) {
  return fetch(`https://api.escuelajs.co/api/v1/users/${id}`)
    .then(res => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    });
}

// AHORA ASYNC/AWAIT

async function obtenerUsuarioAsync(id) {
  const res = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

const usario = await obtenerUsuarioAsync(2);
console.log(usario.name);


// mini ejemplo
fetch("/api/user")
  .then(res => res.json())
  .then(data => console.log(data));

// async/await
const res = await fetch("/api/user");
const data = await res.json();
console.log(data);

// async en distintas formas de función 

// Declaración de función
async function cargar () {/*codigo*/}

// Expresión de función
const cargar = async function() {/*codigo*/}

// Arrow function
const cargar = async () => {/*codigo*/}

// Método de clase
class ServicioUsuarios {
    async obtener() {/*codigo*/}
}

// RETO: usar la siguiente API para obtener datos de usuarios y utilizar las cuatro primeras formas de función
// fetch https://jsonplaceholder.typicode.com/users/

// Respuesta:

const URL = "https://jsonplaceholder.typicode.com/users/";

// Declaración de función
async function cargar() {
  const res = await fetch(URL);
  const data = await res.json();
  console.log("Declaración:", data);
}

// Expresión de función
const cargar2 = async function() {
  const res = await fetch(URL);
  const data = await res.json();
  console.log("Expresión:", data);
}

// Arrow function
const cargar3 = async () => {
  const res = await fetch(URL);
  const data = await res.json();
  console.log("Arrow:", data);
}

// Método de objeto
const apiObjeto = {
  async obtener() {
    const res = await fetch(URL);
    const data = await res.json();
    console.log("Objeto:", data);
  }
}

// Llamadas
cargar();
cargar2();
cargar3();
api.obtener();


// MANEJO DE ERRORES EN ASYNC AWAIT

// Manejo de errores try/catch
async function cargarUsuario(id) {
  try {
    const respuesta = await fetch(`https://api2.escuelajs.co/api/v1/users/${id}`);
    const usuario = await respuesta.json();
    console.log(usuario.name);
  } catch (error) {
    console.error("error al cargar usuario",error.message);
  } 
}

cargarUsuario(1);

// Finally, limpieza garantizada

async function cargarPerfil(userId) {
  mostrarSpinner();

  try {
    const respuesta = await fetch(`https://api.escuelajs.co/api/v1/users/${userId}`);

    if (!respuesta.ok) {
      throw new Error(`HTTP ${respuesta.status}: ${respuesta.statusText}`);
    }

    const perfil = await respuesta.json();
    renderizarPerfil(perfil);

  } catch (error) {
    mostrarError(error.message);

  } finally {
    ocultarSpinner(); // Siempre se ejecuta — con o sin error
  }
}

// Errores personalizados
async function obtenerProducto(id) {
  try {
    const respuesta = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);

    // fetch no rechaza con errores HTTP 4xx o 5xx — hay que verificar
    if (!respuesta.ok) {
      throw new Error(`Producto no encontrado (${respuesta.status})`);
    }

    const producto = await respuesta.json();

    if (!producto || !producto.id) {
      throw new Error("Producto inválido o sin datos");
    }

    console.log(producto.title);
    return producto;

  } catch (error) {
    console.error(error.message);
    return null; // Valor por defecto ante el error
  }
}

obtenerProducto(999);

// Múltiples try/catch: cuándo separarlos

async function procesarPedido(pedidoId) {
  let usuario;
  let inventario;

  // Error al obtener usuario — crítico, no podemos continuar
  try {
    usuario = await obtenerUsuario(pedidoId);
  } catch (error) {
    throw new Error("No se pudo identificar al usuario"); // Relanza el error
  }

  // Error al obtener inventario — podemos continuar con stock por defecto
  try {
    inventario = await obtenerInventario();
  } catch (error) {
    console.warn("Inventario no disponible, usando caché");
    inventario = obtenerInventarioCached();
  }

  return procesarConDatos(usuario, inventario);
}

// Con Promesas y .catch()
function cargarCategorias() {
  return fetch("https://api.escuelajs.co/api/v1/categories")
    .then(res => {
      if (!res.ok) throw new Error(`Error ${res.status}`);
      return res.json();
    })
    .then(datos => renderizar(datos))
    .catch(error => mostrarError(error.message))
    .finally(() => ocultarSpinner());
}

// Con async/await y try/catch — equivalente exacto
async function cargarCategorias() {
    try {
        const res = await fetch("https://api.escuelajs.co/api/v1/categories");
        const datos = await res.json();
        renderizar(datos);
    } catch (error) {
        mostrarError(error.message);
    } finally {
        ocultarSpinner();
    }
}





// PATRONES DE EJECUCIÓN (SECUENCIAL Y PARALELO)

// Manejo de errores try/catch
async function cargarUsuario(id) {
  try {
    const respuesta = await fetch(`https://api2.escuelajs.co/api/v1/users/${id}`);
    const usuario = await respuesta.json();
    console.log(usuario.name);
  } catch (error) {
    console.error("error al cargar usuario",error.message);
  } 
}

cargarUsuario(1);

// Finally, limpieza garantizada

async function cargarPerfil(userId) {
  mostrarSpinner();

  try {
    const respuesta = await fetch(`https://api.escuelajs.co/api/v1/users/${userId}`);

    if (!respuesta.ok) {
      throw new Error(`HTTP ${respuesta.status}: ${respuesta.statusText}`);
    }

    const perfil = await respuesta.json();
    renderizarPerfil(perfil);

  } catch (error) {
    mostrarError(error.message);

  } finally {
    ocultarSpinner(); // Siempre se ejecuta — con o sin error
  }
}

// Errores personalizados
async function obtenerProducto(id) {
  try {
    const respuesta = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);

    // fetch no rechaza con errores HTTP 4xx o 5xx — hay que verificar
    if (!respuesta.ok) {
      throw new Error(`Producto no encontrado (${respuesta.status})`);
    }

    const producto = await respuesta.json();

    if (!producto || !producto.id) {
      throw new Error("Producto inválido o sin datos");
    }

    console.log(producto.title);
    return producto;

  } catch (error) {
    console.error(error.message);
    return null; // Valor por defecto ante el error
  }
}

obtenerProducto(999);

// Múltiples try/catch: cuándo separarlos

async function procesarPedido(pedidoId) {
  let usuario;
  let inventario;

  // Error al obtener usuario — crítico, no podemos continuar
  try {
    usuario = await obtenerUsuario(pedidoId);
  } catch (error) {
    throw new Error("No se pudo identificar al usuario"); // Relanza el error
  }

  // Error al obtener inventario — podemos continuar con stock por defecto
  try {
    inventario = await obtenerInventario();
  } catch (error) {
    console.warn("Inventario no disponible, usando caché");
    inventario = obtenerInventarioCached();
  }

  return procesarConDatos(usuario, inventario);
}

// Con Promesas y .catch()
function cargarCategorias() {
  return fetch("https://api.escuelajs.co/api/v1/categories")
    .then(res => {
      if (!res.ok) throw new Error(`Error ${res.status}`);
      return res.json();
    })
    .then(datos => renderizar(datos))
    .catch(error => mostrarError(error.message))
    .finally(() => ocultarSpinner());
}

// Con async/await y try/catch — equivalente exacto
async function cargarCategorias() {
    try {
        const res = await fetch("https://api.escuelajs.co/api/v1/categories");
        const datos = await res.json();
        renderizar(datos);
    } catch (error) {
        mostrarError(error.message);
    } finally {
        ocultarSpinner();
    }
}







