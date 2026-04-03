// Los objetos Date de JavaScript nos permiten trabajar con fechas.

// Ejemplo

const hoy = new Date(); // Wed Mar 18 2026 19:27:53 GMT-0500 (hora estándar de Colombia)


/* Creación de objetos de fecha
Los objetos de fecha se crean con el constructor.new Date()

Hay 9 formas de crear un nuevo objeto de fecha:

new Date()
new Date(date string)

new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)

new Date(milliseconds)


JavaScript cuenta los meses desde 0 hasta 11:

enero = 0.

Diciembre = 11.
*/

// Ahora vamos a ver cada uno

// new Date()
const general = new Date(); 
console.log(general); // Thu Mar 19 2026 19:44:39 GMT-0500 (hora estándar de Colombia)

// new Date(date string) - crea un objeto de fecha a partir de una cadena de fechas.
const dStr = new Date("October 13, 2014 11:13:00"); // Mon Oct 13 2014 11:13:00 GMT-0500 (hora estándar de Colombia)

const dStr2 = new Date("2026-03-25"); // Thu Mar 25 2026 19:00:00 GMT-0500 (hora estándar de Colombia)

// new date(year,month) -  crea un objeto de fecha con una fecha y hora especificadas. 7 números especifican año, mes, día, hora, minuto, segundo y milisegundo (en ese orden)
const d = new Date(2026,2,19,7,50,49); // Thu Mar 19 2026 07:50:49 GMT-0500 (hora estándar de Colombia)

// new Date(milliseconds) - crea un nuevo objeto de fecha como milisegundos más cero tiempo.
const x = new Date(100000000000); // Sat Mar 03 1973 04:46:40 GMT-0500 (hora estándar de Colombia)


/*
Fechas de exhibición
JavaScript (por defecto) genera fechas usando el método toString(). Esta es una representación en cadena de la fecha, incluyendo la zona horaria. El formato está especificado en la especificación ECMAScript:

Ejemplo
Thu Mar 19 2026 19:21:05 GMT-0500 (hora estándar de Colombia)
*/

// Cuando se muestra un objeto date en HTML, se convierte automáticamente en un con el método.toString()
// Ejemplo
const v = new Date();
v.toString(); // Sat Mar 03 1973 04:46:40 GMT-0500 (hora estándar de Colombia) => (de fecha a String)


// El método toDateString() convierte una fecha en una más legible Formato:
const tod = new Date();
let conver = tod.toDateString(); // Thu Mar 19 2026

// El método toUTCString() convierte una fecha en una cadena usando el estándar UTC:
const utc = new Date();
let resultado = utc.toUTCString(); // Thu, 19 Mar 2026 01:00:59 GMT

// El método toISOString() convierte una fecha en una cadena usando el estándar ISO:
const iso = new Date();
let nue = iso.toISOString(); // 2026-03-19T01:03:19.120Z

/*3 métodos muy importantes */



