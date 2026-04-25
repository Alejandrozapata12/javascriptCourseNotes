// Métodos prototipo, objetos sin __proto__


// En JavaScript, los objetos pueden tener métodos prototipo que les permiten compartir funcionalidades. Sin embargo, también es posible crear objetos sin un prototipo utilizando Object.create(null). Estos objetos no heredan de Object.prototype y, por lo tanto, no tienen acceso a métodos como toString() o hasOwnProperty().

// Ejemplo de un objeto con prototipo
const persona = {
    nombre: 'Juan',
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }
};

persona.saludar(); // Output: Hola, mi nombre es Juan

// Ejemplo de un objeto sin prototipo
const objetoSinProto = Object.create(null);
objetoSinProto.propiedad = 'Valor';
console.log(objetoSinProto.propiedad); // Output: Valor
// Intentar acceder a un método prototipo en un objeto sin prototipo resultará en un error
// console.log(objetoSinProto.toString()); // Esto lanzará un error porque toString no existe en este objeto
// En resumen, los objetos con prototipo pueden acceder a métodos heredados, mientras que los objetos sin prototipo no tienen acceso a esos métodos y solo pueden utilizar las propiedades y métodos que se les asignen directamente.



/*
Leer y escribir en __proto__ se considera desactualizado y algo obsoleto (fue movido al llamado “Anexo B” del estándar JavaScript, dedicado únicamente a navegadores).

Los métodos modernos para obtener y establecer (get/set) un prototipo son:

Object.getPrototypeOf(obj) – devuelve el [[Prototype]] de obj.
Object.setPrototypeOf(obj, proto) – establece el [[Prototype]] de obj a proto.
*/

// Ejemplo de uso de Object.getPrototypeOf y Object.setPrototypeOf
const animal = {
    tipo: 'Animal',
    hacerSonido() {
        console.log('El animal hace un sonido');
    }
};

const perro = Object.create(animal);
perro.tipo = 'Perro';
perro.hacerSonido(); // Output: El animal hace un sonido
console.log(Object.getPrototypeOf(perro)); // Output: { tipo: 'Animal', hacerSonido: [Function: hacerSonido] }

const gato = {};

Object.setPrototypeOf(gato, animal);
gato.tipo = 'Gato';
gato.hacerSonido(); // Output: El animal hace un sonido
console.log(Object.getPrototypeOf(gato)); // Output: { tipo: 'Animal', hacerSonido: [Function: hacerSonido] }



















