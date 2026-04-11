// Asignación desestructurante

/*
Las dos estructuras de datos más usadas en JavaScript son Object y Array.

Los objetos nos permiten crear una simple entidad que almacena items con una clave cada uno.
los arrays nos permiten reunir items en una lista ordenada.
Pero cuando los pasamos a una función, tal vez no necesitemos el objeto o array completo. La función podría requerir solamente ciertos elementos o propiedades.

La asignación desestructurante es una sintaxis especial que nos permite “desempaquetar” arrays u objetos en un manojo de variables, porque a veces es lo más conveniente.

La desestructuración también funciona bien con funciones complejas que tienen muchos argumentos, valores por defecto, etcétera. Pronto lo veremos.
*/

// Desestructuración de objetos

const user = { 
  name: 'John',
  age: 30,
  city: 'New York'
};

const { name, age, city } = user; // En este caso, declaramos las variables name, age y city y les asignamos los valores correspondientes del objeto user utilizando la sintaxis de desestructuración.
console.log(name); // John
console.log(age); // 30
console.log(city); // New York

// Desestructuración de arrays

const numbers = [1, 2, 3, 4, 5];
const [first, second, third] = numbers; // En este caso, declaramos las variables first, second y third y les asignamos los valores correspondientes del array numbers utilizando la sintaxis de desestructuración.
console.log(first); // 1
console.log(second); // 2
console.log(third); // 3



// Ejemplo: 

const data = ["Alejandro", "Zapata"];

const [primerNombre, apellido] = data; // En este caso, declaramos las variables primerNombre y apellido y les asignamos los valores correspondientes del array data utilizando la sintaxis de desestructuración.
console.log(primerNombre); // Alejandro
console.log(apellido); // Zapata


// ...rest en arrays, este funciona como el operador de propagación, pero en este caso, se utiliza para recopilar el resto de los elementos del array después de haber asignado los primeros elementos a variables individuales.es decir, si queremos obtener el primer elemento del array y luego el resto de los elementos en una variable separada, podemos usar la sintaxis de desestructuración con el operador ...rest.

const [firstName, ...rest] = data;
console.log(firstName); // Alejandro
console.log(rest); // ["Zapata"]  


// ...rest en objetos, este funciona como el operador de propagación, pero en este caso, se utiliza para recopilar el resto de las propiedades del objeto después de haber asignado las primeras propiedades a variables individuales. es decir, si queremos obtener una propiedad específica del objeto y luego el resto de las propiedades en una variable separada, podemos usar la sintaxis de desestructuración con el operador ...rest.

const user2 = {
  name: 'John',
  age: 30,
  city: 'New York'
};  

const { name: userName, ...restProps } = user2; // En este caso, declaramos la variable userName y le asignamos el valor de la propiedad name del objeto user2 utilizando la sintaxis de desestructuración. Luego, utilizamos el operador ...rest para recopilar el resto de las propiedades del objeto en la variable restProps.
console.log(userName); // John
console.log(restProps); // { age: 30, city: 'New York' }



// Desestructuración anidada, esta funcionalidad nos permite desestructurar objetos o arrays que contienen otros objetos o arrays dentro de ellos. Esto es útil cuando queremos acceder a propiedades o elementos específicos dentro de estructuras de datos más complejas.

// Ejemplo de desestructuración anidada con objetos

const person = {
  nombre: 'Alice',
  age: 25,
  address: { 
    street: '123 Main St',
    ciudad: 'Anytown',
    country: 'USA'
  }
};

const { nombre, address: { ciudad } } = person; // En este caso, declaramos la variable name y le asignamos el valor de la propiedad name del objeto person utilizando la sintaxis de desestructuración. Luego, utilizamos la sintaxis de desestructuración anidada para acceder a la propiedad city dentro del objeto address y asignarla a la variable city.
console.log(nombre); // Alice
console.log(ciudad); // Anytown


// Ejemplo de desestructuración anidada con arrays
const nestedArray = [1, [2, 3], 4];
const [uno, [dos, tres], cuatro] = nestedArray;
console.log(uno); // 1
console.log(dos); // 2
console.log(tres); // 3
console.log(cuatro); // 4 



// Argumentos de función inteligentes

function createUser({ name, age, city }) {
  return {
    name,
    age,
    city
  };
}

const newUser = createUser({ name: 'Bob', age: 28, city: 'Los Angeles' });
console.log(newUser); // { name: 'Bob', age: 28, city: 'Los Angeles' }

// En este ejemplo, la función createUser toma un objeto como argumento y utiliza la sintaxis de desestructuración para extraer las propiedades name, age y city del objeto. Esto hace que el código sea más limpio y fácil de leer, ya que no tenemos que acceder a cada propiedad individualmente dentro de la función.

// Ejemplo de la vida real: un menu hamburguesa, este ejemplo muestra cómo la asignación desestructurante puede ser útil para manejar objetos complejos, como un menú de navegación en una aplicación web. En este caso, la función displayMenu toma un objeto menu como argumento y utiliza la sintaxis de desestructuración para extraer las propiedades title, items e isOpen del objeto. Luego, la función muestra esta información en la consola de una manera clara y organizada.

const menu = {
  title: 'Menu',
  items: ['Home', 'About', 'Contact'],
  isOpen: true
};

function displayMenu({ title, items, isOpen }) {
  console.log(`Title: ${title}`);
  console.log(`Items: ${items.join(', ')}`);
  console.log(`Is Open: ${isOpen}`);
}

displayMenu(menu); // Title: Menu
                   // Items: Home, About, Contact
                   // Is Open: true

// Ahora otro ejemplo en la cual ese menu de hamburguesa sea realmente utilizado en una aplicación web. En este caso, la función renderMenu toma un objeto menu como argumento y utiliza la sintaxis de desestructuración para extraer las propiedades title, items e isOpen del objeto. Luego, la función crea elementos HTML para mostrar el menú en la página web.

const menu2 = {
  title: 'Main Menu',
  items: ['Home', 'Services', 'Contact'],
  isOpen: true
};

function renderMenu({ title, items, isOpen }) {

  // Crear elementos HTML para mostrar el menú
  const menuContainer = document.createElement('div');
  const menuTitle = document.createElement('h2');
  const menuList = document.createElement('ul');

  // Asignar el título del menú y agregarlo al contenedor
  menuTitle.textContent = title;
  menuContainer.appendChild(menuTitle); 
  menuContainer.style.display = isOpen ? 'block' : 'none'; // Mostrar u ocultar el menú según el valor de isOpen
  document.body.appendChild(menuContainer);
  // Agregar los elementos del menú a la lista
  items.forEach(item => {
    const menuItem = document.createElement('li');
    menuItem.textContent = item;
    menuList.appendChild(menuItem);
  });
  menuContainer.appendChild(menuList);

}

renderMenu(menu2); // Esto creará un contenedor de menú con el título "Main Menu" en la página web. Puedes expandir esta función para agregar los elementos del menú y manejar la lógica de apertura/cierre según el valor de isOpen.



// Ahora un ejemplo simulando un post en node.js y express.js

app.post("/users", (req, res) => {
    const {name, email, password} = req.body; // En este caso, estamos utilizando la sintaxis de desestructuración para extraer las propiedades name, email y password del objeto req.body, que contiene los datos enviados en la solicitud POST.
    // Aquí puedes realizar operaciones con los datos, como guardarlos en una base de datos o realizar validaciones.
    res.send(`User ${name} created successfully!`); // Luego, enviamos una respuesta al cliente indicando que el usuario ha sido creado exitosamente.
});


// Ahora otro ejemplo fetch API

const getUser = async (userId) => {
  try {
    const response = await fetch(`https://api.example.com/users/${userId}`);
    const data = await response.json();
    const { name, email } = data; // En este caso, estamos utilizando la sintaxis de desestructuración para extraer las propiedades name y email del objeto data, que contiene la respuesta de la API después de convertirla a formato JSON.
    // Imprimir en el frontend el nombre y correo electrónico del usuario asi en una etiqueta <p></p>:
    const userInfo = document.createElement('p');
    userInfo.textContent = `Name: ${name}, Email: ${email}`;
    document.body.appendChild(userInfo); 

} catch (error) {
    console.error('Error fetching user data:', error);
  }
};

// Ahora nivel pro

const obtenerUsuario = async (id) => {
  const { name, email, address: { city } } = await fetch(`https://api.example.com/users/${id}`).then(res => res.json()); // En este caso, estamos utilizando la sintaxis de desestructuración anidada para extraer las propiedades name y email del objeto data, así como la propiedad city del objeto address dentro de data. Esto nos permite acceder a estas propiedades de manera más directa y legible.
  console.log(`Name: ${name}, Email: ${email}, City: ${city}`);
};


// Otro ejemplo iterando un objeto

const users = {
   Alejandro: 1500,
   Carlos: 2000
};


for (const [nombre, salario] of Object.entries(users)){
  console.log(`Nombre: ${nombre}, Salario: ${salario}`); // Nombre: Alejandro, Salario: 1500
} // En este caso, estamos utilizando la sintaxis de desestructuración para extraer las claves y valores del objeto users. La función Object.entries(users) devuelve un array de pares clave-valor, y al usar la sintaxis de desestructuración dentro del bucle for...of, podemos asignar directamente las claves a la variable nombre y los valores a la variable salario en cada iteración del bucle. Esto hace que el código sea más limpio y fácil de leer.

// Ahora un ejemplo de react, ya que es muy común utilizar la asignación desestructurante en este framework para manejar props y estados.

import React, { useState } from 'react';
const UserProfile = ({ user }) => { // En este caso, estamos utilizando la sintaxis de desestructuración para extraer la propiedad user de las props que se pasan al componente UserProfile. Esto nos permite acceder directamente a las propiedades del objeto user dentro del componente sin tener que escribir props.user cada vez.
  const { name, email } = user; // Aquí estamos utilizando la sintaxis de desestructuración para extraer las propiedades name y email del objeto user, lo que nos permite acceder a estas propiedades de manera más directa y legible dentro del componente.
  const [isEditing, setIsEditing] = useState(false); // Aquí estamos utilizando la sintaxis de desestructuración para extraer el valor isEditing y la función setIsEditing del hook useState. Esto nos permite manejar el estado de edición del perfil de usuario de manera más sencilla dentro del componente.
  return (
    <div>
      <h1>{name}</h1>
      <p>{email}</p>
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </div>
  );
}

// Resultado : 
// <div>
//   <h1>Alice</h1>
//   <p>alice@example.com</p>
//   <button>Edit</button>
// </div>











