// Tamaño de ventana y desplazamiento
/*
¿Cómo encontramos el ancho y el alto de la ventana del navegador? ¿Cómo obtenemos todo el ancho y la altura del documento, incluida la parte desplazada? ¿Cómo desplazamos la página usando JavaScript?

Para la mayoría de estas cuestiones, podemos usar el elemento de documento raíz document.documentElement, que corresponde a la etiqueta <html>. Pero hay métodos y peculiaridades adicionales lo suficientemente importantes para considerar.
*/

// ================= Ancho/alto de la ventana =================
/*
Para obtener el ancho y alto de la ventana, podemos usar clientWidth / clientHeight de document.documentElement:
*/

console.log(document.documentElement.clientWidth); // Ancho de la ventana
console.log(document.documentElement.clientHeight); // Alto de la ventana

/*
Sin embargo, en algunos navegadores antiguos, document.documentElement.clientWidth/clientHeight puede ser 0. En ese caso, podemos usar window.innerWidth/innerHeight:
*/

console.log(window.innerWidth); // Ancho de la ventana
console.log(window.innerHeight); // Alto de la ventana


// ================= Ancho/alto del documento =================
/*
Para obtener el ancho y alto de todo el documento, incluyendo la parte desplazada, podemos usar scrollWidth/scrollHeight de document.documentElement:
*/
console.log(document.documentElement.scrollWidth); // Ancho del documento
console.log(document.documentElement.scrollHeight); // Alto del documento

// ================= Obtener el desplazamiento actual =================
/*
Los elementos DOM tienen su estado de desplazamiento actual en sus propiedades elem.scrollLeft/scrollTop.

El desplazamiento de documentos, document.documentElement.scrollLeft / Top funciona en la mayoría de los navegadores, excepto los más antiguos basados en WebKit, como Safari (bug 5991), donde deberíamos usar document.body en lugar de document.documentElement.

Afortunadamente, no tenemos que recordar estas peculiaridades en absoluto, porque el desplazamiento está disponible en las propiedades especiales window.pageXOffset/pageYOffset:

alert('Desplazamiento actual desde la parte superior: ' + window.pageYOffset);
alert('Desplazamiento actual desde la parte izquierda: ' + window.pageXOffset);
Estas propiedades son de solo lectura.
*/


// ================= Desplazamiento: scrollTo, scrollBy, scrollIntoView =================
/*
Los elementos regulares se pueden desplazar cambiando scrollTop/scrollLeft.

Nosotros podemos hacer lo mismo para la página usando document.documentElement.scrollTop/Left (excepto Safari, donde document.body.scrollTop/Left debería usarse en su lugar).

Alternativamente, hay una solución más simple y universal: métodos especiales window.scrollBy(x,y) y window.scrollTo(pageX,pageY).

El método scrollBy(x, y) desplaza la página en relación con su posición actual. Por ejemplo, scrollBy(0,10) desplaza la página 10px hacia abajo.

El siguiente botón demuestra esto:

window.scrollBy(0,10)

El método scrollTo(pageX, pageY) desplaza la página a coordenadas absolutas, de modo que la esquina superior izquierda de la parte visible tiene coordenadas (pageX, pageY) en relación con la esquina superior izquierda del documento. Es como configurar scrollLeft / scrollTop.

Para desplazarnos hasta el principio, podemos usar scrollTo(0,0).

window.scrollTo(0,0)
 */


// ================= scrollIntoView =================
/*
Para completar, cubramos un método más: elem.scrollIntoView(top).

La llamada a elem.scrollIntoView(top) desplaza la página para hacer visible elem. Tiene un argumento:

si top=true (ese es el valor predeterminado), la página se desplazará para que aparezca element en la parte superior de la ventana. El borde superior del elemento está alineado con la parte superior de la ventana.
si top=false, la página se desplaza para hacer que element aparezca en la parte inferior. El borde inferior del elemento está alineado con la parte inferior de la ventana.
El botón a continuación desplaza la página para mostrarse en la parte superior de la ventana:

this.scrollIntoView()

Y este botón desplaza la página para mostrarla en la parte inferior:

this.scrollIntoView(false)
*/

// ================= Prohibir el desplazamiento =================
/*
A veces necesitamos hacer que el documento sea “inescrutable”. Por ejemplo, cuando necesitamos cubrirlo con un mensaje grande que requiere atención inmediata, y queremos que el visitante interactúe con ese mensaje, no con el documento.

Para hacer que el documento sea inescrutable, es suficiente establecer document.body.style.overflow="hidden". La página se congelará en su desplazamiento actual.

Prueba esto:

document.body.style.overflow = ‘hidden’

document.body.style.overflow = ‘’

El primer botón congela el desplazamiento, el segundo lo reanuda.

Podemos usar la misma técnica para “congelar” el desplazamiento para otros elementos, no solo para document.body.

El inconveniente del método es que la barra de desplazamiento desaparece. Si ocupaba algo de espacio, entonces ese espacio ahora es libre y el contenido “salta” para llenarlo.

Eso parece un poco extraño, pero puede solucionarse si comparamos clientWidth antes y después del congelamiento, y si aumentó (la barra de desplazamiento desapareció) luego agregue padding a document.body en lugar de la barra de desplazamiento, para que mantenga el ancho del contenido igual.
*/

// EJEMPLO REAL













