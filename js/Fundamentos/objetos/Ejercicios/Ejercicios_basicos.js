/*
1. Crear un objeto básico

Crea un objeto llamado persona con las siguientes propiedades:
nombre
edad
ciudad
Luego muestra cada propiedad en la consola.
*/

const persona = {
    nombre: "Alejandro",
    edad: 24,
    ciudad: "Caldas",
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.ciudad);


/*
2. Modificar propiedades

Crea un objeto producto con:
nombre
precio
stock

Después:
Cambia el precio.
Agrega una propiedad llamada categoria.
Muestra el objeto completo.
Objetivo: aprender que los objetos pueden modificarse dinámicamente.
*/

const producto = {
    nombre: "Computadora",
    precio: 999,
    stock: 8
};

// Cambio de precio de la computadora
let cambio = producto.precio = 1200;
console.log(`El precio de la computadora para el 2026 es de ${cambio} `);

// Nueva propiedad "categoria"
let newProperty = producto.categoria = "Electronicos";




/*
3. Acceder a propiedades con corchetes
*/

const usuario = {
    nombre: "Ana",
    email: "ana@correo.com",
    activo: true
};

usuario["nombre"];
usuario["email"];
usuario["activo"];


/*
4. Objeto con función (método)

Crea un objeto calculadora que tenga:

numero1

numero2

un método sumar()
*/

const calculadora = {
    numero1: 10,
    numero2: 5,
    sumar: function(){
        return this.numero1 + this.numero2;
    }
};
console.log(calculadora.sumar()); // 15 



/*
5. Array de objetos (MUY IMPORTANTE)

Esto es extremadamente común en aplicaciones reales.
*/

const productos = [
    {nombre: "Mouse", precio:68000 },
    {nombre: "Laptop", precio: 2500000},
    {nombre: "teclado", precio: 45000}
];

// Recorrer el array

let recorrer = productos.forEach(producto => {
    console.log("Producto:" + producto.nombre, producto.precio);
 }
);

// Filtrar objetos mayor a 100000
let filtro = productos.filter(mayor => mayor.precio >100000);
console.log(filtro)



/*
7. Contar stock de productos
*/
const inventario = [
  {nombre: "Laptop", stock: 10},
  {nombre: "Mouse", stock: 0},
  {nombre: "Teclado", stock: 5}
];


const empresa = {
  nombre: "TechStore",
  empleados: 15,
  productos: 120
};

function mostrarEmpresa(item){
   console.log("Empresa:" + item.nombre);
   console.log("Cantidad de empleados: " + item.empleados);
   console.log("Cantidad de productos:" + item.productos);
}

mostrarEmpresa(empresa);


