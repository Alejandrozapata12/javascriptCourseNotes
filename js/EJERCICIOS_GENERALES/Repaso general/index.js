// ================ 1. VARIABLES ================
var prestador = "Alejandro";
let apellido = "Zapata";
const editor = true;

// ================ 2. TIPOS DE DATOS ================

let nombre = "Carlos"; // String
let edad = 24; // Number
let activo = true; // Boolean
let data = { // Objeto
  first: "Alejandro",
  last: "Zapata",
  fullName() {
    console.log(this.first + this.last);
  }
}
data.fullName();

let grande = 99999999999; // BigInt
let proposito = null; // Null
let defecto; // Undefined

// ================ 3. OPERADORES ================

// Aritmeticos

let numberOne = 4;
let numberTwo = 4;
console.log(numberOne + numberTwo); // 8 "SUMA";
console.log(numberOne - numberTwo); // 0 "RESTA";
console.log(numberOne * numberTwo); // 16 "MULTIPLICACIÓN";
console.log(numberOne / numberTwo); // 1 "DIVISION";
console.log(numberOne ** numberTwo); // 256 "EXPONENCIACIÓN";
console.log(numberOne % numberTwo); // 0 "MODULO";

let incremento = numberOne++;
console.log(incremento); // 5 "Incremento";

let decremento = numberTwo--;
console.log(decremento); // 3 "Decremento";

// Asignación

let x = 10;
let y = 12;

let sumaAsigna = x += 5; // 15 suma y asigna
let restaAsigna = y -= 2; // 10 resta y asigna
let multiplicaAsigna = x *= 2; // 30 multiplica y asigna
let divideAsigna = y /= 2; // 5 divide y asigna
let moduloAsigna = x %= 7; // 2 modulo y asigna

// Comparación

let compOne = "4";
let compTwo = 4;

if (compOne == compTwo) {
  console.log("Igual que valor");
} else if (compOne === compTwo) {
  console.log("Igual que valor y tipo");
} else if (compOne != compTwo) {
  console.log("No es igual que valor")
} else if (compOne !== compTwo) {
  console.log("No es igual que valor y tipo");
} else if (compOne > compTwo) {
  console.log("Mayor que");
} else if (compOne < compTwo) {
  console.log("Menor que");
} else if (compOne >= compTwo) {
  console.log("Mayor o igual que");
} else if (compOne <= compTwo) {
  console.log("Menor o igual que");
} else {
  console.log("fuera");
}

// Logicos

let car = "Audi";
let color = "Rojo";
let ciudad = null;

if (car === "Audi" && color === "Rojo") { // && (Y)
  console.log("¡Lo quiero!");
} else if (car === "Audi" || color === "Blanco") { // || (O)
  console.log("mmm no se, lo pensaria");
} else if (!(car === color)) { // ! (Not)
  console.log("No lo quiero");
} else if ((ciudad ?? "No existe") === "No existe") { // ?? Nullish Coalescing 
  console.log("Ciudad no habilitada");
} else {
  console.log("Estoy fuera");
}

// ================ 4. ARRAYS ================
const roles = ["Administrador", "Empleado", "Gerente Bodega"];

// Acceso
console.log(roles[1]); // Empleado

// Busqueda
console.log(roles.indexOf("Administrador")); // 0
console.log(roles.lastIndexOf("Administrador")); // 0
console.log(roles.includes("Empleado")); // true

const cantidadEmpleados = [
  { administrador: 500 },
  { empleado: 0 },
  { gerenteBodega: 155 }
];

let admin = cantidadEmpleados.find(item => item.administrador);
console.log(admin);  // {administrador: 500}

let adminFindIndex = cantidadEmpleados.findIndex(itemTwo => itemTwo.administrador);
console.log(adminFindIndex); // 0

let adminFindLast = cantidadEmpleados.findLast(itemThr => itemThr.administrador);
console.log(adminFindLast); // {administrador: 500}

// Iteración => Iteración y transformación 
const nombres = ["Alejandro", "Carlos", "Adriana", "Sthepanya", "Luis", "Thomas", "Andres", "Natalia"];

let recorrer = nombres.forEach(n => {
  console.log(n) // Alejandro Carlos Adriana Sthepanya Luis Thomas Andres Natalia
})

const transformar = nombres.map(item => item.toUpperCase());
console.log(transformar);
/*
[
  'ALEJANDRO', 'CARLOS',
  'ADRIANA',   'STHEPANYA',
  'LUIS',      'THOMAS',
  'ANDRES',    'NATALIA'
]
*/
// Iteración => FILTRADO
const edades = [10, 40, 60, 78, 24, 56, 89];

const viejos = edades.filter(may => may > 40);
console.log("Las edades mas avanzadas en el sistema son: " + viejos);

// Iteración => REDUCCIÓN
let operation = [2, 4, 5, 6, 8, 12];
let redu = operation.reduce((itOne, itTwo) => itOne + itTwo,0);
console.log(redu);


// ================ 5. CONDICIONALES ================
// Haz un sistema que determine la nota de un estudiante.
/*
>=90 Excelente

>=80 Bueno

>=70 Aprobó

<70 Reprobó
 */

let nota = 95;
const excelente = 90;
const bueno = 80;
const aprobo = 70;
const reprobo = 70;

if(nota >= excelente ){
  console.log("Excelente");
} else if (nota >= bueno){
  console.log("Bueno");
} else if(nota >= aprobo){
   console.log("Aprobó");
} else  if (nota < reprobo){
  console.log("Reprobó");
}else{
  console.log("Error, número incorrecto")
}

// ================ 6. FUNCIONES ================
// Calcular el IMC

const imprimir = document.querySelector("#pm");
const peso = document.querySelector("#peso");
const altura = document.querySelector("#altura"); 
const btn = document.querySelector("#apply");

function calcularImc(p, a) {
  if (p === 0 || a === 0 || isNaN(p) || isNaN(a)) {
    imprimir.textContent = "Error, número inválido";
    return;
  }
  
  const imc = p / Math.pow(a, 2);
  let clasificacion = "";

  // Evaluación del rango de IMC
  if (imc < 18.5) {
    clasificacion = "Bajo peso";
  } else if (imc >= 18.5 && imc < 25) {
    clasificacion = "Normal";
  } else if (imc >= 25 && imc < 30) {
    clasificacion = "Sobrepeso";
  } else {
    clasificacion = "Obesidad";
  }

  // Muestra el resultado numérico y la categoría
  imprimir.textContent = `Tu IMC es: ${imc.toFixed(1)} (${clasificacion})`;
}

function iniciar() {
  const valorPeso = Number(peso.value);
  const valorAltura = Number(altura.value);
  
  calcularImc(valorPeso, valorAltura);
}

btn.addEventListener("click", iniciar);

// ================ 7. OBJETOS ================

// Objeto principal con sus métodos nativos
    const empleado = {
      nombre: "",
      edad: 0,
      salario: 0,
      cargo: "",

      aumentarSalario(porcentaje) {
        this.salario += this.salario * (porcentaje / 100);
        mostrarMensajeEnPantalla(`📈 Salario aumentado un ${porcentaje}%. Nuevo sueldo: $${this.salario.toFixed(2)}`);
      },

      mostrarInfo() {
        const contenedor = document.querySelector("#consolaPantalla");
        contenedor.style.display = "block";
        contenedor.innerHTML = `
          <strong>DATOS DEL EMPLEADO:</strong><br>
          • Nombre: ${this.nombre}<br>
          • Edad: ${this.edad} años<br>
          • Cargo: ${this.cargo}<br>
          • Salario: $${this.salario.toFixed(2)}
        `;
      },

      cumplirAños() {
        this.edad += 1;
        mostrarMensajeEnPantalla(`🎉 ¡Feliz Cumpleaños ${this.nombre}! Ahora tienes ${this.edad} años.`);
      }
    };

    // selectores del DOM
    const inputNombre = document.querySelector("#nombreEmp");
    const inputEdad = document.querySelector("#edadEmp");
    const inputSalario = document.querySelector("#salarioEmp");
    const inputCargo = document.querySelector("#cargoEmp");
    const inputPorcentaje = document.querySelector("#porcentajeAumento");

    const btnAumentar = document.querySelector("#btnAumentar");
    const btnCumplir = document.querySelector("#btnCumplir");
    const btnMostrar = document.querySelector("#btnMostrar");
    const consolaPantalla = document.querySelector("#consolaPantalla");

    // Sincroniza lo que escribe el usuario con las propiedades del objeto
    function actualizarDatosObjeto() {
      empleado.nombre = inputNombre.value.trim() || "No asignado";
      empleado.edad = Number(inputEdad.value) || 0;
      empleado.salario = Number(inputSalario.value) || 0;
      empleado.cargo = inputCargo.value.trim() || "No asignado";
    }

    // Pequeña función auxiliar para notificaciones rápidas en pantalla
    function mostrarMensajeEnPantalla(msg) {
      consolaPantalla.style.display = "block";
      consolaPantalla.innerHTML = msg;
    }

    // Eventos
    btnAumentar.addEventListener("click", () => {
      actualizarDatosObjeto();
      const porcentaje = Number(inputPorcentaje.value);
      if (porcentaje > 0 && empleado.salario > 0) {
        empleado.aumentarSalario(porcentaje);
        inputSalario.value = empleado.salario.toFixed(2); // Refleja el cambio en el input
      } else {
        mostrarMensajeEnPantalla("⚠️ Ingresa un salario base y un porcentaje válidos.");
      }
    });

    btnCumplir.addEventListener("click", () => {
      actualizarDatosObjeto();
      if (inputEdad.value !== "") {
        empleado.cumplirAños();
        inputEdad.value = empleado.edad; // Refleja el cambio en el input
      } else {
        mostrarMensajeEnPantalla("⚠️ Introduce primero la edad actual.");
      }
    });

    btnMostrar.addEventListener("click", () => {
      actualizarDatosObjeto();
      empleado.mostrarInfo();
    });

    // ================ 8. DESESTRUCTURACIÓN y SPREAD ================

    // Convertir: 

    const persona = {
    nombre:"Juan",
    edad:30,
    direccion:{
        ciudad:"Bogotá",
        pais:"Colombia"
    }
}

const {nombre} = persona;
console.log(nombre);

const {ciudad} = persona.direccion;
console.log(ciudad); 

// Spread
const copiaObj = {...persona}; // Copia del objeto original

const estado = {
  ...persona, // Copia el estado y valor de este objeto y lo une con este nuevo
  state: true
};

    // ================ 9. CLASES ================

// --- DEFINICIÓN DE LA CLASE ---
    class Empleado {
      constructor(nombre, cargo, edad, salario) {
        this.nombre = nombre;
        this.cargo = cargo;
        this.edad = edad;
        this.salario = salario;
      }

      aumentarSalario(porcentaje) {
        this.salario += this.salario * (porcentaje / 100);
      }

      cumplirAnos() {
        this.edad += 1;
      }
    }

    // --- LÓGICA DE LA APLICACIÓN ---
    const listaEmpleados = []; // Array donde guardaremos cada "new Empleado()"

    // Selectores
    const inputNombre = document.querySelector("#nombre");
    const inputCargo = document.querySelector("#cargo");
    const inputEdad = document.querySelector("#edad");
    const inputSalario = document.querySelector("#salario");
    const selectEmpleados = document.querySelector("#selectEmpleados");
    const listaVisual = document.querySelector("#listaVisual");
    const inputPorcentaje = document.querySelector("#porcentaje");

    // Botones
    document.querySelector("#btnRegistrar").addEventListener("click", () => {
      const nom = inputNombre.value.trim();
      const car = inputCargo.value.trim();
      const ed = Number(inputEdad.value);
      const sal = Number(inputSalario.value);

      if (!nom || !car || !ed || !sal) return alert("Completa todos los campos");

      // Instanciación usando la Clase
      const nuevoEmpleado = new Empleado(nom, car, ed, sal);
      listaEmpleados.push(nuevoEmpleado);

      limpiarFormulario();
      actualizarInterfaz();
    });

    function actualizarInterfaz() {
      // 1. Limpiar y rellenar el selector desplegable
      selectEmpleados.innerHTML = '<option value="">-- Seleccionar --</option>';
      // 2. Limpiar el visor de texto
      listaVisual.innerHTML = "";

      listaEmpleados.forEach((emp, index) => {
        // Añadir al desplegable
        const option = document.createElement("option");
        option.value = index;
        option.textContent = emp.nombre;
        selectEmpleados.appendChild(option);

        // Añadir a la lista visual de la pantalla
        const div = document.createElement("div");
        div.className = "empleado-item";
        div.innerHTML = `[ID: ${index}] <strong>${emp.nombre}</strong> - ${emp.cargo} | Edad: ${emp.edad} | Salario: $${emp.salario.toFixed(2)}`;
        listaVisual.appendChild(div);
      });

      if (listaEmpleados.length === 0) {
        listaVisual.textContent = "Ningún empleado registrado aún.";
      }
    }

    // Evento Aumentar Salario ejecutando el método de la clase
    document.querySelector("#btnAumentar").addEventListener("click", () => {
      const idx = selectEmpleados.value;
      const pct = Number(inputPorcentaje.value);

      if (idx === "" || isNaN(pct) || pct <= 0) return alert("Selecciona un empleado e ingresa un % válido");

      // Llamamos directamente al método nativo de esa instancia específica
      listaEmpleados[idx].aumentarSalario(pct);
      inputPorcentaje.value = "";
      actualizarInterfaz();
    });

    // Evento Cumplir Años ejecutando el método de la clase
    document.querySelector("#btnCumplir").addEventListener("click", () => {
      const idx = selectEmpleados.value;
      if (idx === "") return alert("Selecciona un empleado primero");

      // Llamamos al método nativo de la instancia
      listaEmpleados[idx].cumplirAnos();
      actualizarInterfaz();
    });

    function limpiarFormulario() {
      inputNombre.value = "";
      inputCargo.value = "";
      inputEdad.value = "";
      inputSalario.value = "";
    }


































