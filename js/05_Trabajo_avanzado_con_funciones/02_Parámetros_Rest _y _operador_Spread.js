// Parámetros Rest y operador Spread

/*
Rest ... en la definición de una función → junta argumentos en un array
Spread ... en la llamada de una función → expande un array en argumentos sueltos
 */


//******************** Rest ******************** => ...numbers recoge todos los argumentos en un array. 
function one(...numbers){
   return numbers.reduce((item, n) => item + n, 0);
}

console.log(one(1, 2, 3, 4)); // 10


// caso real

function accesUser(name, ...roles){
  console.log(name); // Alejandro
  console.log(roles); // ["admin", "editor"]
}

accesUser("Alejandro", "admin", "editor");

// ******************** Spread ******************** => ...Spread expande valores, se usa en arrays, objetos y llamadas de función. 

// ********************** Arrays **********************
// Ejemplo con arrays
const array1 = [1, 2];
const array2 = [3, 4];

const resultado = [...array1, ...array2];
console.log(resultado); // 1, 2, 3, 4


// copiar arrays, muy usado en react
const original = [1, 2, 3, 5];
const copy = [...original];


// ********************** Objetos **********************

// Agregar nueva propiedad
const persona = {name: "Alejandro"};

const agregarEdad = {
  ...persona,
  edad: 24
};

console.log(persona); // { name: "Alejandro", edad: 24 }

// Sobrescribir valores
const persona2 = {nombre: "Carlos", eda: 23};

const sobreEscribir = {
  ...persona2,
  eda:24
};

console.log(persona2); // {nombre: "Carlos", eda: 24}

// Ejemplo real en react

const [state, setState] = useState({nombre: "Alejandro", edad: 23});

setState({
  ...state,
  edad: 24
});



// ********************** SPREAD en funciones **********************
const numbers = [2, 3, 4, 5];
Math.max(...numbers); // 5


// EJEMPLO

function mergeUsers(...users){
   return users.map(user => ({
    ...user,
    active: true
   }));
}

mergeUsers({nombre: "Alejandro"},{nombre: "Carlos"});



// Ejemplo real -> Tenemos una lista de usuario y debemos activar un usuario, sin modificar el array original

// ================== ESTADO INICIAL ==================
let users = [
  { id: 1, name: "Alejandro", active: false },
  { id: 2, name: "Carlos", active: false }
];


// ================== AGREGAR USUARIOS ==================
function addUsers (usuariosExistentes, ...nuevosUsuarios){
  return [...usuariosExistentes, ...nuevosUsuarios];
}

// ================== ACTIVAR USUARIO ==================

function activeUser(users, userId){
   return users.map(user => {
      if(user.id === userId){
        return {
          ...user,
          active: true
        };
      }
      return user;
   });
}

activeUser();

// 1. Agregar nuevos usuarios

users = addUsers(
  users,
  { id: 3, name: "Maria", active: false },
  { id: 4, name: "Juan", active: false }
);

console.log("Después de agregar:", users);

// 2. Activar un usuario
users = activeUser(users,3); 


/*
0:{id: 1, name: 'Alejandro', active: false}
1:{id: 2, name: 'Carlos', active: false}
2:{id: 3, name: 'Maria', active: true} => activamos este usuario unicamente
3:{id: 4, name: 'Juan', active: false}
*/


// 2 EJEMPLO REAL -> Tenemos un formulario con varios campos, queremos actualizar el estado del formulario sin modificar el estado original

// ================== ESTADO INICIAL ==================
let formState = {
  name: "",
  email: "",
  password: ""
};

// ================== ACTUALIZAR ESTADO DEL FORMULARIO ==================
function updateFormState(formState, field, value){
  return {
    ...formState,
    [field]: value
  };
}

// Actualizar el campo "name"
formState = updateFormState(formState, "name", "Alejandro");
console.log("Después de actualizar el campo name:", formState);

// Actualizar el campo "email"
formState = updateFormState(formState, "email", "");
console.log("Después de actualizar el campo email:", formState);







