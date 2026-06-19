// Tamaño de elementos y desplazamiento
/*
Hay muchas propiedades en JavaScript que nos permiten leer información sobre el ancho, alto y otras características geométricas de los elementos.

A menudo necesitamos de ellas cuando movemos o posicionamos un elemento en JavaScript.
*/

// ========== Elemento de muestra ==========
// Como un elemento de muestra para demostrar las propiedades, usaremos el que se indica a continuación:
<div id="example">
  ...Texto...
</div>
<style>
  #example {
    width: 300px;
    height: 200px;
    border: 25px solid #E8C48F;
    padding: 20px;
    overflow: auto;
  }
</style>

/*
Este tiene borde, relleno y desplazamiento. El conjunto completo de funciones. No hay márgenes porque no son parte del elemento en sí, y no tienen propiedades especiales.
*/

// ========== Geometría del elemento ==========
/*
Comencemos a explotar las propiedades, iniciando desde el exterior del elemento.
*/
// 1. offsetParent
/*
El elemento offsetParent es el ancestro más cercano del elemento que es un elemento posicionado (es decir, su posición no es estática). Si no hay tal ancestro, entonces el offsetParent es el elemento body.
*/
console.log(example.offsetParent); // <body>...</body>

// 2. offsetLeft/offsetTop
/*
Estas propiedades nos dicen la distancia entre el borde del elemento y el borde de su offsetParent.
*/
console.log(example.offsetLeft); // 8px (distancia entre el borde del elemento y el borde del body)
console.log(example.offsetTop); // 8px (distancia entre el borde del elemento y el borde del body)

// 3. offsetWidth/offsetHeight
/*
Estas propiedades nos dicen el ancho y alto del elemento, incluyendo el relleno, el borde y la barra de desplazamiento (si la hay).
*/
console.log(example.offsetWidth); // 370px (300px de ancho + 25px de borde a cada lado + 20px de relleno a cada lado)
console.log(example.offsetHeight); // 270px (200px de alto + 25px de borde a cada lado + 20px de relleno a cada lado)

// 4. clientLeft/clientTop
/*
Estas propiedades nos dicen el ancho del borde del elemento. En nuestro caso, el borde es de 25px, por lo que ambas propiedades devolverán 25.
*/
console.log(example.clientLeft); // 25px (ancho del borde)
console.log(example.clientTop); // 25px (ancho del borde)

// 5. clientWidth/clientHeight
/*
Estas propiedades nos dicen el ancho y alto del área de contenido del elemento, incluyendo el relleno pero excluyendo el borde y la barra de desplazamiento.
*/
console.log(example.clientWidth); // 340px (300px de ancho + 20px de relleno a cada lado)
console.log(example.clientHeight); // 240px (200px de alto + 20px de relleno a cada lado)

// 6. scrollWidth/scrollHeight
/*
Estas propiedades nos dicen el ancho y alto del contenido del elemento, incluyendo el área visible y el área desplazada. Si el contenido no se desborda, entonces estas propiedades serán iguales a clientWidth/clientHeight.
*/
console.log(example.scrollWidth); // 340px (ancho del contenido, incluyendo el área visible y el área desplazada)
console.log(example.scrollHeight); // 240px (alto del contenido, incluyendo el área visible y el área desplazada)

// ========== Desplazamiento del elemento ==========
/*
Si el contenido del elemento se desborda, entonces podemos usar las propiedades scrollLeft y scrollTop para obtener o establecer la cantidad de desplazamiento horizontal y vertical del contenido.
*/
console.log(example.scrollLeft); // 0px (cantidad de desplazamiento horizontal)
console.log(example.scrollTop); // 0px (cantidad de desplazamiento vertical)
// Para establecer el desplazamiento, podemos asignar un valor a estas propiedades:
example.scrollLeft = 50; // Desplaza el contenido 50px hacia la derecha
example.scrollTop = 30; // Desplaza el contenido 30px hacia abajo


// ========== Resumen ==========
/*
- offsetParent: el ancestro más cercano que es un elemento posicionado.
- offsetLeft/offsetTop: distancia entre el borde del elemento y el borde de su offsetParent.
- offsetWidth/offsetHeight: ancho y alto del elemento, incluyendo el relleno, el borde y la barra de desplazamiento.
- clientLeft/clientTop: ancho del borde del elemento.
- clientWidth/clientHeight: ancho y alto del área de contenido del elemento, incluyendo el relleno pero excluyendo el borde y la barra de desplazamiento.
- scrollWidth/scrollHeight: ancho y alto del contenido del elemento, incluyendo el área visible y el área desplazada.
- scrollLeft/scrollTop: cantidad de desplazamiento horizontal y vertical del contenido.
*/

// EJEMPLO REAL
/*
Supongamos que tenemos un contenedor con contenido desplazable y queremos mostrar la cantidad de desplazamiento actual al usuario.
*/
<div id="scrollable" style="width: 200px; height: 100px; overflow: auto; border: 1px solid black;"> </div>

<div id="scrollInfo">Desplazamiento: 0px</div>

<script>
  const scrollable = document.getElementById('scrollable');
  const scrollInfo = document.getElementById('scrollInfo');
  scrollable.addEventListener('scroll', () => {
    const scrollLeft = scrollable.scrollLeft;
    const scrollTop = scrollable.scrollTop;
    scrollInfo.textContent = `Desplazamiento: ${scrollLeft}px horizontal, ${scrollTop}px vertical`;
  }
  );
</script>


























