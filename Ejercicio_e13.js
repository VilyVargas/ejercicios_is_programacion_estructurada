
// 1. reduce()

const numeros = [1, 2, 3, 4, 5];
const suma = numeros.reduce((acc, num) => acc + num, 0);
console.log(suma); // 15

const productos = [
{ nombre: "Camisa", precio: 20 },
{ nombre: "Pantalón", precio: 30 },
{ nombre: "Zapatos", precio: 50 }
];
const total = productos.reduce((acc, prod) => acc + prod.precio, 0);
console.log(total); // 100

// 2. find()

const nombres = ["Ana", "Luis", "Pedro", "María"];
const encontrado = nombres.find(nombre => nombre.startsWith("P"));
console.log(encontrado); // "Pedro"

const usuarios = [
{ id: 1, nombre: "Carlos" },
{ id: 2, nombre: "Lucía" },
{ id: 3, nombre: "Marta" }
];
const usuario = usuarios.find(u => u.id === 2);
console.log(usuario); // { id: 2, nombre: "Lucía" }

// 3. every()

const edades = [18, 22, 30, 25];
const todosMayores = edades.every(edad => edad >= 18);
console.log(todosMayores); // true

const tareas = [
{ nombre: "Estudiar", completada: true },
{ nombre: "Ejercicio", completada: true },
{ nombre: "Leer", completada: false }
];
const todasCompletas = tareas.every(t => t.completada === true);
console.log(todasCompletas); // false

// 4. some()

const notas = [5, 8, 9, 3];
const hayReprobados = notas.some(nota => nota < 6);
console.log(hayReprobados); // true

const inventario = [
{ producto: "Manzanas", cantidad: 0 },
{ producto: "Naranjas", cantidad: 10 },
{ producto: "Peras", cantidad: 3 }
];
const agotado = inventario.some(item => item.cantidad === 0);
console.log(agotado); // true

// 5. filter()

const numeros1 = [5, 10, 15, 20, 25];
const mayoresQue15 = numeros.filter(num => num > 15);
console.log(mayoresQue15); // [20, 25]

const empleados = [
{ nombre: "Ana", puesto: "Desarrolladora" },
{ nombre: "Luis", puesto: "Diseñador" },
{ nombre: "Marta", puesto: "Desarrolladora" }
];
const desarrolladores = empleados.filter(e => e.puesto === "Desarrolladora");
console.log(desarrolladores);

// 1. Obtén un nuevo arreglo con todas las personas cuya edad sea mayor o igual a 18 años.
const personas = [18, 22, 30, 25];
const todosMayoresdeedad = personas.every(edad => edad >= 18);
console.log(todosMayoresdeedad); // true

// 2. Encuentra la primera persona en el arreglo cuyo nombre comience con la letra "L".

const nombres1 = ["Juan", "Luis", "Camilo", "Carolina"];
const encontrado1 = nombres1.find(nombre => nombre.startsWith("L"));
console.log(encontrado1); // "Luis"

// 3. Calcula la suma total de las edades de todas las personas en el arreglo.

const edades1 = [18, 22, 30, 25];
const sumaedades = edades1.reduce((acc, edad) => acc + edad, 0);
console.log(sumaedades); // 95

// 4. Verifica si todas las personas en el arreglo son mayores o iguales a 15 años.

const personas1 = [15, 40, 17, 80];
const todosMayoresdeedad1 = personas1.every(edad => edad >= 15);
console.log(todosMayoresdeedad1); // true

// 5. Comprueba si existe al menos una persona en el arreglo que tenga 40 años
const edades2 = [18, 22, 30, 25];
const hayCuarentones = edades2.some(edad => edad === 40);
console.log(hayCuarentones); // false

const edades3 = [18, 22, 30, 40, 25, 8];
const menorq10 = edades3.find(edad => edad < 10);
console.log(menorq10); // 8

// metodo q devuelva el primer usuario cuyo salario sea mayor a 15000 y su nombre empiece con la letra "A".

const usuarios1 = [
{ nombre: "Ana", salario: 20000 },
{ nombre: "Luis", salario: 11000 },
{ nombre: "Marta", salario: 17000 }
];

const usuarioConAltoSalario = usuarios1.find(u => u.salario > 15000 && u.nombre.startsWith("A"));
console.log(usuarioConAltoSalario); // { nombre: "Ana", salario: 20000 }  

// metodo q verifique cuyo salario sea mayor a 20000 
const usuarios2 = [
{ nombre: "Ana", salario: 20000 },
{ nombre: "Luis", salario: 11000 },
{ nombre: "Marta", salario: 17000 },
{ nombre: "Andres", salario: 25000 },
{ nombre: "Alberto", salario: 9000 }
];

const usuarioConAltoSalario1 = usuarios2.every(u => u.salario > 20000);
console.log(usuarioConAltoSalario1);

const usuarioConAltoSalario2 = usuarios2.some(u => u.salario > 20000);
console.log(usuarioConAltoSalario1);
