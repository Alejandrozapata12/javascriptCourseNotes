// Buscar: getElement*, querySelector*
/*
Las propiedades de navegación del DOM son ideales cuando los elementos están cerca unos de otros. Pero, ¿y si no lo están? ¿Cómo obtener un elemento arbitrario de la página?

Para estos casos existen métodos de búsqueda adicionales.
*/

// =================== document.getElementById o sólo id ===================
/*
Si un elemento tiene el atributo id, podemos obtener el elemento usando el método document.getElementById(id), sin importar dónde se encuentre.
*/

// Ejemplo: 
<div id="elem">
  <div id="elem-content">Elemento</div>
</div>

<script>
  // obtener el elemento
  let elem = document.getElementById('elem'); 

  // hacer que su fondo sea rojo
  elem.style.background = 'red';
</script>


// =================== querySelectorAll ===================
/*
Sin duda el método más versátil, elem.querySelectorAll(css) devuelve todos los elementos dentro de elem que coinciden con el selector CSS dado.
*/

<ul>
  <li>La</li>
  <li>prueba</li>
</ul>
<ul>
  <li>ha</li>
  <li>pasado/li>
</ul>
<script>
  let elements = document.querySelectorAll('ul > li:last-child');

  for (let elem of elements) {
    alert(elem.innerHTML); // "prueba", "pasado"
  }
</script>

// =================== querySelector ===================
/*
La llamada a elem.querySelector(css) devuelve el primer elemento para el selector CSS dado.

En otras palabras, el resultado es el mismo que elem.querySelectorAll(css)[0], pero este último busca todos los elementos y elige uno, mientras que elem.querySelector sólo busca uno. Así que es más rápido y también más corto de escribir.
 */

// =================== getElementsBy* ===================
/*

También hay otros métodos que permiten buscar nodos por una etiqueta, una clase, etc.

Hoy en día, son en su mayoría historia, ya que querySelector es más poderoso y corto de escribir.

Aquí los cubrimos principalmente por completar el temario, aunque todavía se pueden encontrar en scripts antiguos.

elem.getElementsByTagName(tag) busca elementos con la etiqueta dada y devuelve una colección con ellos. El parámetro tag también puede ser un asterisco "*" para “cualquier etiqueta”.
elem.getElementsByClassName(className) devuelve elementos con la clase dada.
document.getElementsByName(name) devuelve elementos con el atributo name dado, en todo el documento. Muy raramente usado.
 */


// Ejemplo: 

// obtener todos los divs del documento
let divs = document.getElementsByTagName('div');

// Para encontrar todas las etiquetas input dentro de una tabla:
<table id="table">
  <tr>
    <td>Su edad:</td>

    <td>
      <label>
        <input type="radio" name="age" value="young" checked> menos de 18
      </label>
      <label>
        <input type="radio" name="age" value="mature"> de 18 a 50
      </label>
      <label>
        <input type="radio" name="age" value="senior"> más de 60
      </label>
    </td>
  </tr>
</table>

<script>
  let inputs = table.getElementsByTagName('input');

  for (let input of inputs) {
    alert( input.value + ': ' + input.checked );
  }
</script>


/*
El flujo REAL en proyectos

En apps reales normalmente haces esto:
 */

// 1. Buscar elemento
const btn = document.querySelector(".btn");

// 2. Escuchar evento
btn.addEventListener("click", () => {

  // 3. Manipular DOM
  document.querySelector("h1").textContent =
    "Cambió el texto";

});

// EJEMPLO REAL: 

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>DOM</title>
</head>
<body>

  <h1 id="title">Inventrack</h1>

  <button class="btn">
    Cambiar texto
  </button>

  <script>

    const titulo = document.querySelector("#title");

    const boton = document.querySelector(".btn");

    boton.addEventListener("click", () => {

      titulo.textContent =
        "Sistema actualizado";

      titulo.style.color = "red";

    });

  </script>

</body>
</html>