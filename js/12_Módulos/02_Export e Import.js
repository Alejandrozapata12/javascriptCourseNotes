// Export e Import
/*
Las directivas export e import tienen varias formas de sintaxis.
 */

// ========= Export antes de las sentencias =========
/*
Podemos exportar cualquier declaración colocando antes ‘export’, ya sea a una variable, función o clase.
Por ejemplo, aquí todas las exportaciones son válidas:
*/

// exportar un array
export let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// exportar una constante
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// exportar una clase
export class User {
  constructor(name) {
    this.name = name;
  }
}

// exportar una función
export function sayHi(user) {
  return `Hello, ${user}!`;
}

// ========= Export al final del código =========
/*
También podemos exportar al final del código, sin usar la palabra clave export en cada declaración.
En este caso, se enumeran los objetos a exportar entre llaves.
*/
let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const MODULES_BECAME_STANDARD_YEAR = 2015;
class User {
  constructor(name) {
    this.name = name;
  }
}
function sayHi(user) {
  return `Hello, ${user}!`;
}

export { months, MODULES_BECAME_STANDARD_YEAR, User, sayHi };

/*
En este caso, el código es el mismo que antes, pero sin export en cada declaración. 
Al final, se exportan todos los objetos a la vez.
 */


// ============= Import * ==============
/*
Para importar todo lo que un módulo exporta, podemos usar la sintaxis import * as alias from "module".
Esto importa todo el contenido del módulo como un objeto llamado alias.
Por ejemplo:
*/

// Generalmente, colocamos una lista de lo que queremos importar en llaves import {...}, de esta manera:
// 📁 main.js
import {sayHi, sayBye} from './say.js';

sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!


// Pero si hay mucho para importar, podemos importar todo como un objeto utilizando import * as <obj>, por ejemplo:
// 📁 main.js
import * as say from './say.js';

say.sayHi('John');
say.sayBye('John');


// ========== Importar “as” =========
/*
Si queremos importar algo pero darle un nombre diferente, podemos usar la sintaxis import { name as alias } from "module".
Esto es útil para evitar conflictos de nombres o para dar un nombre más descriptivo a lo que estamos importando.
Por ejemplo:
*/
// 📁 main.js
import {sayHi as hi, sayBye as bye} from './say.js';

hi('John'); // Hello, John!
bye('John'); // Bye, John!


// ======= Exportar “as” =======
/*
Existe un sintaxis similar para export.
Exportemos funciones como hi y bye:
*/
// 📁 say.js

export {sayHi as hi, sayBye as bye};

/*
Ahora hi y bye son los nombres oficiales exportados, los que usarán otros módulos al hacer sus importaciones.
 */
// 📁 main.js
import * as say from './say.js';

say.hi('John'); // Hello, John!
say.bye('John'); // Bye, John!


// ======= Export default =======
/*
En la práctica, existen principalmente dos tipos de módulos.

Módulos que contienen una librería, un paquete de funciones como say.js de arriba.
Módulos que declaran una entidad simple, por ejemplo un módulo user.js que exporta únicamente class User.
Principalmente, se prefiere el segundo enfoque, de modo que cada “cosa” reside en su propio módulo.

Naturalmente, eso requiere muchos archivos, ya que todo quiere su propio módulo, pero eso no es un problema en absoluto. En realidad, la navegación de código se vuelve más fácil si los archivos están bien nombrados y estructurados en carpetas.

Los módulos proporcionan una sintaxis special ‘export default’ (“la exportación predeterminada”) para que la forma de “una cosa por módulo” se vea mejor.

Poner export default antes de la entidad a exportar
*/

// 📁 user.js
export default class User { // sólo agregar "default"
  constructor(name) {
    this.name = name;
  }
}

/*
Sólo puede existir un sólo export default por archivo.

…Y luego importarlo sin llaves
*/
// 📁 main.js
import User from './user.js'; // no {User}, sólo User
new User('John');

/*
Las importaciones sin llaves se ven mejor. Un error común al comenzar a usar módulos es olvidarse de las llaves. Entonces, recuerde, import necesita llaves para las exportaciones con nombre y no las necesita para la predeterminada.
*/

/*
Export con nombre	           Export predeterminada
export class User {...}	      export default class User {...}
import {User} from ...	      import User from ...
*/

/*
Técnicamente, podemos tener exportaciones predeterminadas y con nombre en un solo módulo, pero en la práctica la gente generalmente no las mezcla. Un módulo tiene exportaciones con nombre o la predeterminada.

Como puede haber como máximo una exportación predeterminada por archivo, la entidad exportada puede no tener nombre.

Por ejemplo, todas estas son exportaciones predeterminadas perfectamente válidas: 
*/

export default class { // clase sin nombre
  constructor(name) {
    this.name = name;
  }
}

export default function(user) { // función sin nombre
  return `Hello, ${user}!`;
}

export default 42; // valor sin nombre

/*
En este caso, el nombre de la clase, función o valor no se exporta, pero aún así se puede importar sin llaves.
*/















