// Página: DOMContentLoaded, load, beforeunload, unload
/*
Excelente. Este tema es fundamental porque responde una pregunta que todos los desarrolladores se hacen al empezar:

¿Cuándo puedo empezar a manipular el DOM?

Si intentas acceder a un elemento antes de que exista, obtendrás errores como:

Cannot read properties of null

Entender DOMContentLoaded, load y otros eventos de carga te ayudará a evitar ese problema y a saber en qué momento la página está realmente lista.
*/

// ================== 1. Claridad ==================
/*
Cuando el navegador abre una página no la construye de una sola vez. Lo hace por etapas.

Imagina este HTML:
<!DOCTYPE html>
<html>

<head>

<link rel="stylesheet" href="style.css">

<script src="app.js"></script>

</head>

<body>

<h1>Hola</h1>

<img src="foto.jpg">

</body>

</html>

El navegador sigue aproximadamente este proceso:

Empieza a leer el HTML
        │
        ▼
Construye el DOM
        │
        ▼
Carga CSS
        │
        ▼
Carga imágenes
        │
        ▼
Carga videos
        │
        ▼
Página completamente lista

Dependiendo del momento, se disparan distintos eventos.

Los principales son:

DOMContentLoaded
load
beforeunload
unload (hoy en día casi no se recomienda usar)
 */


// ==================== 2. Entendimiento  ====================
/*
 *************************** ¿Qué es DOMContentLoaded? ***************************

Es un evento que ocurre cuando:

El navegador terminó de leer el HTML.
El DOM ya fue construido.
Los elementos ya existen.

Pero no espera a que carguen:

imágenes
videos
iframes
otros recursos pesados

isualmente:

HTML
    ✔

DOM
    ✔

CSS
    ✔

Imágenes
    ❌

Videos
    ❌


*************************** ¿Qué es load?   ***************************
load ocurre mucho después.

Espera absolutamente todo.

HTML
✔

DOM
✔

CSS
✔

Imágenes
✔

Videos
✔

Fuentes
✔

*************************** ¿Qué hace defer? ***************************


Cuando escribes:

<script src="app.js" defer></script>

El navegador:

Sigue leyendo el HTML.
Construye el DOM.
Luego ejecuta el script.

Gracias a eso, muchas veces ya no necesitas escuchar DOMContentLoaded.



*************************** ¿Qué pasa sin defer? ***************************

¿Qué pasa sin defer?
<head>

<script src="app.js"></script>

</head>

El navegador hace esto:

Lee HTML

↓

Encuentra script

↓

Se detiene

↓

Ejecuta JavaScript

↓

Continúa leyendo HTML

Si el script intenta buscar un elemento que aún no fue leído:

document.querySelector("#titulo")

Obtendrás:

null


*************************** beforeunload  ***************************
Ocurre cuando el usuario intenta salir de la página.

Ejemplo.

window.addEventListener("beforeunload",(event)=>{

});

Se usa para advertir.

¿Seguro que deseas salir?

Hay cambios sin guardar.

Muy común en:

Google Docs
Formularios largos
Editores de texto



*************************** unload *************************** 

Antes se utilizaba para:

Cerrar conexión

Guardar datos

Enviar estadísticas

Actualmente se desaconseja porque no es fiable en todos los navegadores y puede no ejecutarse, especialmente en dispositivos móviles.

Hoy es más común usar:

visibilitychange
navigator.sendBeacon()

*/


/*

FLUJO COMPLETO

Navegador abre la página
          │
          ▼
Lee el HTML
          │
          ▼
Construye el DOM
          │
          ▼
DOMContentLoaded
          │
          ▼
Carga imágenes, videos y recursos
          │
          ▼
load
          │
          ▼
Usuario navega por la página
          │
          ▼
Intenta salir
          │
          ▼
beforeunload
*/











































