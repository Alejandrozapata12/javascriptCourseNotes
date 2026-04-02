// Creación del objeto

const persona = {
    nombre: "Alejandro",
    ciudad: "Caldas",
    estado: true
};

for(let key in persona){
    // Claves
    console.log(key); // nombre, ciudad, estado
    // Valores
    console.log(persona[key]); // Alejandro, Caldas, true
}




