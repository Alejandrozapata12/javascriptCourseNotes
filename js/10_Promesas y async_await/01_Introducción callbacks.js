// Introducción: callbacks

/*
Un callback es una función que se pasa como argumento a otra función para ejecutarse después.
literalmente:
funcion(otraFuncion)
*/

function saludar (nombre, callback){
  console.log(`Hola mi nombre es ${nombre},`);
  despedir(); // Para como argumento a la función saludar
}

function despedir (){ // Función que se pasara como argumento
  console.log("Nos vemos pronto"); 
}

saludar("Alejandro", despedir); // Hola mi nombre es Alejandro, Nos vemos pronto


// caso real backend tipo API => el callback se ejecuta cuando los datos están listos

function obtenerUsuarios (callback){
   setTimeout(()=>{
    const user = {nombre : "Alejandro"};
    callback(user);
   },1000);
}

obtenerUsuarios ((usuario) =>{
  console.log("Usuario:" + usuario.nombre); 
})












