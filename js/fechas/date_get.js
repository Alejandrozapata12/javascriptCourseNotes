// Métodos de Data de Obtención de JavaScript
/*
Hay un nuevo constructor Date().
Actualmente para crear un objejo tipo Date, se hace asi = new Date(), este claramente devuelve las fechas y horas actuales.

En JavaScript, enero es el mes número 0, febrero es el número 1, ...
Por último, diciembre es el mes número 11.

Métodos de Obtención de Citas
Method	          Description
getFullYear()	      Get year as a four digit number (yyyy) - Obtiene el año en 4 digitos.
getMonth()	          Get month as a number (0-11) - Obtiene el mes como número.
getDate()	           Get day as a number (1-31)     - Obtiene el día como número.
getDay()	            Get weekday as a number (0-6) - Obtiene la semana como número.
getHours()	           Get hour (0-23) - 
getMinutes()          Get minute (0-59)
getSeconds()	     Get second (0-59)
getMilliseconds()	Get millisecond (0-999)
getTime()	            Get time (milliseconds since January 1, 1970)
*/

// getFullYear() - El método devuelve el año de una fecha como un número de cuatro dígitos.
const data = new Date("2026-03-19");
let full = data.getFullYear(); // 2026

const data_2 = new Date();
data_2.getFullYear(); // 2026


// getMonth() - El método devuelve el mes de una fecha como un número (0-11).
data.getMonth(); // 3
data_2.getMonth(); // 3

// getDate() - El método devuelve el día de una fecha como un número (1-31).
data.getDate(); // 19
data_2.getDate(); // 19


// getDay() - El método devuelve el día laborable de una fecha como un número (0-6)
data.getDay(); // 4 - Jueves
data_2.getDay(); // 4 - Jueves

// getHours() - El método devuelve las horas de una fecha como un número (0-23).
data.getHours(); // 20
data_2.getHours(); // 20

// getMinutes() - El método devuelve las actas de una fecha como un número (0-59).
data.getMinutes(); // 0
data_2.getMinutes(); // 0

// getSeconds() - El método devuelve los segundos de una fecha como un número (0-59)
data.getSeconds(); // 49
data_2.getSeconds(); // 49

// getMilliseconds() - El método devuelve los milisegundos de una fecha como un número (0-999)
data.getMilliseconds(); // 714
data_2.getMilliseconds(); // 714


// getTime() - El método devuelve el número de milisegundos desde el 1 de enero de 1970.
data.getTime(); //  1773972403350
data_2.getTime(); // 1773972403350


// getTimezoneOffset() - El método devuelve la diferencia (en minutos) entre la hora local y la hora UTC
data_2.getTimezoneOffset(); // 300 minutos de diferencia










