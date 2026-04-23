// Objeto Global
/*
El objeto global proporciona variables y funciones que están disponibles en cualquier lugar. Por defecto, aquellas que están integradas en el lenguaje o el entorno.

En un navegador se denomina window, para Node.js esglobal, para otros entornos puede tener otro nombre.

Recientemente, se agregó globalThis al lenguaje, como un nombre estandarizado para un objeto global, que debería ser compatible con todos los entornos al igual que con los principales navegadores.

Aquí usaremos window, suponiendo que nuestro entorno sea un navegador. Si su script puede ejecutarse en otros entornos, es mejor usar globalThis en su lugar.

Se puede acceder directamente a todas las propiedades del objeto global:
*/

alert("Hello");
// Es lo mismo que 
window.alert("Hello");

/*
En el ejemplo anterior, alert es una función global, por lo que se puede llamar directamente. Sin embargo, también se puede acceder a ella a través del objeto global window.

*/

// Uso para polyfills
/*
Podemos usar el objeto global para probar el soporte de características modernas del lenguaje .

Por ejemplo, probar si existe un objeto Promise incorporado (no existe en navegadores muy antiguos):

*/
if (!window.Promise){
  alert("Tu navegador no soporta promesas");
};



































