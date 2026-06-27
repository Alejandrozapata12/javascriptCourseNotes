// ************************ Propagación y captura ************************

/*
1. ¿Qué es la propagación de eventos?

Cuando ocurre un evento (click, submit, keydown, etc.), ese evento no se queda únicamente en el elemento donde ocurrió.
JavaScript hace que el evento viaje por el DOM.
Imagina esta estructura: 

<body>
    <div id="contenedor">
        <button id="btn">Guardar</button>
    </div>
</body>

Si haces click en el botón, el evento puede pasar por:
BODY
  ↓
DIV
  ↓
BUTTON

y luego regresar
BUTTON
  ↑
DIV
  ↑
BODY

Ese recorrido tiene dos fases:

Capturing (bajada)
Bubbling (subida)

2. Capturing (bajada)

En esta fase, el evento viaja desde el elemento raíz (document) hacia el elemento objetivo (donde ocurrió el evento).
Si quieres escuchar un evento durante esta fase, debes usar addEventListener con el tercer argumento como true.
Ejemplo:
*/
document.getElementById('btn').addEventListener('click', function() {
    console.log('Capturing: Click en el botón');
}, true); // true para capturar

/*
3. Bubbling (subida)
En esta fase, el evento viaja desde el elemento objetivo hacia el elemento raíz.
Si quieres escuchar un evento durante esta fase, puedes usar addEventListener sin el tercer argumento o con false.
Ejemplo:
*/
document.getElementById('btn').addEventListener('click', function() {
    console.log('Bubbling: Click en el botón');
}); // false o sin el tercer argumento para bubbling

/*
4. Detener la propagación
Si quieres evitar que el evento siga viajando por el DOM, puedes usar event.stopPropagation().  
Ejemplo:
document.getElementById('btn').addEventListener('click', function(event) {
    console.log('Click en el botón');
    event.stopPropagation(); // Detiene la propagación
});
5. Delegación de eventos
En lugar de agregar un listener a cada elemento, puedes agregar un listener a un elemento padre y usar la propagación para manejar eventos de sus hijos.
Ejemplo:
document.getElementById('contenedor').addEventListener('click', function(event) {
    if (event.target.id === 'btn') {
        console.log('Click en el botón desde el contenedor');
    }
});
En este ejemplo, el listener está en el contenedor, pero puede detectar clicks en el botón gracias a la propagación.
6. Resumen
- La propagación de eventos es el proceso por el cual un evento viaja por el DOM.
- Hay dos fases: Capturing (bajada) y Bubbling (subida).
- Puedes escuchar eventos en cualquiera de las fases usando addEventListener con el tercer argumento adecuado.
- Puedes detener la propagación con event.stopPropagation().
- La delegación de eventos es una técnica útil para manejar eventos de múltiples elementos desde un solo listener.  
*/

/*
Bubbling (Burbujeo):
Es el comportamiento por defecto de los eventos en JavaScript. Cuando un evento ocurre en un elemento (por ejemplo, un botón), el evento primero se ejecuta en ese elemento y luego sube por todos sus elementos padres hasta llegar al document.

Capturing (Captura):
Es la fase en la que el evento baja desde el document hasta el elemento donde ocurrió el evento. Existe, pero rara vez se utiliza en proyectos reales.

event.target:
Devuelve el elemento donde se originó el evento.

event.stopPropagation():
Detiene el recorrido del evento para que no siga propagándose hacia los elementos padres.

Event Delegation (Delegación de Eventos):
Consiste en colocar un único addEventListener() en un elemento padre y utilizar event.target para identificar qué elemento hijo originó el evento. Esta técnica mejora el rendimiento y facilita el mantenimiento del código cuando hay muchos elementos dinámicos.

 */