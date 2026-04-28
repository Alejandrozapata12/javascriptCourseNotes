// Manejo de errores, "try...catch"

/*
CUÁNDO USAR try...catch
✔ SÍ usar:
llamadas a APIs
parseo JSON
acceso a datos externos
operaciones inseguras
 */

// La sintaxis “try…catch” -> La construcción try...catch tiene dos bloques principales: try, y luego catch

try {

  // código...

} catch (err) {

  // manipulación de error

}

/*
Funciona así:

Primero, se ejecuta el código en try {...}.
Si no hubo errores, se ignora catch (err): la ejecución llega al final de try y continúa, omitiendo catch.
Si se produce un error, la ejecución de try se detiene y el control fluye al comienzo de catch (err). La variable err (podemos usar cualquier nombre para ella) contendrá un objeto de error con detalles sobre lo que sucedió.
*/

// Ejemplo: 

try {
  let x = y; // ❌ y no existe
} catch (err) {
  console.log("Ocurrió un error:", err.message); // Ocurrió un error: 
}


// ========= Objeto error =========
/*
err.name => tipo de error (Nombre de error. Por ejemplo, para una variable indefinida que es "ReferenceError".)
err.message => mensaje  (Mensaje de texto sobre detalles del error.)
err.stack => donde ocurrio el error (Pila de llamadas actual: una cadena con información sobre la secuencia de llamadas anidadas que condujeron al error. Utilizado para fines de depuración.)
*/

try {
  sinData();
} catch (err) {
   console.log(err.name); // ReferenceError
   console.log(err.message); // sinData is not defined
   console.log(err.stack); // ReferenceError: sinData no esta difinida
}


/*
Exploremos un caso de uso de la vida real de try...catch.
Como ya sabemos, JavaScript admite el método JSON.parse(str) para leer valores codificados con JSON.
Por lo general, se utiliza para decodificar datos recibidos a través de la red, desde el servidor u otra fuente.
Lo recibimos y llamamos a JSON.parse así
*/

let json = '{"name":"John", "age": 30}'; // datos del servidor

let user = JSON.parse(json); // convierte la representación de texto a objeto JS

// ahora user es un objeto con propiedades de la cadena
alert( user.name ); // John
alert( user.age );  // 30

/*
Puede encontrar información más detallada sobre JSON en el capítulo Métodos JSON, toJSON.

Si json está mal formado, JSON.parse genera un error, por lo que el script “muere”.
¿Deberíamos estar satisfechos con eso? ¡Por supuesto no!
De esta manera, si algo anda mal con los datos, el visitante nunca lo sabrá (a menos que abra la consola del desarrollador). Y a la gente realmente no le gusta cuando algo “simplemente muere” sin ningún mensaje de error.
Usemos try...catch para manejar el error

*/

let json = "{ json malo }";

try {

  let user = JSON.parse(json); // <-- cuando ocurre un error ...
  alert( user.name ); // no funciona

} catch (err) {
  // ...la ejecución salta aquí
  alert( "Nuestras disculpas, los datos tienen errores, intentaremos solicitarlos una vez más." );
  alert( err.name );
  alert( err.message );
}

// Aquí usamos el bloque catch solo para mostrar el mensaje, pero podemos hacer mucho más: enviar una nueva solicitud de red, sugerir una alternativa al visitante, enviar información sobre el error a una instalación de registro, …. Todo mucho mejor que solo morir.


// =========   Lanzando nuestros propios errores =========

/*
¿Qué sucede si json es sintácticamente correcto, pero no tiene una propiedad requerida de name?
Como este:
*/
let json = '{ "age": 30 }'; // dato incompleto

try {
  let user = JSON.parse(json); // <-- sin errores
  alert( user.name ); // sin nombre!

} catch (err) {
  alert( "no se ejecuta" );
}

/*
Aquí JSON.parse se ejecuta normalmente, pero la ausencia de name es en realidad un error nuestro.
Para unificar el manejo de errores, usaremos el operador throw.
*/

// =========  El operador “throw” =========

// El operador throw genera un error.

// La sintaxis es:

throw <error object></error>


/*
JavaScript tiene muchos constructores integrados para manejar errores estándar: Error, SyntaxError, ReferenceError, TypeError y otros. Podemos usarlos para crear objetos de error también.
*/

// Su sintaxis es:

let error = new Error(message);
// or
let error = new SyntaxError(message);
let error = new ReferenceError(message);
// ...

// Ejemplo: 

let error = new Error("Estas cosas pasan... o_O");

alert(error.name); // Error
alert(error.message); // Estas cosas pasan... o_O


let json = '{ "age": 30 }'; // dato incompleto

try {

  let user = JSON.parse(json); // <-- sin errores

  if (!user.name) {
    throw new SyntaxError("dato incompleto: sin nombre"); // (*)
  }

  alert( user.name );

} catch (err) {
  alert( "Error en JSON: " + err.message ); // Error en JSON: dato incompleto: sin nombre
}

/*
En la línea (*), el operador throw genera un SyntaxError con el message dado, de la misma manera que JavaScript lo generaría él mismo. La ejecución de try se detiene inmediatamente y el flujo de control salta a catch.

Ahora catch se convirtió en un lugar único para todo el manejo de errores: tanto para JSON.parse como para otros casos.
*/


//  ========= Relanzando (rethrowing) =========
/*
En el ejemplo anterior usamos try...catch para manejar datos incorrectos. Pero, ¿es posible que ocurra otro error inesperado dentro del bloque try{...}? Como un error de programación (la variable no está definida) o algo más, no solo “datos incorrectos”.

Por ejemplo:
*/

let json = '{ "age": 30 }'; // dato incompleto

try {
  user = JSON.parse(json); // <-- olvidé poner "let" antes del usuario

  // ...
} catch (err) {
  alert("Error en JSON: " + err); // Error en JSON: ReferenceError: user no está definido
  // (no es error JSON)
}


// ========== try…catch…finally ==========

/*
Espera, eso no es todo.

La construcción try...catch puede tener una cláusula de código más: finally.

Si existe, se ejecuta en todos los casos:

después de try, si no hubo errores,
después de catch, si hubo errores.
La sintaxis extendida se ve así:

*/
try {
  // ... intenta ejecutar el código ...
} catch (err) {
  // ... manejar errores ...
} finally {
  // ... ejecutar siempre ...
}



try {
  alert( 'intenta (try)' );
  if (confirm('¿Cometer un error?')) BAD_CODE();
} catch (err) {
  alert( 'atrapa (catch)' );
} finally {
  alert( 'finalmente (finally)' );
}


// =================== Captura Global ===================

/*
Imaginemos que tenemos un error fatal fuera de try...catch, y el script murió. Como un error de programación o alguna otra cosa terrible.

¿Hay alguna manera de reaccionar ante tales ocurrencias? Es posible que queramos registrar el error, mostrarle algo al usuario (normalmente no ve mensajes de error), etc.

No hay ninguna en la especificación, pero los entornos generalmente lo proporcionan, porque es realmente útil. Por ejemplo, Node.js tiene process.on("uncaughtException") para eso. Y en el navegador podemos asignar una función a la propiedad especial window.onerror, que se ejecutará en caso de un error no detectado.

La sintaxis:

*/
window.onerror = function(message, url, line, col, error) {
  // ...
};

/*
message
Mensaje de error.
url
URL del script donde ocurrió el error.
line, col
Números de línea y columna donde ocurrió el error.
error
El objeto error.
*/

window.onerror = function(message, url, line, col, error){
  console.log(`${message} \n At ${line} : ${col} of ${url} `);
}

function actionBad(){
  badFun() // ¡Vaya, algo salió mal!
}
actionBad(); 

// El rol del controlador global window.onerror generalmente no es recuperar la ejecución del script, probablemente sea imposible en caso de errores de programación, pero sí enviar el mensaje de error a los desarrolladores.


// Ejemplo real

function crearUsuarios(nombre){
  if(!nombre){
    throw new Error ("¡Debes crear un nombre para continuar!");
  }

  return { nombre };
}

try {
  crearUsuarios(" ");
} catch (err) {
   console.log(err.message);
}



// Otro ejemplo real consumiendo una API

async function getData(){
  try {
    const respuesta = await fetch("https://api.com/data");
    const data = respuesta.json();
    return data;
  } catch (error) {
     console.log("Error al traer los datos: " + error.message);
     return [];
  }
}
























