function Createuser(id, name, password){
  let _name = name;
  let _password = password;

  const user = {};

  Object.defineProperty(user, "id", {
    value: id,
    writable: false, // No se puede modificar el id después de su creación
    enumerable: true,
    configurable: false
  });

  // Formatear el nombre
  Object.defineProperty(user, "name", {
    get(){
      return _name.toUpperCase(); // Devuelve el nombre en mayúsculas
    },
    set(value){
      if(value.length < 3){
        throw new Error("El nombre debe tener al menos 3 caracteres");
      }
      _name = value;
    },
    enumerable: true,
    configurable: true
  });

  // Validar la contraseña
  Object.defineProperty(user, "password", {
    get(){
      return "***********";
    },
    set(value){
      if(value.length < 8){
        throw new Error("La contraseña debe tener al menos 8 caracteres");
      }
      _password = value;
    },
    enumerable: false,
    configurable: true
  });
  return user;
}


// UI en el html
const crear = document.getElementById("create");
const outp = document.getElementById("output");

let user = null;

crear.addEventListener("click", () =>{
  try {
    const name = document.getElementById("name").value;
    const pass = document.getElementById("password").value;

     user = Createuser(Date.now(), name, pass);

     outp.textContent = `Usuario creado: 
      ID: ${user.id}
      Name: ${user.name}
      Password: ${user.password}
      
      JSON: ${JSON.stringify(user, null, 2)}
     `;

  }catch (error) {
      outp.textContent = `Error: ${error.message}`;
  }
});



















