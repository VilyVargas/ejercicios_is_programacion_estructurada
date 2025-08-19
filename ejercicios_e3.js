
//Analice y codifique el siguiente objeto:
const persona = {
nombre: "Carlos",
edad: 28,
direccion: {
ciudad: "Madrid",
codigoPostal: 28001
},
hobbies: ["leer", "correr", "pintar"]
};

//Muestra el nombre de la persona.
const mostrarNombre = (obj) => console.log(`Nombre: ${obj.nombre}`);
//Muestra la edad de la persona.
const mostrarEdad = (obj) => console.log(`Edad: ${obj.edad}`);
//Muestra la ciudad donde vive.
const mostrarCiudad = (obj) => console.log(`Ciudad: ${obj.direccion.ciudad}`);
//Muestra el código postal usando corchetes.
const mostrarCodigoPostal = (obj) => console.log(`Código Postal: ${obj.direccion["codigoPostal"]}`);
//Muestra el segundo hobby de la persona.
const mostrarSegundoHobby = (obj) => console.log(`Segundo Hobby: ${obj.hobbies[1]}`);

mostrarNombre(persona);
mostrarEdad(persona);
mostrarCiudad(persona);
mostrarCodigoPostal(persona);
mostrarSegundoHobby(persona);