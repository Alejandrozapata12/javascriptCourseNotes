// Fecha y Hora
// En JavaScript, puedes trabajar con fechas y horas utilizando el objeto `Date`. Aquí te muestro cómo crear y manipular fechas y horas:

/*
Para crear un nuevo objeto Date se lo instancia con new Date() junto con uno de los siguientes argumentos:

new Date()
Sin argumentos – crea un objeto Date para la fecha y la hora actuales:
*/
const fechaActual = new Date();
console.log(fechaActual); // Muestra la fecha y hora actuales, en este caso son las 2024-06-01T12:00:00.000Z

// new Date(milliseconds) Crea un objeto Date con la cantidad de tiempo igual al número de milisegundos (1/1000 de un segundo) transcurrido a partir del 1° de enero de 1970 UTC+0.

const fechaEnMilisegundos = new Date(1609459200000); // 1 de enero de 2021
console.log(fechaEnMilisegundos); // 1 de enero de 2021T00:00:00.000Z

// new Date(dateString) Crea un objeto Date a partir de una cadena de texto que representa una fecha. La cadena debe estar en un formato reconocido por el constructor Date.

const fechaDesdeCadena = new Date("2022-12-25");
console.log(fechaDesdeCadena); // 25 de diciembre de 2022T00:00:00.000Z

// new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds) Crea un objeto Date con los componentes de fecha y hora especificados. El mes se representa como un índice (0 para enero, 1 para febrero, etc.).

const fechaEspecifica = new Date(2023, 11, 25); // 25 de diciembre de 2023 (mes 11 es diciembre)
console.log(fechaEspecifica); // 25 de diciembre de 2023T00:00:00.000Z

const fechaCompleta = new Date(2023, 11, 25, 15, 30, 0); // 25 de diciembre de 2023 a las 15:30:00
console.log(fechaCompleta); // 25 de diciembre de 2023T15:30:00.000Z

// Métodos comunes para trabajar con fechas y horas:

// Obtener componentes de la fecha
console.log(fechaActual.getFullYear()); // Año
console.log(fechaActual.getMonth()); // Mes (0-11)
console.log(fechaActual.getDate()); // Día del mes
console.log(fechaActual.getHours()); // Hora
console.log(fechaActual.getMinutes()); // Minutos
console.log(fechaActual.getSeconds()); // Segundos 

// Establecer componentes de la fecha
fechaActual.setFullYear(2025); // Cambia el año a 2025
fechaActual.setMonth(0); // Enero
fechaActual.setDate(1); // 1 de enero
fechaActual.setHours(12); // 12:00:00
fechaActual.setMinutes(0); // 12:00:00
fechaActual.setSeconds(0); // 12:00:00
console.log(fechaActual); // 1 de enero de 2025T12:00:00.000Z

// Formatear fechas
console.log(fechaActual.toDateString()); // Formato legible para humanos
console.log(fechaActual.toISOString()); // Formato ISO 8601
console.log(fechaActual.toLocaleDateString()); // Formato local

// Comparar fechas
const fecha1 = new Date(2023, 0, 1); // 1 de enero de 2023
const fecha2 = new Date(2024, 0, 1); // 1 de enero de 2024

console.log(fecha1 < fecha2); // true
console.log(fecha1 > fecha2); // false
console.log(fecha1.getTime() === fecha2.getTime()); // false


// Ejemplo real trabajando con html y JavaScript para mostrar la fecha actual en una página web:

// HTML:
// <div id="fechaActual"></div>
// JavaScript:
const elementoFecha = document.getElementById("fechaActual");
elementoFecha.textContent = `La fecha y hora actual es: ${new Date().toLocaleString()}`; // Esto mostrará la fecha y hora actual en el formato local del usuario, ejemplo: "La fecha y hora actual es: 1/6/2024, 12:00:00 PM"

// Ahora ejemplo en react, supangos que quederemos que en el header aparezca la fecha actual, para eso podemos usar el hook useState y useEffect para actualizar la fecha cada segundo:

import React, { useState, useEffect } from 'react';

function Header() {
  const [fechaActual, setFechaActual] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setFechaActual(new Date());
    }, 1000); // Actualiza la fecha cada segundo

});
    return () => clearInterval(timer); // Limpia el intervalo cuando el componente se desmonta

  return (
    <header>
      <h1>Mi Aplicación</h1>
      <p>Fecha y hora actual: {fechaActual.toLocaleString()}</p>
    </header>
  );
}

export default Header;

// Ahora el mismo ejemplo pero en html y js vanilla, para mostrar la fecha actual en un header y actualizarla cada segundo:

// HTML:
// <header></header>
//   <h1>Mi Aplicación</h1>
//   <p id="fechaActual"></p>
// </header>
// JavaScript:
const elementoFecha = document.getElementById("fechaActual");

setInterval(() => {
  elementoFecha.textContent = `La fecha y hora actual es: ${new Date().toLocaleString()}`;
}, 1000);


// Date.parse() es un método estático que analiza una cadena de texto que representa una fecha y devuelve el número de milisegundos desde el 1° de enero de 1970 UTC+0. Si la cadena no se puede analizar como una fecha válida, devuelve NaN.

const fechaValida = Date.parse("2022-12-25");
console.log(fechaValida); // Devuelve el número de milisegundos para el 25 de diciembre de 2022

const fechaInvalida = Date.parse("fecha no válida");
console.log(fechaInvalida); // Devuelve NaN


// Formateo PRO

const fecha = new Date();
 
const formateo = fecha.toLocaleDateString('es-CO', {
  year : "numeric",
  month : "long",
  day : "numeric",
  weekday : "long"
});

console.log(formateo); // Muestra la fecha en el formato deseado, ejemplo hoy es sábado, 1 de junio de 2024





























