/*
1. Los 3 Errores Típicos (y por qué falla el Drag & Drop simple)Si intentas hacer un arrastre básico usando solo mousemove, te vas a chocar con tres problemas molestos:El arrastre nativo del navegador interfiere: Si intentas arrastrar un elemento (como una imagen o un texto seleccionado), el navegador iniciará su propio arrastre nativo. Verás que aparece un "fantasma" del elemento y tu código de JavaScript se congelará o se romperá.La solución: Cancelar el evento dragstart retornando false (elemento.ondragstart = () => false).El "salto" de posición (el desfase): Si simplemente pones tarjeta.style.left = e.pageX + 'px', el elemento saltará de golpe haciendo que su esquina superior izquierda $(0,0)$ se alinee exactamente con la punta de tu cursor. Se ve horrible.La solución: Calcular la distancia exacta (los "shifts" u offsets) entre donde hiciste clic dentro del objeto y sus bordes.Determinar sobre qué elemento estamos soltando (document.elementFromPoint): Si quieres arrastrar una pelota y soltarla dentro de una canasta, ¿cómo sabe la canasta que la pelota está encima?No puedes usar un simple mouseover en la canasta, porque la pelota está físicamente encima del cursor, tapando la canasta. Para el navegador, siempre estás encima de la pelota.La solución: Ocultar un milisegundo la pelota, usar document.elementFromPoint(x, y) para "mirar" qué hay abajo del cursor, y volver a mostrar la pelota.

2. El Algoritmo Profesional de Drag & Drop
Para lograr un sistema impecable, el flujo de eventos se diseña así:
*/

// 1. Al presionar el mouse (mousedown)
elemento.addEventListener('mousedown', (event) => {

  // A. Calcular distancias internas (shiftX, shiftY)
  let shiftX = event.clientX - elemento.getBoundingClientRect().left;
  let shiftY = event.clientY - elemento.getBoundingClientRect().top;

  // B. Preparar el elemento (dejarlo en position: absolute y pasarlo al body para que nada lo tape)
  elemento.style.position = 'absolute';
  elemento.style.zIndex = 1000;
  document.body.append(elemento);

  // C. Función para moverlo con el mouse
  function moverA(pageX, pageY) {
    elemento.style.left = pageX - shiftX + 'px';
    elemento.style.top = pageY - shiftY + 'px';
  }

  // D. Moverlo inmediatamente a la posición inicial
  moverA(event.pageX, event.pageY);

  // E. Escuchar el movimiento en el document
  function onMouseMove(event) {
    moverA(event.pageX, event.pageY);
    
    // AQUÍ VA LA MAGIA PARA DETECTAR DÓNDE SE SULTA (Drop Target):
    // Escondemos temporalmente el elemento arrastrado
    elemento.hidden = true;
    // Tomamos el elemento que esté justo debajo de esas coordenadas
    let elementoAbajo = document.elementFromPoint(event.clientX, event.clientY);
    // Volvemos a mostrar nuestro elemento arrastrado
    elemento.hidden = false;
    
    if (!elementoAbajo) return;
    
    // Aquí puedes verificar si 'elementoAbajo' es tu dropzone o canasta
  }

  document.addEventListener('mousemove', onMouseMove);

  // F. Al soltar el mouse (mouseup), limpiar todo
  document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', onMouseMove);
  }, { once: true });

});

// 2. Prevenir el arrastre nativo del navegador
elemento.ondragstart = () => false;

/*
3. Entendiendo document.elementFromPoint(x, y)Esta es la joya de la corona de esta lección. Es un método nativo del navegador que te dice: "Oye navegador, si yo disparara un láser en la coordenada $(x, y)$ de la pantalla, ¿a qué elemento HTML le pegaría primero?".Como tu elemento arrastrado está pegado al cursor, el láser siempre le pegaría a él mismo. Por eso el truco de:elemento.hidden = true (Nos hacemos invisibles).let abajo = document.elementFromPoint(x, y) (Disparamos el láser para ver qué hay al fondo).elemento.hidden = false (Nos volvemos a hacer visibles).Este ciclo ocurre tan rápido (en microsegundos) que el ojo humano no nota que el elemento desaparece, pero le permite a JavaScript saber exactamente sobre qué caja o zona está flotando el objeto.¿Cuál es la diferencia con la API "Drag and Drop" nativa de HTML5?En la lección anterior del Quiz usamos la API nativa (dragstart, drop, etc.). Esa API es fantástica para mover cosas simples, pero tiene dos grandes problemas:No puedes personalizar cómo se ve el elemento mientras lo arrastras de manera libre (el navegador crea una "imagen fantasma" semitransparente muy rígida).No funciona bien en dispositivos móviles de forma nativa.Programar tu propio Drag and Drop con mousedown y mousemove como lo hace esta lección te da el control absoluto de la animación, el diseño, la trayectoria física y el comportamiento del objeto arrastrado.
*/
