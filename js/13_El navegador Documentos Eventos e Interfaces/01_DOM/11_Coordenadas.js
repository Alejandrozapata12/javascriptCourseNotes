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

// ============= elementFromPoint(x, y) =============
/*
El método document.elementFromPoint(x, y) devuelve el elemento más profundo en la jerarquía del DOM ubicado en las coordenadas (x, y) relativas a la ventana.
*/

document.addEventListener('click', function(event) {
  let elem = document.elementFromPoint(event.clientX, event.clientY);
  console.log(elem.tagName);
})

























