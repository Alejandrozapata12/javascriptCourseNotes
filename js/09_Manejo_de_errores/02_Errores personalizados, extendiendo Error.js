// Errores personalizados, extendiendo Error
/*
Cuando desarrollamos algo, a menudo necesitamos nuestras propias clases de error para reflejar cosas específicas que pueden salir mal en nuestras tareas. Para errores en las operaciones de red, podemos necesitar HttpError, para las operaciones de la base de datos DbError, para las operaciones de búsqueda NotFoundError, etc.
*/
// Un custom error es una clase de error creada por ti para representar un problema específico.
// ¿Por que existe esto?

throw new Error(Error); // Porque esto es demasiado generico

/*
En producción necesitas algo así:
ValidationError
AuthError
NotFoundError
DatabaseError
*/

// 1- Crear un custom Error => Siempre heredas de Error
/*
super() inicializa message
name identifica el tipo de error
*/
class ValidationError extends Error{
    constructor(message){
      super(message); // Obligatorio
      this.name = "ValidationError";
    }
};

// Uso real 
function crearUsuario(user){
    if(!user.name){
        throw new ValidationError("Nombre requerido");
    }
    return user;
}

try {
   crearUsuario({})
} catch (error) {
   console.log(error.message); // Nombre requerido
   console.log(error.name) ; // VaidationError
}























































