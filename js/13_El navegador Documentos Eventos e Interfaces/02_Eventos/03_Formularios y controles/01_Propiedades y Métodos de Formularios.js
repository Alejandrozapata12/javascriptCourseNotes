// ========================== 1. Claridad ==========================
/*
¿Qué son los elementos de un formulario?
Son todos los controles HTML que permiten al usuario ingresar o seleccionar información.

Ejemplo: 

<form>

    <input type="text">

    <textarea></textarea>

    <select></select>

    <input type="checkbox">

    <input type="radio">

    <button>Guardar</button>

</form>

Cada uno de estos elementos puede ser manipulado desde JavaScript.
*/

// ========================== 2. Entendimiento - Acceder al formulario ==========================
/*
Supongamos:
<form id="login">

</form>
*/
// Podemos obtenerlo asi: 
const form = document.querySelector("#login");


// ========================== La propiedad elements  ==========================
form.elements 

// Contiene todos los controles.
/*
<form id="login">

<input name="email">

<input name="password">

<button>Entrar</button>

</form>
*/
const form = document.querySelector("#login");

console.log(form.elements);

// Obtienes algo parecido a: 
email, password, button

// También puedes acceder directamente por el atributo name. 
form.elements.email
form.elements.password

// input 
/*
- Supongamos.

<input
name="nombre"
type="text">
*/

/*
value
Es probablemente la propiedad más utilizada.
const input = form.elements.nombre;

console.log(input.value);
 */



// ==========================focus()  ==========================
// Coloca el cursor.
input.focus();
// Muy usado cuando una validación falla.


// ==========================blur()  ==========================
// Quita el foco
input.blur();

// ==========================Checkbox  ==========================
/*
<input
type="checkbox"
name="terms">

No se usa value.
Se usa.

checkbox.checked

Devuelve.

true

false
*/

// Ejemplo
if(checkbox.checked){

    console.log("Aceptó");

}

// ========================== Radio Buttons ==========================
/*
<input
type="radio"
name="gender"
value="M">

<input
type="radio"
name="gender"
value="F">

Solo uno puede estar seleccionado.

console.log(form.elements.gender.value);

Obtienes.

M o F
*/

// ========================== Select ==========================
<select id="country">

<option>Colombia</option>

<option>España</option>

<option>México</option>

</select>

// Leer.

country.value

// Cambiar.

country.value="España";

// ========================== selectedIndex ==========================
// Dice la posición
country.selectedIndex;
// Ejemplo: 0 1 2 3...........

// ========================== Textarea ==========================
// <textarea></textarea>
textarea.value;

// // ========================== Option ==========================
// Puedes crear opciones.
let nuevo = new Option("Canada", "CA");
// Agregar
let agregar = select.add(nuevo);
// Colombia, Venezuela, Chile, Canada. 


// ========================== Form Reset ==========================
// Puedes limpiar el formulario. Todos los controles vuelven al estado inicial.
form.reset();


//========================== Form Submit ==========================
// Enviar form Normalmente no se usa directamente porque hoy se trabaja con fetch() y APIs, pero es bueno conocerlo.
form.submit();


//========================== Disabled ==========================
// Desactivar
form.disabled = true;
// El usuario ya no puede escribir.

//========================== ReadOnly ==========================
// Puede leer, NO modificar
input.readOnly = true;


/*
<!DOCTYPE html>
<html lang="es">

<head>

<meta charset="UTF-8">

<title>Formulario</title>

</head>

<body>

<form id="userForm">

<input
type="text"
name="name"
placeholder="Nombre">

<input
type="email"
name="email"
placeholder="Correo">

<select name="country">

<option value="">Seleccione</option>

<option>Colombia</option>

<option>México</option>

<option>España</option>

</select>

<label>

<input
type="checkbox"
name="terms">

Aceptar términos

</label>

<button>

Guardar

</button>

</form>

<script>

const form=document.querySelector("#userForm");

form.addEventListener("submit",(event)=>{

event.preventDefault();

const name=form.elements.name.value;

const email=form.elements.email.value;

const country=form.elements.country.value;

const terms=form.elements.terms.checked;

console.log({

name,

email,

country,

terms

});

});

</script>

</body>

</html>



Tipo de control	Propiedad correcta
<input type="text">	value
<input type="email">	value
<textarea>	value
<select>	value
<input type="checkbox">	checked
<input type="radio">	checked (individual) o value del grupo mediante form.elements.nombreDelGrupo.value
*/






































