// Árbol del Modelo de Objetos del Documento (DOM)

/*
La estructura de un documento HTML son las etiquetas.

Según el Modelo de Objetos del Documento (DOM), cada etiqueta HTML es un objeto. Las etiquetas anidadas son llamadas “hijas” de la etiqueta que las contiene. El texto dentro de una etiqueta también es un objeto.

Todos estos objetos son accesibles empleando JavaScript, y podemos usarlos para modificar la página.

Por ejemplo, document.body es el objeto que representa la etiqueta <body>.

Ejecutar el siguiente código hará que el <body> sea de color rojo durante 3 segundos:
*/

document.body.style.background = 'red';
setTimeout(() => document.body.style.background = '', 3000);
/*
El DOM es una interfaz de programación para los documentos HTML. Nos permite acceder y modificar la estructura, estilo y contenido de un documento.
El DOM representa el documento como una estructura de árbol, donde cada nodo es un objeto que representa una parte del documento. Por ejemplo, las etiquetas HTML son nodos, y el texto dentro de las etiquetas también es un nodo.

El DOM es una parte fundamental de la programación web, ya que nos permite interactuar con la página y crear experiencias dinámicas para los usuarios.
En resumen, el DOM es una representación en forma de árbol de un documento HTML, donde cada nodo es un objeto que representa una parte del documento. Nos permite acceder y modificar la estructura, estilo y contenido de la página web utilizando JavaScript.
*/


// Ejemplo real pra demostrar el arbol del modelo DOM

/*
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Árbol del Modelo de Objetos del Documento (DOM)</title>
  </head>
  <body><
    /body>
    <h1>Árbol del Modelo de Objetos del Documento (DOM)</h1>
    <p>El DOM es una interfaz de programación para los documentos HTML.</p>
  </body>
</html>
*/




