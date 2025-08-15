// 1. Declara una variable nombre y asígnale tu nombre. Muestra su valor en consola.
let nombre = "Eliab";
console.log(nombre);

// 2. Declara dos variables edad y ciudad y muéstralas juntas en un solo console.log.
let edad = 25;
let ciudad = "Managua";
console.log(`Edad: ${edad}, Ciudad: ${ciudad}`);

// 3. Declara tres variables con valores numéricos y calcula su promedio.
let num1 = 15;
let num2 = 4;
let num3 = 25;
let promedio = (num1 + num2 + num3) / 3;
console.log(`Promedio: ${promedio}`);

// 4. Declara una variable esMayorDeEdad con un valor booleano y muéstrala.
let esMayorDeEdad = edad >= 18;
console.log(`Es mayor de edad: ${esMayorDeEdad}`);

// 5. Declara dos números y muestra su suma.
let a = 5;
let b = 3;
console.log(`Suma: ${a + b}`);

// 6. Declara dos números y muestra su resta, multiplicación y división.
let numero1 = 5;
let numero2 = 3;
console.log(`Resta: ${numero1 - numero2}`);
console.log(`Multiplicación: ${numero1 * numero2}`);
console.log(`División: ${numero1 / numero2}`);

// 7. Declara dos números y muestra el resultado de elevar el primero al segundo.
let Num1 = 10
let Num2 = 2
console.log(`Elevado: ${Math.pow(Num1, Num2)}`);

// 8. Declara una variable precio y otra descuento (en %) y calcula el precio final.
let precio = 100;
let descuento = 20; // en porcentaje
let precioFinal = precio - (precio * (descuento / 100));
console.log(`Precio final: ${precioFinal}`);

// 9. Usando un for, muestra en consola los números del 1 al 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 10. Usando un for, muestra en consola la tabla de multiplicar del 5.
let tablaMultiplicar = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${tablaMultiplicar} x ${i} = ${tablaMultiplicar * i}`);
}

// 11. Usando un while, muestra en consola los números pares del 2 al 20.
let num = 2;
while (num <= 20) {
    console.log(num);
    num += 2;
}

// 12. Crea una función saludar que reciba un nombre y muestre un saludo.
let Nombre = "julieta"

function saludar(Nombre) {
    console.log(`Hola, ${Nombre}!`);
}
saludar(Nombre);

// 13. Crea una función sumar que reciba dos números y retorne su suma.
function sumar(x, y) {
    return x + y;
}
console.log(`Suma: ${sumar(5, 10)}`);

// 14. Crea una función esPar que reciba un número y retorne true si es par, false si no lo es.
function esPar(num) {
    return num % 2 === 0;
}
console.log(`Es par: ${esPar(4)}`);

// 15. Crea una función areaRectangulo que reciba base y altura y retorne su área.
function areaRectangulo(base, altura) {
    return base * altura;
}
console.log(`Área del rectángulo: ${areaRectangulo(5, 10)}`);

// 16. Crea una función flecha multiplicar que reciba dos números y retorne su producto.
const multiplicar = (x, y) => x * y;
console.log(`Producto: ${multiplicar(4, 5)}`);

// 17. Crea una función flecha convertirCelsiusAFahrenheit que reciba grados Celsius y retorne su equivalente en Fahrenheit.
const convertirCelsiusAFahrenheit = (celsius) => (celsius * 9/5) + 32;
console.log(`Fahrenheit: ${convertirCelsiusAFahrenheit(0)}`);

// 18. Crea una función flecha mayorDeDos que reciba dos números y retorne el mayor.
const mayorDeDos = (x, y) => (x > y ? x : y);
console.log(`Mayor: ${mayorDeDos(10, 20)}`);

// 19. Crea una función flecha calcularIVA que reciba un precio y retorne el precio más IVA (15%).
const calcularIVA = (precio) => precio + (precio * 0.15);
console.log(`Precio con IVA: ${calcularIVA(100)}`);

// 20. Declara un arreglo con 5 nombres y recórrelo con un for mostrando cada nombre.
let nombres = ["Ana", "Luis", "Carlos", "Marta", "Sofia"];
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

// 21. Declara un arreglo con 5 números y usa un for para mostrar solo los números mayores que 10.
let numeros = [5, 12, 8, 20, 15];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 10) {
        console.log(numeros[i]);
    }
}

// 22. Declara un arreglo con 5 palabras y usa un for para mostrar su longitud (.length).
let palabras = ["manzana", "banana", "cereza", "durazno", "uva"];
for (let i = 0; i < palabras.length; i++) {
    console.log(`La longitud de "${palabras[i]}" es: ${palabras[i].length}`);
}

// 23. Declara un objeto persona con propiedades nombre, edad y ciudad. Usa un for...in para mostrar cada clave y valor.
let persona = {
    nombre: "Monica",
    edad: 25,
    ciudad: "Managua"
};
for (let clave in persona) {
    console.log(`${clave}: ${persona[clave]}`);
}

// 24. Declara un arreglo de objetos con 3 productos (nombre y precio) y usa un for para mostrar solo los nombres de los productos.
let productos = [
    { nombre: "Laptop", precio: 800 },
    { nombre: "Teléfono", precio: 300 },
    { nombre: "Tablet", precio: 200 }
];
for (let i = 0; i < productos.length; i++) {
    console.log(productos[i].nombre);
}
