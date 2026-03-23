/*
Los métodos son acciones que pueden realizarse sobre objetos.
Los métodos son funciones almacenadas como valores de propiedad.
*/

// Ejemplo: 

const person = {
    firstName: "Alejandro",
    lastName: "Zapata",
    age: 24,
    fullName: function(){ // Método el cual concatena las 2 propiedades que se usan para la misma. 
        return this.firstName + " " + this.lastName;
    }
};

let message = person.fullName();
console.log(message);


// La palabra clave this, en un método objeto, se refiere al objeto.

const data = {
    user: 4879,
    password: "Alejandrozapt",
    id: 2,
    getId: function(){
        return this.id // Se refiere a este objeto data y this.id significa la propiedad id del objeto data.
    }
};
data.getId();


// Acceso a métodos
/*
Para llamar a un método objeto, añade paréntesis ():
Sin paréntesis, obtienes la función en sí.
*/

// Sintaxis: objectName.methodName()

// Si llamas a un método con paréntesis, se ejecutará como una función:

// Ejemplo
nombre_1 = person.fullName();
// Si llamas a un método sin paréntesis, devolverá la definición de la función

// Añadir un método a un objeto
// Puedes añadir un método a un objeto asignando una función a una propiedad.

// Ejemplo: 

// Creación del objeto
const persona = {
    firstName: "Alejandro",
    lastName: "Zapata",
    status: true
};


// Agregar método
persona.mensaje = function(){
    return this.status;
}

// Imprimir mensaje
console.log(`My name's ${firstName} and my status is ${persona.mensaje()}`);

















