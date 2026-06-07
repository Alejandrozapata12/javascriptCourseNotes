// Modificando el documento
/*
La modificación del DOM es la clave para crear páginas “vivas”, dinámicas.

Aquí veremos cómo crear nuevos elementos “al vuelo” y modificar el contenido existente de la página.
*/

// Ejemplo: mostrar un mensaje
/*
Hagamos una demostración usando un ejemplo. Añadiremos un mensaje que se vea más agradable que un alert.

Así es como se verá:
*/

<style>
.alert {
  padding: 15px;
  border: 1px solid #d6e9c6;
  border-radius: 4px;
  color: #3c763d;
  background-color: #dff0d8;
}
</style>

<div class="alert">
  <strong>¡Hola!</strong> Usted ha leído un importante mensaje.
</div>

// Eso fue el ejemplo HTML. Ahora creemos el mismo div con JavaScript (asumiendo que los estilos ya están en HTML/CSS).

// ============= Creando un elemento => createElement() crea elementos dinamicamente ============

// Para crear nodos DOM, hay dos métodos: (document.createElement(tag) o  document.createTextNode(text))
let div = document.createElement("div"); // Crea un nuevo nodo elemento con la etiqueta HTML dada

let nodoText = document.createTextNode("Aqui estoy, soy un nodo texto"); // Crea un nuevo nodo texto con el texto dado

// Creando el mensaje:

// 1. Crear elemento <div>
let div = document.createElement('div');

// 2. Establecer su clase a "alert"
div.className = "alert";

// 3. Agregar el contenido
div.innerHTML = "<strong>¡Hola!</strong> Usted ha leído un importante mensaje.";
// Hemos creado el elemento. Pero hasta ahora solamente está en una variable llamada div, no aún en la página, y no la podemos ver.


// ============= Métodos de inserción append() - Inserta al final. ============
/*
Para hacer que el div aparezca, necesitamos insertarlo en algún lado dentro de document. Por ejemplo, en el elemento <body>, referenciado por document.body.

Hay un método especial append para ello: document.body.append(div).
*/
<style>
.alert {
  padding: 15px;
  border: 1px solid #d6e9c6;
  border-radius: 4px;
  color: #3c763d;
  background-color: #dff0d8;
}
</style>

<script>
  let div = document.createElement('div');
  div.className = "alert";
  div.innerHTML = "<strong>¡Hola!</strong> Usted ha leído un importante mensaje.";

  document.body.append(div);
</script>

// Métodos importantes
/*
append()	Inserta al final
prepend()	Inserta al inicio
before()	Antes del elemento
after()	Después del elemento
replaceWith()	Reemplaza
remove()	Elimina
*/

// Ejemplo:

<ol id="ol">
  <li>0</li>
  <li>1</li>
  <li>2</li>
</ol>

<script>
  ol.before('before'); // inserta el string "before" antes de <ol>
  ol.after('after'); // inserta el string "after" después de <ol>

  let liFirst = document.createElement('li');
  liFirst.innerHTML = 'prepend';
  ol.prepend(liFirst); // inserta liFirst al principio de <ol>

  let liLast = document.createElement('li');
  liLast.innerHTML = 'append';
  ol.append(liLast); // inserta liLast al final de <ol>
</script>

/*
before
prepend
0
1
2
append
after
 */

<!doctype html>

<body>
	<div id="div"></div>

	<script>
		const div = document.querySelector("div");
  const inicio = div.before("<span>Hola a todos desde antes</span>")
	</script>
</body>

// Resultado => <span>Hola a todos desde antes</span>




 /*
 En otras palabras, los strings son insertados en una manera segura, tal como lo hace elem.textContent.

Entonces, estos métodos solo pueden usarse para insertar nodos DOM como piezas de texto.

Pero ¿y si queremos insertar un string HTML “como html”, con todas las etiquetas y demás funcionando, de la misma manera que lo hace elem.innerHTML?
  */

// insertAdjacentHTML/Text/Element
/*
Para ello podemos usar otro métodos, muy versátil: elem.insertAdjacentHTML(where, html).

El primer parámetro es un palabra código que especifica dónde insertar relativo a elem. Debe ser uno de los siguientes:

"beforebegin" – inserta html inmediatamente antes de elem
"afterbegin" – inserta html en elem, al principio
"beforeend" – inserta html en elem, al final
"afterend" – inserta html inmediatamente después de elem
El segundo parámetro es un string HTML, que es insertado “como HTML”.
 */

 <!doctype html>
<body>
<div id="div"></div>

<script>
  const div = document.querySelector("div");
  const inicio = div.insertAdjacentHTML("beforebegin","<span>Hola desde inicio</span>");
  const final = div.insertAdjacentHTML("afterend", "<span>Hola desde final</span>");
</script>
</body>

// Resultado => Hola desde inicio - Hola desde final

// ================== Eliminación de nodos ==================

/*
Para quitar un nodo, tenemos el método node.remove().
Hagamos que nuestro mensaje desaparezca después de un segundo
*/

<style>
.alert {
  padding: 15px;
  border: 1px solid #d6e9c6;
  border-radius: 4px;
  color: #3c763d;
  background-color: #dff0d8;
}
</style>

<script>
  let div = document.createElement('div');
  div.className = "alert";
  div.innerHTML = "<strong>¡Hola!</strong> Usted ha leído un importante mensaje.";

  document.body.append(div);
  setTimeout(() => div.remove(), 1000);
</script>

// ================== Clonando nodos: cloneNode ==================
/*
¿Cómo insertar un mensaje similar más?

Podríamos hacer una función y poner el código allí. Pero la alternativa es clonar el div existente, y modificar el texto dentro si es necesario.

A veces, cuando tenemos un elemento grande, esto es más simple y rápido.

La llamada elem.cloneNode(true) crea una clonación “profunda” del elemento, con todos los atributos y subelementos. Si llamamos elem.cloneNode(false), la clonación se hace sin sus elementos hijos.
 */

<style>
.alert {
  padding: 15px;
  border: 1px solid #d6e9c6;
  border-radius: 4px;
  color: #3c763d;
  background-color: #dff0d8;
}
</style>

<div class="alert" id="div">
  <strong>¡Hola!</strong> Usted ha leído un importante mensaje.
</div>

<script>
  let div2 = div.cloneNode(true); // clona el mensaje
  div2.querySelector('strong').innerHTML = '¡Adiós!'; // altera el clon

  div.after(div2); // muestra el clon después del div existente
</script>

// ================== DocumentFragment ==================
/*
DocumentFragment es un nodo DOM especial que sirve como contenedor para trasladar listas de nodos.
Podemos agregarle nodos, pero cuando lo insertamos en algún lugar, lo que se inserta es su contenido.
Por ejemplo, getListContent de abajo genera un fragmento con items <li>, que luego son insertados en <ul>
*/

<ul id="ul"></ul>

<script>
function getListContent() {
  let fragment = new DocumentFragment();

  for(let i=1; i<=3; i++) {
    let li = document.createElement('li');
    li.append(i);
    fragment.append(li);
  }

  return fragment;
}

ul.append(getListContent()); // (*)
</script>


// ================== Métodos de la vieja escuela para insertar/quitar ==================
/*
Hay también métodos de manipulación de DOM de “vieja escuela”, existentes por razones históricas.

Estos métodos vienen de realmente viejos tiempos. No hay razón para usarlos estos días, ya que los métodos modernos como append, prepend, before, after, remove, replaceWith, son más flexibles.
*/
/*
La única razón por la que los listamos aquí es porque podrías encontrarlos en viejos scripts:


1.parentElem.appendChild(node)
Añade node como último hijo de parentElem.
 */

/*
El siguiente ejemplo agrega un nuevo <li> al final de <ol>
 */

 <ol id="list">
  <li>0</li>
  <li>1</li>
  <li>2</li>
</ol>

<script>
  let newLi = document.createElement('li');
  newLi.innerHTML = '¡Hola, mundo!';

  list.appendChild(newLi);
</script>

// 2.insertBefore(node, nextSibling) => Inserta node antes de nextSibling dentro de parentElem.
<ol id="list">
  <li>0</li>
  <li>1</li>
  <li>2</li>
</ol>
<script>
  let newLi = document.createElement('li');
  newLi.innerHTML = '¡Hola, mundo!';

  list.insertBefore(newLi, list.children[1]);
</script>


//3. replaceChild(node, oldChild) => Reemplaza oldChild con node entre los hijos de parentElem.
<ol id="list">
  <li>0</li>
  <li>1</li>
  <li>2</li>
</ol>

<script>
  let li = list.firstElementChild;
  list.removeChild(li);
</script>



// 4. removeChild(node) => Quita node de parentElem (asumiendo que node es su hijo).
<ol id="list">
  <li>0</li>
  <li>1</li>
  <li>2</li>
</ol>

<script>
  let li = list.firstElementChild;
  list.removeChild(li);
</script>

// 5. document.write() => Método MUY antiguo, no se usa a hoy. Puede borrar toda la página.
<p>En algún lugar de la página...</p>
<script>
  document.write('<b>Saludos de JS</b>');
</script>
<p>Fin</p>

/*
El llamado a document.write(html) escribe el html en la página “aquí y ahora”. El string html puede ser generado dinámicamente, así que es muy flexible. Podemos usar JavaScript para crear una página completa al vuelo y escribirla.

El método viene de tiempos en que no había DOM ni estándares… Realmente viejos tiempos. Todavía vive, porque hay scripts que lo usan.

En scripts modernos rara vez lo vemos, por una importante limitación:

El llamado a document.write solo funciona mientras la página está cargando.
 */


// RESUMEN
/*

Métodos para crear nuevos nodos:

document.createElement(tag) – crea un elemento con la etiqueta HTML dada
document.createTextNode(value) – crea un nodo de texto (raramente usado)
elem.cloneNode(deep) – clona el elemento. Si deep==true, lo clona con todos sus descendientes.
Inserción y eliminación:

node.append(...nodes or strings) – inserta en node, al final
node.prepend(...nodes or strings) – inserta en node, al principio
node.before(...nodes or strings) –- inserta inmediatamente antes de node
node.after(...nodes or strings) –- inserta inmediatamente después de node
node.replaceWith(...nodes or strings) –- reemplaza node
node.remove() –- quita el node.
Los strings de texto son insertados “como texto”.

También hay métodos “de vieja escuela”:

parent.appendChild(node)
parent.insertBefore(node, nextSibling)
parent.removeChild(node)
parent.replaceChild(newElem, node)
Todos estos métodos devuelven node.

Dado cierto HTML en html, elem.insertAdjacentHTML(where, html) lo inserta dependiendo del valor where:

"beforebegin" – inserta html inmediatamente antes de elem
"afterbegin" – inserta html en elem, al principio
"beforeend" – inserta html en elem, al final
"afterend" – inserta html inmediatamente después deelem
También hay métodos similares, elem.insertAdjacentText y elem.insertAdjacentElement, que insertan strings de texto y elementos, pero son raramente usados.

Para agregar HTML a la página antes de que haya terminado de cargar:

document.write(html)
Después de que la página fue cargada tal llamada borra el documento. Puede verse principalmente en scripts viejos.
 */













