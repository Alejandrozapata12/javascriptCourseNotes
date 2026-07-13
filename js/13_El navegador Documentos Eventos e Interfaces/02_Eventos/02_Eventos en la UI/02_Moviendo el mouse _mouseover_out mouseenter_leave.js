// Moviendo el mouse: mouseover/out, mouseenter/leave

/*
Eventos mouseover/mouseout, relatedTarget
El evento mouseover se produce cuando el cursor del mouse aparece sobre un elemento y mouseout cuando se va.

A. El movimiento continuo
mousemove: Se dispara sin parar, cada vez que el mouse se mueve aunque sea un solo píxel dentro del elemento. Es genial seguir el cursor, pero ten cuidado: ¡puede ejecutarse cientos de veces por segundo!


B. El bando con Bubbling: mouseoverymouseout
Estos dos eventos son muy particulares porque tienen burbujeo (propagación) . Esto significa que si entras a un hijo, el evento "sube" al padre.

mouseover: Se dispara cuando el puntero entra a un elemento... O cuando entra a cualquiera de sus elementos hijos .

mouseout: Se dispara cuando el puntero sale de un elemento... O cuando entra a uno de sus hijos (porque para el navegador, "saliste" del elemento contenedor para pisar el hijo).

C. El bando "Inteligente": mouseenterymouseleave
Estos son mucho más limpios y amigables para interfaces comunes (como menús desplegables). NO tienen burbujas .

mouseenter: Se dispara únicamente cuando el ratón cruza el borde exterior del elemento padre. Si te mueves entre los hijos de adentro, no pasa nada, se queda tranquilo.

mouseleave: Se dispara únicamente cuando el mouse sale por completo del borde exterior del elemento padre.

2. La gran diferencia: mouseovervsmouseenterImagina que tienes una caja grande ( #padre) y adentro hay un texto ( #hijo).Si usas mouseenter: Pasas el mouse desde afuera hacia adentro de la caja$\rightarrow$Se dispara 1 vez . Te mueves encima del texto de adentro$\rightarrow$ No pasa nada .Si usas mouseover: Pasas el mouse desde afuera hacia la caja$\rightarrow$Se dispara 1 vez . Te mueves encima del texto de adentro$\rightarrow$ ¡Se dispara otra vez! (Porque el evento flotó desde el hijo hacia el padre).

3. Propiedades clave: event.targetyevent.relatedTargetPara los eventos de entrada y salida, JavaScript te da dos herramientas para saber exactamente de dónde viene y hacia dónde va el mouse:target: El elemento exacto que está bajo el mouse en este momento.relatedTarget: El elemento del que venía el mouse (en mouseover) o el elemento hacia el cual va el mouse (en mouseout).

*/

// Elementos del bando OVER / OUT
const cajaOver = document.getElementById('caja-over');
const countOver = document.getElementById('count-over');
let numOver = 0;

cajaOver.addEventListener('mouseover', () => {
  numOver++;
  countOver.textContent = numOver;
});

// Elementos del bando ENTER / LEAVE
const cajaEnter = document.getElementById('caja-enter');
const countEnter = document.getElementById('count-enter');
let numEnter = 0;

cajaEnter.addEventListener('mouseenter', () => {
  numEnter++;
  countEnter.textContent = numEnter;
});










































