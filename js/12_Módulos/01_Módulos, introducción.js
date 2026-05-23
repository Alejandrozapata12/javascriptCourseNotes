// Módulos introducción

// ======= Qué es un módulo? =======
/*
Un módulo es simplemente un archivo. Un script es un módulo. Tan sencillo como eso.

Los módulos pueden cargarse entre sí y usar directivas especiales export e import para intercambiar funcionalidad, llamar a funciones de un módulo de otro:

La palabra clave export etiqueta las variables y funciones que necesitan ser accesibles desde fuera del módulo actual.
import permite importar funcionalidades desde otros módulos.
*/
// Por ejemplo, si tenemos un archivo sayHi.js que exporta una función:

// 📁 sayHi.js
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}
// …Luego, otro archivo puede importarlo y usarlo:

// 📁 main.js
import {sayHi} from './sayHi.js';

alert(sayHi); // function...
sayHi('John'); // Hello, John!

/*
Los módulos funcionan solo a través de HTTP(s), no localmente
Si intenta abrir una página web localmente a través del protocolo file://, encontrará que las directivas import y export no funcionan. Use un servidor web local, como static-server, o use la capacidad de “servidor vivo” de su editor, como VS Code Live Server Extension para probar los módulos.
*/

/*
Los modulos siempre estan en 'Strict mode';
Alcance a nivel de módulo;

Cada módulo tiene su propio alcance de nivel superior. En otras palabras, las variables y funciones de nivel superior de un módulo no se ven en otros scripts.

En el siguiente ejemplo, se importan dos scripts y hello.js intenta usar la variable user declarada en user.js. Falla, porque es un módulo separado (puedes ver el error en la consola)
*/
























