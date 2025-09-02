// Agregar elementos al final de un arreglo
const agregarAlFinal = (arreglo, elementos) => {
  arreglo.push(elementos);
  return arreglo;
};
let numeros = [1, 2, 4];

console.log(agregarAlFinal(numeros, 5));

// Agregar elementos al inicio de un arreglo
let agregarAlInicio = (arreglo, elementos) => {
  arreglo.unshift(elementos);
  return arreglo;
};
let numeros1 = [1, 2, 4];

console.log(agregarAlInicio(numeros1, 0));

// Eliminar y devolver el último elemento de un arreglo
let eliminarElementoFinal = (arreglo) => {
  let ultimo = arreglo.pop();
  return ultimo;
};

let numeros3 = [24, 32, 89, 51];
console.log(eliminarElementoFinal(numeros3));

// Eliminar y devolver el primer elemento de un arreglo
let eliminarElementoInicio = (arreglo) => {
  let primero = arreglo.shift();
  return primero;
};
numeros4 = [24, 32, 89, 51];
console.log(eliminarElementoInicio(numeros4));

// Encontrar el índice de la primera aparición de un elemento
let encontrarIndice = (arreglo, elemento) => {
  return arreglo.indexOf(elemento);
};
let numeros5 = [64, 2, 89, 81];
console.log(encontrarIndice(numeros5, 89));

// Obtener la longitud de un arreglo
let obtenerLongitud = (arreglo) => {
  return arreglo.length;
};
let numeros6 = [84, 2, 39, 81, 4, 56, 78];
console.log(obtenerLongitud(numeros6));

// Ordenar un arreglo de números de forma ascendente
let ordenarAscendente = (arreglo) => {
  return arreglo.sort((a, b) => a - b);
};
let numeros7 = [81, 4, 56, 78];
console.log(ordenarAscendente(numeros7));

// Unir los elementos de un arreglo con un separador
let unirElementos = (arreglo, separador) => {
  return arreglo.join(separador);
};
let palabras = ["Hola", "mundo", "desde", "JavaScript"];
console.log(unirElementos(palabras, " "));

// Concatenar múltiples arreglos y/o elementos
let concatenarArreglos = (arreglo1, ...arreglos) => {
  return arreglo1.concat(...arreglos);
};
let numeros8 = [1, 2, 3];
console.log(concatenarArreglos(numeros8, masNumeros, 7, 8, 9));

// Ejecutar una función por cada elemento de un arreglo
let ejecutarPorCadaElemento = (arreglo, callback) => {
  arreglo.forEach(callback);
};
let numeros9 = [1, 2, 3];
ejecutarPorCadaElemento(numeros9, (num) => console.log(num * 2));

// Aplicar una función a cada elemento de un arreglo y devolver un nuevo arreglo
let mapear = (arreglo, callback) => {
  return arreglo.map(callback);
};
let numeros10 = [1, 2, 3];
console.log(mapear(numeros10, (num) => num * 3));

// Filtrar los elementos de un arreglo que cumplan una condición
let filtrar = (arreglo, callback) => {
  return arreglo.filter(callback);
};
let numeros11 = [1, 2, 3, 4, 5, 6];
console.log(filtrar(numeros11, (num) => num % 2 === 0));

// Reducir un arreglo a un solo valor aplicando una función acumuladora
let reducir = (arreglo, callback, valorInicial) => {
  return arreglo.reduce(callback, valorInicial);
};
let numeros12 = [1, 2, 3, 4];
console.log(reducir(numeros12, (acumulador, num) => acumulador + num, 0));
