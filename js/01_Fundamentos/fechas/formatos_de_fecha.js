// ********** Formatos de fecha en JavaScript**********

// UTC (Tiempo Universal Coordinado) es igual que GMT (Hora Media de Greenwich).

/*
Entrada de fecha en JavaScript
Generalmente existen 3 tipos de formatos de entrada de fecha en JavaScript:

Tipo	           Ejemplo
Fecha ISO	  "2015-03-25" (El estandar internacional)
Fecha corta	  "03/25/2015"
Fecha larga	  "25 de marzo de 2015" o "25 de marzo de 2015"

El formato ISO sigue un estándar estricto en JavaScript.
Los otros formatos no lo son Así que está bien definido y puede depender del navegador.
*/

/*
Fechas ISO de JavaScript
ISO 8601 es la norma internacional para la representación de fechas y veces.

La sintaxis ISO 8601 (AAAA-MM-DD) es también el formato de fecha preferido para JavaScript:
Las fechas ISO pueden escribirse sin especificar el día (YYYY-MM)
Las fechas ISO pueden escribirse sin mes ni día (YYYY)
Las fechas ISO pueden escribirse con horas, minutos y segundos añadidos (YYYY-MM-DDTHH:MM:SSZ)
La fecha y la hora se separan con mayúscula.
La hora UTC se define con la letra Z mayúscula.
Si quieres modificar el tiempo relativo a UTC, elimina la Z y añade +HH:MM o -HH:MM En su lugar

*/
// Ejemplo (fecha completa)
const d = new Date("2015-03-25");

// Ejemplo (fecha sin especificar el día)
const sin = new Date("2026-02");

// Ejemplo (fecha sin especificar mes ni día)
const incomp = new Date("2026");

// Ejemplo (fecha con año, mes, día, hora, minutos, segundos)
const complet = new Date("2015-03-25T12:00:00Z");


// Fechas cortas -> Las fechas cortas se escriben con una sintaxis "MM/DD/YYYY" así:
const corta = new Date("03/19/2026"); // Wed Mar 25 2015 00:00:00 GMT-0500 (hora estándar de Colombia)

// Fechas largas -> Las fechas largas suelen escribirse con una sintaxis "MMM DD YYYY" así:
const larga = new Date("Mar 25 2015"); // Wed Mar 25 2015 00:00:00 GMT-0500 (hora estándar de Colombia)

// El mes y el día pueden estar en cualquier orden
const larga_2 = new Date("25 Mar 2015");  // Wed Mar 25 2015 00:00:00 GMT-0500 (hora estándar de Colombia)

// Y el mes puede escribirse completo (enero) o abreviarse (enero):
const normal = new Date("January 25 2026"); // Normal
const abrevi = new Date ("Jan 25 2026"); // Abreviado


// Si tienes una cadena de fechas válida, puedes usar el método para convertirla a milisegundos. Date.parse()
const conr = Date.parse("March 19 2026"); // 1773896400000
// Luego puedes usar el número de milisegundos para convertirlo en un objeto fecha
const fechaCorre = new Date(conr);  // Thu Mar 19 2026 00:00:00 GMT-0500 (hora estándar de Colombia)
