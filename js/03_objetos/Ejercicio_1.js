// ===============================EJERCICIO 1===============================
/*
Crea un objeto user vacío.
Agrega la propiedad name con el valor John.
Agrega la propiedad surname con el valor Smith.
Cambia el valor de name a Pete.
Remueve la propiedad name del objeto.
*/

// Objeto vacio
const user = {};

// Agregar propiedad name con el valor John
user.name = "John";

// Agregar la propiedad surName con valor Smith.
user.surName = "Smith";

// Cambiar el valor de name
user.name = "Pete"; 

// Eliminar la propiedad name.
delete user.name;


// ===============================EJERCICIO 2===============================
/* 
Tenemos un objeto que almacena los salarios de nuestro equipo:
Escribe el código para sumar todos los salarios y almacenar el resultado en la variable sum. En el ejemplo de arriba nos debería dar 390.
Si salaries está vacío entonces el resultado será 0
*/

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;

for(let key in salaries){
    sum += salaries[key];
}

console.log(sum);























