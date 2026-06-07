// Recorriendo el DOM
/*
El DOM nos permite hacer cualquier cosa con sus elementos y contenidos, pero lo primero que tenemos que hacer es llegar al objeto correspondiente del DOM.

Todas las operaciones en el DOM comienzan con el objeto document. Este es el principal “punto de entrada” al DOM. Desde ahí podremos acceder a cualquier nodo.
*/

// Ejemplo completo
<body>

  <div class="card">
    <h1>Título</h1>
    <p>Texto</p>
  </div>

  <script>

    const card = document.querySelector(".card");

    // hijos
    console.log(card.children);

    // primer hijo
    console.log(card.firstElementChild);

    // último hijo
    console.log(card.lastElementChild);

    // subir al padre
    console.log(card.parentElement);

  </script>

</body>