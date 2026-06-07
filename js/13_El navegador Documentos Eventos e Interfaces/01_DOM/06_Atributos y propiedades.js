// Atributos y propiedades
/*
Cuando el navegador carga la página, “lee” (o “parser”(analiza en inglés")) el HTML y genera objetos DOM a partir de él. Para los nodos de elementos, la mayoría de los atributos HTML estándar se convierten automáticamente en propiedades de los objetos DOM.

Por ejemplo, si la etiqueta es <body id="page">, entonces el objeto DOM tiene body.id="page".

¡Pero el mapeo de propiedades y atributos no es uno a uno! En este capítulo, prestaremos atención para separar estas dos nociones, para ver cómo trabajar con ellos, cuándo son iguales y cuándo son diferentes.
*/

// ========================== Propiedades DOM ==========================

/*
Ya hemos visto propiedades DOM integradas. Hay muchas. Pero técnicamente nadie nos limita, y si no hay suficientes, podemos agregar las nuestras.
Los nodos DOM son objetos JavaScript normales. Podemos alterarlos.
Por ejemplo, creemos una nueva propiedad en document.body:
*/

document.body.myData = {
  name: 'Cesar',
  title: 'Emperador'
};

alert(document.body.myData.title); // Emperador

// También podemos agregar un método:
document.body.sayTagName = function() {
  alert(this.tagName);
};

document.body.sayTagName(); // BODY (el valor de 'this' en el método es document.body)

// ========================== Atributos HTML ==========================
/*
En HTML, las etiquetas pueden tener atributos. Cuando el navegador analiza el HTML para crear objetos DOM para etiquetas, reconoce los atributos estándar y crea propiedades DOM a partir de ellos.

Entonces, cuando un elemento tiene id u otro atributo estándar, se crea la propiedad correspondiente. Pero eso no sucede si el atributo no es estándar.

elem.hasAttribute(nombre) – comprueba si existe.
elem.getAttribute(nombre) – obtiene el valor.
elem.setAttribute(nombre, valor) – establece el valor.
elem.removeAttribute(nombre) – elimina el atributo.

*/


// -------------------- 1. getAttribute() => Lee atributos HTML. --------------------
<div id="card" data-user="alejandro"></div>

const card = document.querySelector("#card");

console.log(
  card.getAttribute("data-user")
);
// Resultado = alejandro

// -------------------- 2. setAttribute() => Agrega o modifica atributos. --------------------
card.setAttribute(
  "data-user",
  "admin"
);

// Ahora el html queda asi: 
<div id="card" data-user="admin"></div>


// -------------------- 3. hasAttribute() => Verifica si existe. --------------------
card.hasAttribute("data-user"); // true


// -------------------- 4. removeAttribute() => Elimina atributos. --------------------
card.removeAttribute("data-user"); //  <div id="card"></div>

// -------------------- 5. attributes => Devuelve TODOS los atributos. --------------------
<div id="box" class="card"></div>
const box = document.querySelector("#box");

console.log(box.attributes);

// -------------------- 7. dataset => Sirve para atributos personalizados. --------------------
<div
  data-user="alejandro"
  data-role="admin">
</div>

const div = document.querySelector("div");

console.log(div.dataset.user);
console.log(div.dataset.role);


// EJEMPLO FINAL PARA CONCLUIR
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>DOM</title>
</head>
<body>

  <input
    id="nombre"
    value="Alejandro"
    data-role="admin"
  >

  <button id="btn">
    Cambiar valor
  </button>

  <script>

    const input =
      document.querySelector("#nombre");

    const btn =
      document.querySelector("#btn");

    console.log(
      input.getAttribute("value")
    );

    console.log(input.value);

    console.log(input.dataset.role);

    btn.addEventListener("click", () => {

      input.value = "Inventrack";

      input.setAttribute(
        "data-status",
        "activo"
      );

      console.log(input.value);

      console.log(
        input.getAttribute("value")
      );

      console.log(
        input.dataset.status
      );

    });

  </script>

</body>
</html>