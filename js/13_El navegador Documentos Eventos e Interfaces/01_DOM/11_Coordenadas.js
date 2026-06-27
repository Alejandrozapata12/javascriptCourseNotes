// Coordenadas
/*
Para mover elementos debemos estar familiarizados con las coordenadas.

La mayoría de los métodos de JavaScript tratan con uno de dos sistemas de coordenadas:

Relativo a la ventana: similar a position:fixed, calculado desde el borde superior/izquierdo de la ventana.
Designaremos estas coordenadas como clientX/clientY, el razonamiento para tal nombre se aclarará más adelante, cuando estudiemos las propiedades de los eventos.
Relative al documento – similar a position:absolute en la raíz del documento, calculado a partir del borde superior/izquierdo del documento.
Las designaremos como pageX/pageY.
Cuando la página se desplaza hasta el comienzo, de modo que la esquina superior/izquierda de la ventana es exactamente la esquina superior/izquierda del documento, estas coordenadas son iguales entre sí. Pero después de que el documento cambia, las coordenadas relativas a la ventana de los elementos cambian, a medida que los elementos se mueven a través de la ventana, mientras que las coordenadas relativas al documento permanecen iguales.
*/

// ============= Coordenadas de elemento: getBoundingClientRect =============
/*
El método elem.getBoundingClientRect() devuelve las coordenadas de la ventana para un rectángulo mínimo que encasilla a elem como un objeto de la clase interna DOMRect.

Propiedades principales de DOMRect:

x/y: coordenadas X/Y del origen del rectángulo con relación a la ventana.
width/height: ancho/alto del rectángulo (pueden ser negativos).
Adicionalmente existen estas propiedades derivadas:

top/bottom: coordenada Y para el borde superior/inferior del rectángulo.
left/right: coordenada X para el borde izquierdo/derecho del rectángulo.
*/

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
  let rect = btn.getBoundingClientRect();
  console.log(rect);
})

// Daria como respuesta algo como esto, como ejemplo claramente: 
/*
{
    x: 100,
    y: 250,
    width: 180,
    height: 50,
    top: 250,
    left: 100,
    right: 280,
    bottom: 300
}
*/


// ============= elementFromPoint(x, y) =============
/*
El método document.elementFromPoint(x, y) devuelve el elemento más profundo en la jerarquía del DOM ubicado en las coordenadas (x, y) relativas a la ventana.
*/

document.addEventListener('click', function(event) {
  let elem = document.elementFromPoint(event.clientX, event.clientY);
  console.log(elem.tagName);
})

// Ejemplo: 
const elemento = document.elementFromPoint(300, 200);
console.log(elemento); // Resultado = <button>Click me</button> (si el botón está en esas coordenadas)


//   ============== RESUMEN =================

/*
1. Hay 2 sistema de coordenadas (Ventana y documento)

 * Coordenadas de ventana (Viewport) = clientX/clientY y getBoundingClientRect(), se calculan de acuerdo a la parte superior/izquierda de la ventana, es decir, parte visible del navegador.Cambia cuando se hace scroll

  document.addEventListener("click", (event) => {
    console.log(event.clientX, event.clientY);
});
  

 * Coordenadas de documento = pageX/pageY , Se calculan desde el inicio del documento completo. No cambia cuando se hace scroll.

document.addEventListener("click", (event) => {
    console.log(event.pageX, event.pageY);
});

2. getBoundingClientRect() => Devuelve la posición y el tamaño de un elemento respecto al viewport.

const caja = document.QuerySelector(".caja");
const rect = caja.getBoundingClientRect();
console.log(rect.top, rect.left, rect.width, rect.height); // Devuelve las coordenadas y dimensiones de la caja en relación al viewport.
 
 Se usa para:

Posicionar tooltips.
Mostrar menús contextuales.
Detectar si un elemento está visible.
Calcular posiciones para animaciones.

3. Convertir coordenadas al documento -> Si necesitas la posición absoluta dentro de la página:

const rect = elemento.getBoundingClientRect();

const left = rect.left + window.scrollX;
const top = rect.top + window.scrollY;


4. elementFromPoint() => Permite saber qué elemento hay en unas coordenadas específicas del viewport.
const elemento = document.elementFromPoint(300, 150);
console.log(elemento);

 */


























