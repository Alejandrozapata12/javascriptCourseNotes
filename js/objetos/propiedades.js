/*
Las propiedades son clave:valor Pares
Un objeto JavaScript es un conjunto de propiedades
Las propiedades pueden cambiarse, añadirse y eliminarse.
*/

// Objeto 

const data = {
    nombre: "Alejandro Zapata",
    edad: 24,
    ciudad: "Caldas",
    activo: true
};

// Acceso a las propiedades

let nombre = data.nombre + data.edad; // Acceso notación puntos
console.log(nombre);

let ciudad = data["ciudad"]; // Acceso notación corchetes
console.log(ciudad);

// Cambio de valor
data.ciudad = "Medellin";

// Nueva propiedad
data.haveCar =  false;

// Eliminación de propiedades
delete data.edad;

// Comprobar si existe una propiedad
let propiedad = ("ciudad" in data);

// Objetos anidados

const me = {
    nombre: "Alejandro Zapata",
    ciudad: "New York",
    misAutos: {
        car1: "BMW",
        car2: "Audi",
        car3: "Mercedez"
    }
}

// Acceso a las propiedades de los objetos anidados

let carOne = me.misAutos.car1;
console.log(carOne); // BMW

let carTwo = me["misAutos"]["car2"];
console.log(carOne); // Audi

let carThree = me.misAutos["car3"];
console.log(carOne); // Mercedez







