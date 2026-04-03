/*
Una de las diferencias fundamentales entre objetos y primitivos es que los objetos son almacenados y copiados “por referencia”, en cambio los primitivos: strings, number, boolean, etc.; son asignados y copiados “como un valor completo”.
*/

// Empecemos por un primitivo String

let message = "Hello";
let copia = message;

// Como resultado tenemos dos variables independientes, cada una almacenando la cadena "Hello!".
/*
Los objetos no son así.

Una variable no almacena el objeto mismo sino su “dirección en memoria”, en otras palabras “una referencia” a él.
*/

let user = {
  name: "John"
};


// Cuando una variable de objeto es copiada, se copia solo la referencia. El objeto no es duplicado.

let data = {
    name: "Alejandro"
};

let permisos = data; // // copia la referencia -> Ahora tenemos dos variables, cada una con una referencia al mismo objeto.

/*
Como puedes ver, aún hay un objeto, ahora con dos variables haciendo referencia a él.
Podemos usar cualquiera de las variables para acceder al objeto y modificar su contenido:
*/

permisos.name = "Andres"; // cambiado por la referencia "permisos"

console.log(data.name); // // 'Andres', los cambios se ven desde la referencia "data"


// ========================= Comparación por referencia=========================

/*
Dos objetos son iguales solamente si ellos son el mismo objeto.
Por ejemplo, aquí a y b tienen referencias al mismo objeto, por lo tanto son iguales
*/

let a = {};
let b = a; // Copia la referencia, que en este caso es un objeto vacio. 


// =========================Clonación y mezcla, Object.assign=========================
/*
Entonces copiar una variable de objeto crea una referencia adicional al mismo objeto.
Pero ¿y si necesitamos duplicar un objeto?
Podemos crear un nuevo objeto y replicar la estructura del existente iterando a través de sus propiedades y copiándolas en el nivel primitivo.
Como esto:
*/

// Creación del objeto
let persona = {
    nombre : "Alejandro Zapata",
    edad:24
};

let clone = {}; // nuevo objeto vacio

// Primera forma de clonar el objeto
for(let key in persona){
    clone[key] = persona[key]; // Ahora este objeto clone tiene una copia de las propiedades del objeto persona
}

// Ejemplo, si queremos mostrar una de las propiedades, ya podemos hacerlo sea al objeto original o al clon
console.log(clone.nombre); // Alejandro Zapata

// Segunda forma de clonar el objeto -> Object.assign(dest, ...sources)

let admin = {
     id: 1
};

// Objetos complementarios
let permiso1 = {soloLectura : false};
let permiso2 = {puedeEditar: true};

Object.assign(admin, permiso1, permiso2); // El primer argumento admin es el objeto destinatario, Los argumentos que siguen son una lista de objetos fuentes.

console.log(admin.soloLectura); // false
console.log(admin.puedeEditar); // true

/*
Esto copia las propiedades de todos los objetos fuentes dentro del destino admin y lo devuelve como resultado, es como un tipo de concatenación, solo que en el objeto padre vamos a clonar otros objetos de los cuales queremos que compartan sus mismas propiedades.
*/



// =========================Clonación anidada=========================
/*
Hasta ahora supusimos que todas las propiedades de user eran primitivas. Pero las propiedades pueden ser referencias a otros objetos.
Como esto:
*/

let usr = {
  name: "John",
  sizes: { // Otro objeto anidado
    height: 182,
    width: 50
  }
};

alert( usr.sizes.height ); // 182

/*
Ahora no es suficiente copiar clone.sizes = user.sizes, porque user.sizes es un objeto y será copiado por referencia. Entonces clone y user compartirán las mismas tallas (.sizes)
*/
let us = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let cln = Object.assign({}, us);

alert( us.sizes === cln.sizes ); // true, el mimo objeto

// user y clone comparten sizes
us.sizes.width = 60;       // cambia la propiedad en un lugar
alert(cln.sizes.width); // 60, obtiene el resultado desde el otro

/*
Para corregir esto, debemos hacer que user y clone sean objetos completamente separados, debemos usar un bucle que examine cada valor de user[key] y, si es un objeto, que replique su estructura también. Esto es conocido como “clonación profunda” o “clonación estructurada”. Existe un método structuredClone que implementa tal clonación profunda.
*/

// -------------------- structuredClone------------------

/*
La llamada a structuredClone(object) clona el object con todas sus propiedadas anidadas.
Podemos usarlo en nuestro ejemplo:
*/
let uer = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clon = structuredClone(uer);

alert( uer.sizes === clon.sizes ); // false, objetos diferentes

// ahora user y clone están totalmente separados
uer.sizes.width = 60;    // cambia una propiedad de un lugar
alert(clon.sizes.width); // 50, no están relacionados



// ===============================Spread Operator (...) (ES6+) ===============================

const original = {nombre: "Alejandro", edad: 24};
const cloner = original;

let cambiarNombre = cloner.nombre = "Norbey";
console.log(original.nombre); // Norbey

// En este se tiene un objeto original el cual tiene 2 propiedades con su respectivo valor, asi mismo se crea una copia del objeto llamo cloner, es decir, una referencia del original, posteriormente se crear una variable cambiarNombre con el fin de modificar el valor de la clave que es nombre, al momento de mostrar el resultado, imprimte el nuevo nombre mas no el original, pese a que se esta llamando el original, esto debido a que se tomo la segunda referencia clonada. 

// Ahora si el operador Spread

const nuevo = {nombre: "Andres", edad: 32};
const copiaSpread = {...nuevo}; // Crea un nuevo objeto en memoria

let asignarN = copiaSpread.nombre = "Camilo";
console.log(nuevo.nombre); // Andres


/*
¿Qué hace?
Toma un objeto (o array) y lo "desempaca", sacando sus propiedades individuales para usarlas en otro lugar.
Analogía:
Imagina que tienes una caja de herramientas (caja1). Quieres pasar esas herramientas a una caja más grande (caja2) junto con otras nuevas. El Spread es como vaciar caja1 dentro de caja2 sin meter la caja entera.
Uso Real 1: Copiar objetos (Inmutabilidad)
Nunca modifiques el objeto original directamente (es una mala práctica en React/Redux).
*/














