//======================= Encadenamiento opcional '?.'=======================

/*
El encadenamiento opcional ?. es una forma a prueba de errores para acceder a las propiedades anidadas de los objetos, incluso si no existe una propiedad intermedia.

El encadenamiento opcional ?. detiene la evaluación y devuelve undefined si el valor antes del ?. es undefined o null.
*/

/*
Ejemplo de uso: 

Como ejemplo, digamos que tenemos objetos user que contienen información de nuestros usuarios.
La mayoría de nuestros usuarios tienen la dirección en la propiedad user.address, con la calle en user.address.street, pero algunos no la proporcionaron.
En tal caso, cuando intentamos obtener user.address.streeten un usuario sin dirección obtendremos un error:
 */

// Objeto vacio
let user = {};

let street = user.address.street; // Error: Cannot read property 'street' of undefined
/*
El error ocurre porque user.addresses es undefined, y no podemos leer la propiedad street de undefined.
Para evitar este error, podemos usar el encadenamiento opcional:
*/
let street2 = user?.address?.street; // undefined
console.log(street2); // undefined
/*
En este caso, el encadenamiento opcional ?. detiene la evaluación si encuentra un valor null o undefined en cualquier parte de la cadena. 
En lugar de lanzar un error, devuelve undefined.
Esto nos permite acceder a propiedades anidadas sin preocuparnos por si las propiedades intermedias existen o no.
*/

// Otros casos: ?.(), ?.[]

// Llamada a función opcional
let user2 = {
    admin() { // Método admin
        console.log("Soy un admin"); // Imprime "Soy un admin"
    }       
  };

user2.admin?.(); // Soy un admin Llama a admin() si existe, de lo contrario no hace nada
user2.guest?.(); // No hace nada, no lanza error 


// También podemos usar ?. con delete
delete user?.address; // Elimina user.address si user existe, de lo contrario no hace nada


// El encadenamiento opcional también se puede usar con la sintaxis de corchetes para acceder a propiedades dinámicas:
let user3 = {
    name: "Alice",
};

let key = "name";
console.log(user3?.[key]); // Alice Accede a user3.name usando encadenamiento opcional  

// En resumen, el encadenamiento opcional ?. es una herramienta útil para acceder a propiedades anidadas de objetos sin preocuparse por si las propiedades intermedias existen o no, evitando así errores en tiempo de ejecución.

// Ejercicio:

// Dado el siguiente objeto, utiliza el encadenamiento opcional para acceder a la propiedad city sin causar un error si alguna de las propiedades intermedias no existe.

let user4 = {
    address: {
        city: "New York"
    }
};

console.log(user4?.address?.city); // New York

