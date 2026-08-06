// Scripts: async, defer 
/*
 ========================== 1. Claridad ==========================
¿Qué problema intentan resolver async y defer?

Cuando el navegador encuentra una etiqueta <script>, se detiene.

Ejemplo:

<!DOCTYPE html>

<html>

<head>

<script src="app.js"></script>

</head>

<body>

<h1>Hola</h1>

<p>Bienvenido</p>

</body>

</html>

¿Qué hace el navegador?

Empieza a leer el HTML
        │
        ▼
Encuentra <script>
        │
        ▼
DETENER TODO
        │
        ▼
Descargar app.js
        │
        ▼
Ejecutar app.js
        │
        ▼
Continuar leyendo el HTML

Es decir, el HTML deja de construirse mientras el navegador descarga y ejecuta el JavaScript.

Si app.js pesa mucho o la conexión es lenta, el usuario verá una página que tarda más en aparecer.
*/

// ========================== 2. Entendimiento  ==========================
/*
Sin async ni defer
<script src="app.js"></script>
Flujo
Leer HTML

↓

Encontrar script

↓

Pausar

↓

Descargar

↓

Ejecutar

↓

Continuar leyendo HTML

Consecuencia:

Bloquea el renderizado.
El DOM todavía no está completo.
Puede producir errores si buscas elementos que aún no existen.
defer
<script src="app.js" defer></script>

Con defer, el navegador cambia su comportamiento.

Flujo
Leer HTML
        │
        ├───────────────┐
        ▼               │
Seguir leyendo HTML     │
        │               │
        ▼               │
Construir el DOM        │
        │               │
        ▼               │
HTML terminado          │
        │               │
        ▼               │
Ejecutar app.js ◄───────┘

Mientras el navegador construye la página, también descarga el archivo JavaScript en segundo plano.

Solo cuando el DOM está listo, ejecuta el script.

Ventajas de defer
No bloquea la carga del HTML.
El DOM ya existe.
Mantiene el orden entre varios scripts.
Es la opción más usada en aplicaciones web.
Ejemplo
<script src="config.js" defer></script>
<script src="app.js" defer></script>

Siempre ocurre:

config.js

↓

app.js

Aunque app.js se descargue primero.

El orden se respeta.

async

Ahora veamos:

<script src="analytics.js" async></script>

El comportamiento cambia.

Flujo
Leer HTML
        │
        ▼
Descargar script
        │
        ▼
Cuando termine...
        │
        ▼
Ejecutarlo inmediatamente

No espera al DOM.

No espera a otros scripts.

No respeta el orden.

Ejemplo
<script src="A.js" async></script>
<script src="B.js" async></script>

Puede ocurrir:

B

↓

A

o

A

↓

B

Depende de cuál termine de descargarse primero.

¿Por qué?

Porque async está pensado para scripts independientes.

Por ejemplo:

Google Analytics
Google Ads
Facebook Pixel
Chat de soporte
Herramientas de monitoreo

Estos scripts no necesitan esperar a otros.


*/


/*
Flujo real con defer
Usuario abre la página
          │
          ▼
Leer HTML
          │
          ▼
Descargar JavaScript
(en paralelo)
          │
          ▼
Construir DOM
          │
          ▼
DOMContentLoaded
          │
          ▼
Ejecutar scripts defer
          │
          ▼
Página interactiva
Flujo con async
Usuario abre la página
          │
          ▼
Leer HTML
          │
          ▼
Descargar script
          │
          ▼
¿Terminó?
     │
     ├── No → Seguir leyendo HTML
     │
     └── Sí → Ejecutarlo inmediatamente

Puede interrumpir momentáneamente el procesamiento del HTML.


Característica	Script normal	defer	async
Bloquea el HTML	✅ Sí	❌ No	❌ No
Espera al DOM	❌ No	✅ Sí	❌ No
Mantiene el orden entre scripts	✅ Sí	✅ Sí	❌ No
Ideal para la lógica principal de la aplicación	❌ No	✅ Sí	❌ No
Ideal para scripts externos independientes	❌ No	⚠️ A veces	✅ Sí

*/
















































