// Estilos y clases
/*
Antes de profundizar en cómo JavaScript maneja las clases y los estilos, hay una regla importante. Aunque es lo suficientemente obvio, aún tenemos que mencionarlo.

Por lo general, hay dos formas de dar estilo a un elemento:

Crear una clase css y agregarla: <div class="...">
Escribir las propiedades directamente en style: <div style="...">.
JavaScript puede modificar ambos, clases y las propiedades de style.

Nosotros deberíamos preferir las clases css en lugar de style. Este último solo debe usarse si las clases “no pueden manejarlo”.
*/

// =================== 1. Clases dinámicas: className y classList ===================
/*
Cambiar una clase es una de las acciones más utilizadas.

En la antigüedad, había una limitación en JavaScript: una palabra reservada como "class" no podía ser una propiedad de un objeto. Esa limitación no existe ahora, pero en ese momento era imposible tener una propiedad "class", como elem.class.

Entonces para clases de similares propiedades, "className" fue introducido: el elem.className corresponde al atributo "class".
*/

// ****************** elem.className ******************
/*
Sustituye toda la cadena de texto de las clases del elemento. Si el elemento tenía tres clases y usas className, las borrará todas y pondrá solo la nueva.
*/

// Ejemplo real: Quieres resetear por completo el estado visual de un botón de compra en tu tienda.
let botonComprometer = document.getElementById('btn-enviar');

// Esto borra cualquier clase previa (como 'btn-deshabilitado' o 'btn-alerta') 
// y deja únicamente las clases que definas aquí.
botonComprometer.className = "btn btn-exito activo";


// ****************** elem.classList ******************
/*
Es un objeto especial con métodos para manipular clases individualmente sin afectar a las demás. Es el método más utilizado en el día a día.

elem.classList.add("clase"): Añade una clase.

elem.classList.remove("clase"): Elimina una clase.

elem.classList.toggle("clase"): Si la clase existe, la quita; si no existe, la añade (ideal para interruptores o menús desplegables).

elem.classList.contains("clase"): Devuelve true o false si el elemento tiene esa clase.
*/

// Ejemplo real: Menú colapsable de navegación (Navbar) o Carrito lateral. Imagina el botón del carrito de compras que, al presionarlo, despliega un panel lateral desde la derecha.
const panelCarrito = document.getElementById('carrito-lateral');
const botonAlternar = document.getElementById('abrir-carrito');

botonAlternar.addEventListener('click', () => {
  // Si tiene la clase 'visible', la quita (esconde el carrito). 
  // Si no la tiene, la pone (muestra el carrito).
  panelCarrito.classList.toggle('visible');
  
  // Verificamos si quedó abierto para cambiar el texto del botón
  if (panelCarrito.classList.contains('visible')) {
    console.log("El usuario está mirando el carrito");
  }
});


// =================== 2. Estilos en línea: La propiedad style ===================

/*
La propiedad elem.style corresponde directamente a lo que pones en el atributo style="..." de HTML.
Reglas de escritura (CamelCase)En CSS las propiedades usan guiones (background-color, margin-top). En JavaScript, como el guion es un signo de resta, se transforma a camelCase:background-color $\rightarrow$ elem.style.backgroundColormargin-top $\rightarrow$ elem.style.marginTopz-index $\rightarrow$ elem.style.zIndex¡No olvides las unidades!Si asignas un número a una propiedad que requiere unidades (como px, %, rem), debes concatenar la unidad como un string. Si pones un número solo, no funcionará.
*/
// INCORRECTO: No hace nada
elem.style.marginTop = 20; 

// CORRECTO: Aplica el margen
elem.style.marginTop = "20px";

/*
Ejemplo real: Barra de progreso de envío gratis dinámico
Supongamos que en tu tienda quieres mostrar visualmente cuánto le falta al cliente para obtener "Envío gratis" según el valor de su carrito. Como el porcentaje cambia constantemente, no puedes usar una clase fija; necesitas usar estilos en línea.
*/


<div class="barra-contenedor">
  <div id="progresoEnvio" style="width: 0%; background-color: green; height: 10px;"></div>
</div>

function actualizarBarraProgreso(montoActual, montoMinimo = 100000) {
  const barra = document.getElementById('progresoEnvio');
  
  // Calculamos el porcentaje del total necesario
  let porcentaje = (montoActual / montoMinimo) * 100;
  if (porcentaje > 100) porcentaje = 100;

  // Modificamos el estilo en línea dinámicamente
  barra.style.width = `${porcentaje}%`;
  
  // Si llegó al 100%, cambiamos el color de la barra dinámicamente
  if (porcentaje === 100) {
    barra.style.backgroundColor = "#28a745"; // Verde éxito
  }
}

// Ejemplo de uso: El usuario lleva $50.000 COP en el carrito
actualizarBarraProgreso(50000); // La barra se moverá al 50%

// =================== 3. Resetear estilos en línea ===================
/*
Si aplicaste un estilo con elem.style y luego quieres que el navegador vuelva a usar el estilo que estaba definido originalmente en tu archivo CSS externo, no intentes adivinar cuál era. Simplemente asígnale un string vacío "".
*/

let alerta = document.getElementById('notificacion');

// Ocultamos el elemento temporalmente con JS
alerta.style.display = "none";

// ... tiempo después, queremos que vuelva a mostrarse respetando si el CSS original decía flex, block o grid:
alerta.style.display = ""; // Elimina el estilo en línea por completo

// Si necesitas borrar todos los estilos en línea aplicados a la vez, puedes usar el método abreviado elem.style.cssText:
// Sobrescribe todo el atributo style de un solo golpe
elem.style.cssText = "color: red; background: yellow; margin-top: 10px;";

// O para borrar absolutamente todos los estilos en línea:
elem.style.cssText = "";

// Cuidado con las unidades CSS
/*
No olvidar agregar las unidades CSS a los valores.

Por ejemplo, nosotros no debemos establecer elem.style.top a 10, sino más bien a 10px. De lo contrario no funcionaría:

 */
<body>
  <script>
    // ¡no funciona!
    document.body.style.margin = 20;
    alert(document.body.style.margin); // '' (cadena vacía, la asignación es ignorada)

    // ahora agregamos la unidad CSS (px) y esta sí funciona
    document.body.style.margin = '20px';
    alert(document.body.style.margin); // 20px

    alert(document.body.style.marginTop); // 20px
    alert(document.body.style.marginLeft); // 20px
  </script>
</body>


// =================== 4. El peligro de leer estilos con elem.style: getComputedStyle ==============
/*
Un error extremadamente común cuando se está aprendiendo el DOM es intentar leer el valor de un estilo usando elem.style.

La sintaxis es getComputedStyle(element, [pseudo])

element
Elemento del cual se va a leer el valor.

pseudo
Un pseudo-elemento es requerido, por ejemplo ::before. Una cadena vacía o sin argumento significa el elemento mismo.

El resultado es un objeto con estilos, como elem.style, pero ahora con respecto a todas las clases CSS.
*/

  <style> body { color: red; margin: 5px } </style>


  <script>
    let computedStyle = getComputedStyle(document.body);

    // ahora podemos leer los márgenes y el color de ahí

    alert( computedStyle.marginTop ); // 5px
    alert( computedStyle.color ); // rgb(255, 0, 0)
  </script>

/*

Ejemplo real: Calcular la posición para un menú flotante (Tooltip)
Quieres posicionar un letrero de ayuda flotante exactamente encima de una tarjeta de producto, por lo que necesitas saber las medidas reales de esa tarjeta calculadas por el CSS.
*/

let tarjeta = document.getElementById('producto-destacado');

// Obtenemos todos los estilos reales computados por el navegador
let estilosReales = window.getComputedStyle(tarjeta);

// Ahora sí podemos leer el ancho y los márgenes reales
console.log(estilosReales.width);       // Ejemplo: "250px"
console.log(estilosReales.marginTop);   // Ejemplo: "16px"
console.log(estilosReales.color);       // Muestra el color final en formato rgb(), ej: "rgb(51, 51, 51)"

















