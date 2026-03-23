/*
Los métodos de fecha fija permiten establecer valores de fecha (años, meses, días, horas, minutos, segundos, milisegundos) para un Objeto de Fecha.


Métodos de fecha fija
Se utilizan métodos de fecha fija para establecer una parte de una fecha:

Method	Description
setDate()	Set the day as a number (1-31)
setFullYear()	Set the year (yyyy)
setHours()	Set the hour (0-23)
setMilliseconds()	Set the milliseconds (0-999)
setMinutes()	Set the minutes (0-59)
setMonth()	Set the month (0-11)
setSeconds()	Set the seconds (0-59)
setTime()	Set the time (milliseconds since January 1, 1970)
*/

// setFullYear() ->  El método establece el año de un objeto de fecha. El método puede establecer opcionalmente mes y día
const atras = new Date("Jan 01, 2025");
atras.setFullYear()(2020); // Wed Jan 01 2020 00:00:00 GMT-0500 (hora estándar de Colombia)

//  setMonth()  -> El método establece el mes de un objeto de fecha (0-11)
atras.setMonth(11); // Mon Dec 01 2025 00:00:00 GMT-0500 (hora estándar de Colombia)

// setDate() -> El método establece el día de un objeto de fecha (1-31)
atras.setDate(21); // Tue Jan 21 2025 00:00:00 GMT-0500 (hora estándar de Colombia)

// setHours -> El método establece las horas de un objeto de fecha (0-23)
atras.setHours(13); // Wed Jan 01 2025 13:00:00 GMT-0500 (hora estándar de Colombia)

// setMinutes -> El método establece las actas de un objeto de fecha (0-59)
atras.setMinutes(55); // Wed Jan 01 2025 13:55:00 GMT-0500 (hora estándar de Colombia)

// setSeconds() -> El método establece los segundos de un objeto de fecha (0-59)
atras.setSeconds(59); // Wed Jan 01 2025 13:55:59 GMT-0500 (hora estándar de Colombia)


/*
Comparar fechas
Las fechas se pueden comparar fácilmente.

El siguiente ejemplo compara la fecha de hoy con el 14 de enero de 2100
*/

let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  text = "Today is before January 14, 2100."; // Today is before January 14, 2100.
} else {
  text = "Today is after January 14, 2100.";
}

