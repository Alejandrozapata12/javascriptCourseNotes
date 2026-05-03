// Promise API
// Hay 6 métodos estáticos en la clase Promise. Veremos sus casos de uso aquí.

/*
- Promise.all
- Promise.allSettled
- Promise.race
- Promise.any
- Promise.resolve/reject
*/

// ============ Promise.all() => “todo o nada”  Ejecuta varias promesas en paralelo, Espera a que TODAS terminen ================
Promise.all([
  fetch("/user"),
  fetch("/posts"),
  fetch("/comments")
])
.then(res => console.log("Todo listo"))
.catch(err => console.log("Algo falló"));

/*
📌 Clave:

✅ rápido (paralelo)
❌ si UNA falla → TODO falla

🧠 Cuándo usarlo:
Dashboard (cargar todo junto)
Múltiples APIs obligatorias
*/

// ================ Promise.allSettled() => quiero TODO, falle o no  ================

/*
👉 Espera todas las promesas
👉 No importa si fallan
*/

Promise.allSettled([
  fetch("/user"),
  fetch("/posts"),
  fetch("/bad-url")
])
.then(results => console.log(results));

/*
📌 Clave:

Nunca rompe
Te da éxito y error mezclado
🧠 Cuándo usarlo:
Mostrar datos parciales
Sistemas tolerantes a errores
*/

// ================ Promise.race()  => el más rápido gana  ================
/*
👉 La primera que termine define el resultado
🧠 Cuándo usarlo:
Timeout
Elegir servidor más rápido
*/
Promise.race([
  fetch("/lento"),
  fetch("/rapido")
])
.then(res => console.log(res));


// ================ Promise.any()  => el primer éxito gana  ================

/*
👉 Ignora errores
👉 Solo le importa el primer éxito

🧠 Cuándo usarlo:
APIs redundantes
fallback servers
*/

Promise.any([
  fetch("/fail1"),
  fetch("/fail2"),
  fetch("/ok")
])
.then(res => console.log(res));


// ================ Promise.resolve()  => Convierte cualquier valor en promesa  ================
/*
🧠 Uso real:
Mantener consistencia (siempre devolver promesas)
*/

Promise.resolve("Hola")
  .then(data => console.log(data));


  // ================ Promise.reject()  =>  Crear error manualmente  ================

Promise.reject("Error")
  .catch(err => console.log(err));





  // Ejemplo: 

  let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];

// "mapear" cada url a la promesa de su fetch
let requests = urls.map(url => fetch(url));

// Promise.all espera hasta que todas la tareas estén resueltas
Promise.all(requests)
  .then(responses => responses.forEach(
    response => alert(`${response.url}: ${response.status}`)
  ));

  /*
  Existen 6 métodos estáticos de la clase Promise:

Promise.all(promises) – espera que todas las promesas se resuelvan y devuelve un array de sus resultados. Si cualquiera es rechazada se vuelve el error de Promise.all y los demás resultados son ignorados.
Promise.allSettled(promises) (método recientemente añadido) – espera que toda las promesas respondan y devuelve sus resultados como un array de objetos con:
status: "fulfilled" o "rejected"
value (si fulfilled) o reason (si rejected).
Promise.race(promises) – espera a la primera promesa que responda y aquel resultado o error se vuelve su resultado o error.
Promise.any(promises) (método recientemente añadido) – espera por la primera promesa que se cumpla y devuelve su resultado. Si todas las promesas son rechazadas, AggregateError se vuelve el error de Promise.any.
Promise.resolve(value) – crea una promesa resuelta con el “value” dado.
Promise.reject(error) – crea una promesa rechazada con el “error” dado.
Promise.all es probablemente el más común en la práctica.
  
  */




// EJEMPLO REAL: 

async function cargarDatos() {
      const resultado = document.getElementById("resultado");
      resultado.textContent = "Cargando...";

      try {
        // 🔥 Ejecuta todo en paralelo
        const [users, posts, comments] = await Promise.all([
          fetch("https://jsonplaceholder.typicode.com/users"),
          fetch("https://jsonplaceholder.typicode.com/posts"),
          fetch("https://jsonplaceholder.typicode.com/comments")
        ]);

        // Convertir a JSON (también en paralelo)
        const data = await Promise.all([
          users.json(),
          posts.json(),
          comments.json()
        ]);

        resultado.textContent = JSON.stringify({
          usuarios: data[0].length,
          posts: data[1].length,
          comentarios: data[2].length
        }, null, 2);

      } catch (error) {
        resultado.textContent = "Error al cargar datos: " + error;
      }
    }
















