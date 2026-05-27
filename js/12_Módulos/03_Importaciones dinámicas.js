// Importaciones dinámicas

/*
las importaciones dinámicas son una característica de JavaScript que permite cargar módulos de forma asíncrona en tiempo de ejecución. Esto es útil para mejorar el rendimiento de las aplicaciones al cargar solo los módulos necesarios en un momento dado, en lugar de cargar todos los módulos al inicio.
*/

// 1. El problema que resuelve
// Normalmente importamos así:
import { miFuncion } from './miModulo.js';

// Esto carga el módulo completo al inicio, incluso si no se necesita de inmediato.
/*
El problema:

Se carga SIEMPRE
Aunque el usuario nunca use esa funcionalidad
Hace más pesado el sitio/app
*/

// 2. La solución: importaciones dinámicas
// Con las importaciones dinámicas, podemos cargar el módulo solo cuando sea necesario:
function cargarModulo() {
  import('./miModulo.js')
    .then((modulo) => {
      // Aquí puedes usar el módulo importado
      modulo.miFuncion();
    })
    .catch((error) => {
      console.error('Error al cargar el módulo:', error);
    });

  /*
  El módulo se carga SOLO CUANDO SE NECESITA
  Si el usuario no usa esa funcionalidad, el módulo nunca se carga
  Hace más ligero el sitio/app
  */
}

// 3. Uso con async/await
async function cargarModuloAsync() {
  try {
    const modulo = await import('./miModulo.js');
    modulo.miFuncion();
  } catch (error) {
    console.error('Error al cargar el módulo:', error);
  }
}

// En resumen, las importaciones dinámicas son una herramienta poderosa para optimizar el rendimiento de las aplicaciones al cargar módulos solo cuando se necesitan, lo que puede mejorar significativamente la experiencia del usuario.

// 4. Diferencia CLAVE
/*
Importación estática:
- Se carga al inicio
- No se puede controlar cuándo se carga
- Puede hacer que la aplicación sea más lenta si hay muchos módulos
Importación dinámica:
- Se carga en tiempo de ejecución
- Se puede controlar cuándo se carga
- Mejora el rendimiento al cargar solo lo necesario
*/

// ======== Ejemplo real ========
// Supongamos que tenemos una aplicación de comercio electrónico y queremos cargar un módulo de análisis solo cuando el usuario accede a la sección de estadísticas:
document.getElementById('estadisticas').addEventListener('click', () => {
  import('./analisis.js')
    .then((modulo) => {
      modulo.mostrarEstadisticas();
    })
    .catch((error) => {
      console.error('Error al cargar el módulo de análisis:', error);
    });
});

/*
En este ejemplo, el módulo de análisis solo se carga cuando el usuario hace clic en la sección de estadísticas, lo que mejora el rendimiento general de la aplicación al no cargar ese módulo innecesariamente al inicio.
*/

// ======== Ejemplo de cara a react ========
// En React, las importaciones dinámicas se pueden usar para cargar componentes de forma asíncrona, lo que es especialmente útil para mejorar el rendimiento de la aplicación al dividir el código en partes más pequeñas (code splitting).
import React, { Suspense } from 'react';  

const MiComponente = React.lazy(() => import('./MiComponente'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Cargando...</div>}>
        <MiComponente />
      </Suspense>
    </div>
  );
}

/*
En este ejemplo, el componente `MiComponente` se carga de forma asíncrona solo cuando se necesita, y mientras se carga, se muestra un mensaje de "Cargando...". Esto mejora el rendimiento de la aplicación al no cargar el componente innecesariamente al inicio.
*/








