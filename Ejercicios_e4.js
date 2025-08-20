const universidad = {
  nombre: "Universidad Central",
  ubicacion: {
    ciudad: "Sevilla",
    direccion: {
      calle: "Av. Principal",
      numero: 123,
    },
  },
  facultades: [
    {
      nombre: "Ingeniería",
      carreras: [
        {
          nombre: "Informática",
          estudiantes: [
            { nombre: "Laura", edad: 20, hobbies: ["programar", "ajedrez"] },
            { nombre: "Javier", edad: 22, hobbies: ["fútbol", "cine"] },
          ],
        },
        {
          nombre: "Civil",
          estudiantes: [
            { nombre: "Sofía", edad: 21, hobbies: ["fotografía", "leer"] },
          ],
        },
      ],
    },
    {
      nombre: "Derecho",
      carreras: [
        {
          nombre: "Derecho Penal",
          estudiantes: [
            { nombre: "Andrés", edad: 23, hobbies: ["debate", "natación"] },
          ],
        },
      ],
    },
  ],
};

// Muestra el nombre de la universidad.
const mostrarNombreUniversidad = () => console.log(universidad.nombre);
mostrarNombreUniversidad(universidad);
// Muestra la calle donde está ubicada.
const mostrarCalleUniversidad = () =>
  console.log(universidad.ubicacion.direccion.calle);
mostrarCalleUniversidad(universidad);
// Muestra el nombre de la primera facultad.
const mostrarprimerFacultad = () =>
  console.log(universidad.facultades[0].nombre);
mostrarprimerFacultad(universidad);
// Muestra el nombre de la segunda carrera en la primera facultad.
const mostrarsegundacarreraPrimeraFacultad = () =>
  console.log(universidad.facultades[0].carreras[1].nombre);
mostrarsegundacarreraPrimeraFacultad(universidad);
// Muestra el nombre del primer estudiante de la carrera de Informática.
const mostrarprimerEstudianteInformática = () =>
  console.log(universidad.facultades[0].carreras[0].estudiantes[0].nombre);
mostrarprimerEstudianteInformática(universidad);
// Muestra el segundo hobby de Laura.
const mostrarsegundohobbylaura = () =>
  console.log(universidad.facultades[0].carreras[0].estudiantes[0].hobbies[1]);
mostrarsegundohobbylaura(universidad);
// Muestra la edad de Sofía.
const mostrarEdadSofía = () =>
  console.log(universidad.facultades[0].carreras[1].estudiantes[0].edad);
mostrarEdadSofía(universidad);
// Muestra el primer hobby del estudiante de Derecho Penal.
const mostrarprimerHobbyDerechoPenal = () =>
  console.log(universidad.facultades[1].carreras[0].estudiantes[0].hobbies[0]);
mostrarprimerHobbyDerechoPenal(universidad);
