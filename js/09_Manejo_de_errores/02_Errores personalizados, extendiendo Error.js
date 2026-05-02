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


// ====== Herencia adicional ======

/*
La clase ValidationError es demasiado genérica. Son muchas las cosas que pueden salir mal. La propiedad podría estar ausente, o puede estar en un formato incorrecto (como un valor de cadena para age en lugar de un número). Hagamos una clase más concreta PropertyRequiredError específicamente para propiedades ausentes. Esta clase llevará información adicional sobre la propiedad que falta.
*/

class ValidationError extends Error {
    constructor (message){
        super(message);
        this.name = "ValidationError";
    }
}

class PropertyRequiredError extends ValidationError {
    constructor(property) {
    super("Sin propiedad: " + property);
    this.name = "PropertyRequiredError";
    this.property = property;
  }
}


// Uso
function readUser(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new PropertyRequiredError("age");
  }
  if (!user.name) {
    throw new PropertyRequiredError("name");
  }

  return user;
}

// Ejemplo de trabajo con try..catch

try {
  let user = readUser('{ "age": 25 }');
} catch (err) {
  if (err instanceof ValidationError) {
    alert("Dato inválido: " + err.message); // Dato inválido: Sin propiedad: name
    alert(err.name); // PropertyRequiredError
    alert(err.property); // name
  } else if (err instanceof SyntaxError) {
    alert("Error de sintaxis JSON: " + err.message);
  } else {
    throw err; // error desconocido, vuelva a lanzarlo
  }
}


















































