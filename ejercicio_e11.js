// Arreglo de números
let numeros = [5, 2, 9, 1, 7];

// Orden ascendente
numeros.sort((a, b) => a - b);
console.log(numeros); // [1, 2, 5, 7, 9]

// Orden descendente
numeros.sort((a, b) => b - a); 
console.log(numeros); // [9, 7, 5, 2, 1]

// Arreglo de cadenas
let frutas = ["banana", "manzana", "naranja", "uva"];
frutas.sort(); // Orden alfabético por defecto
console.log(frutas); // ["banana", "manzana", "naranja", "uva"]

// Orden alfabético inverso
frutas.sort((a, b) => b.localeCompare(a));
console.log(frutas); // ["uva", "naranja", "manzana", "banana"]

let personas =[
  {nombre: "Juan", edad: 25},
  {nombre: "Ana", edad: 30},
  {Nomnre: "Pedro", edad: 20}
];

// Ordenar por edad (Orden ascendente)
personas.sort((a, b) => a.edad - b.edad);
console.log(personas);

// Ordenar por nombre (Orden ascendente)
personas.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log(personas)

let numero = [1, 2, 3, 4, 5];
numero.reverse();
console.log(numero);

let palabras = ["hola", "mundo", "javascript"];
palabras.reverse();
console.log(palabras);

let calificaciones = [
  {estudiante: "Eliab", asignatura: "matematica", calificacion: 60},
  {estudiante: "Xiomara", asignatura: "Historia", calificacion: 100},
  {estudiante: "Camilo", asignatura: "Español", calificacion: 80},
  {estudiante: "Ramiro", asignatura: "fisica", calificacion: 55},
  {estudiante: "Ana", asignatura: "Quimica", calificacion: 77}
];

calificaciones.sort((a, b) => b.asignatura.localeCompare(a.asignatura));
console.log(calificaciones)

calificaciones.sort((a, b) => b.calificacion - a.calificacion);
console.log(calificaciones);