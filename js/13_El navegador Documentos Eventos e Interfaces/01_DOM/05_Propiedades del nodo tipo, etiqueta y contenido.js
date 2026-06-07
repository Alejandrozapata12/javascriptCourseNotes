// Propiedades del nodo: tipo, etiqueta y contenido
/*
La idea MÁS importante del tema

Todo en el DOM es un nodo.

Eso incluye:

etiquetas HTML
textos
comentarios
el documento entero
*/

// Ejemplo:
<body>
  <h1>Hola</h1>
</body>

/*
El navegador NO ve eso como “HTML bonito”.

Lo convierte en objetos:
*/

document
 └── html
      └── body
           └── h1
                └── "Hola"


// Y cada cosa es un nodo diferente.

// Ahora este tema viene es a enseñar lo siguiente: 
/*
Cómo inspeccionar un nodo:

qué tipo es
qué contiene
cuál es su etiqueta
cuál es su texto
cuál es su HTML interno
*/

//=========== 1.nodeType => Esto te dice QUÉ tipo de nodo es. ===========
<h1>Hola</h1>

const titulo = document.querySelector("h1");
console.log(titulo.nodeType); // 1 (Elemento HTML)
/*
Valor	Tipo
1	Elemento HTML
3	Nodo de texto
8	Comentario
9	Documento
*/


// =========== 2. nodeName y tagName ===========

// tagName => Devuelve la etiqueta HTML.
const h1 = document.querySelector("h1");

console.log(h1.tagName); // H1

// nodeName => Muy parecido…
console.log(h1.nodeName); // H1

/*
¿Cuál es la diferencia?

tagName SOLO funciona con elementos HTML.

nodeName funciona con TODOS los nodos.
*/

// =========== 3. innerHTML => Devuelve el HTML interno. ===========
<div id="box">
  <h1>Hola</h1>
</div>

const obtener = document.querySelector("#box");
console.log(obtener.innerHTML); // <h1>Hola</h1>

// Tambien se puede modificar
box.innerHTML = `<button>Click here</button>`;

// =========== 4. outerHTML => Este incluye el elemento completo. ===========
<div id="box">
  <h1>Hola</h1>
</div>

console.log(box.outerHTML);

// resultado
<div id="box">
  <h1>Hola</h1>
</div>

// =========== 5. textContent => Devuelve SOLO texto. ===========
<div id="box">
  <h1>Hola que tal </h1>
</div>

console.log(box.textContent); // Hola que tal


// =========== 6. data / nodeValue => Esto se usa más con nodos de texto o comentarios. ===========
<body>
  Hola
</body>

const texto = document.body.firstChild;

console.log(texto.data); // Hola

// =========== 7. hidden => Oculta elementos. ===========

<div hidden>
  estoy oculto
</div>


// ===================== EJEMPLO REAL  =====================
<button class="btn">
  Mostrar/Ocultar
</button>

<div class="box">
  Inventrack
</div>


const btn = document.querySelector(".btn");
const box = document.querySelector(".box");

btn.addEventListener("click", () => {

  box.hidden = !box.hidden;

});


// ============== OTRO EJEMPLO ==============



<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>DOM</title>
</head>
<body>

  <div id="card">
    <h1>Inventrack</h1>
    <p>Sistema de inventario</p>
  </div>

  <button id="btn">
    Cambiar contenido
  </button>

  <script>

    const card =
      document.querySelector("#card");

    const btn =
      document.querySelector("#btn");

    console.log(card.nodeType);
    console.log(card.tagName);
    console.log(card.innerHTML);
    console.log(card.textContent);

    btn.addEventListener("click", () => {

      card.innerHTML = `
        <h2>Actualizado</h2>
        <p>Nuevo contenido</p>
      `;

    });

  </script>

</body>
</html>



