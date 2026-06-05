// Entorno del navegador, especificaciones
/*
El lenguaje JavaScript fue creado inicialmente para los navegadores web. Desde entonces, ha evolucionado en un lenguaje con muchos usos y plataformas.

Una plataforma puede ser un navegador, un servidor web u otro host (“anfitrión”); incluso una máquina de café “inteligente”, si puede ejecutar JavaScript. Cada uno de ellos proporciona una funcionalidad específica de la plataforma. La especificación de JavaScript llama a esto entorno de host.

Un entorno host proporciona sus propios objetos y funciones adicionales al núcleo del lenguaje. Los navegadores web proporcionan un medio para controlar las páginas web. Node.js proporciona características del lado del servidor, etc.

Window : -> DOM (Document Object Model) -> BOM (Browser Object Model) -> Javascript (objectos, funciones, etc.)

El entorno de host del navegador se compone de:
- El modelo de objetos del documento (DOM), que proporciona objetos para representar y manipular la estructura de la página web.
- El modelo de objetos del navegador (BOM), que proporciona objetos para interactuar con el navegador y el entorno de ejecución.
- El núcleo de JavaScript, que proporciona los objetos y funciones básicos del lenguaje.
 */

/*
Hay un objeto “raíz” llamado window. Tiene dos roles:

Primero, es un objeto global para el código JavaScript, como se describe en el capítulo Objeto Global.
Segundo, representa la “ventana del navegador” y proporciona métodos para controlarla.
Por ejemplo, podemos usarlo como objeto global:
*/

alert("Hola"); // alert es una función de window

// O podemos usarlo explícitamente:
window.alert("Hola"); // Es lo mismo que el ejemplo anterior

// ================ DOM (Modelo de Objetos del Documento) ================
/*
El DOM es una interfaz de programación para los documentos HTML y XML. Proporciona una representación estructurada del documento como un árbol de objetos, y define métodos para acceder y manipular esos objetos.
Document Object Model, o DOM, representa todo el contenido de la página como objetos que pueden ser modificados.

El objeto document es el punto de entrada a la página. Con él podemos cambiar o crear cualquier cosa en la página
*/

// Por ejemplo: 
// cambiar el color de fondo a rojo
document.body.style.background = "red";

// deshacer el cambio después de 1 segundo
setTimeout(() => document.body.style.background = "", 1000);


// ================== BOM (Modelo de Objetos del Navegador) =================
/*
El BOM es un conjunto de objetos proporcionados por el navegador que permiten interactuar con el entorno del navegador. Incluye objetos como window, navigator, screen, history, location, etc.
*/

// Por ejemplo, el objeto navigator proporciona información sobre el navegador y el sistema operativo del usuario:
console.log(navigator.userAgent); // Muestra el agente de usuario del navegador

