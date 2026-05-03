// Promise chaining = encadenar .then() para ejecutar pasos en secuencia
/*
cada .then():

recibe el resultado anterior
devuelve una nueva promesa
Eso permite seguir encadenando
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

















