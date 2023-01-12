// ejercicio cracion de la constante con la sentencia const

var nombre = "Yeampier";
let lenguaje = "Español";
const edad = 22;

nombre = "Huerta";
lenguaje = "english";
//edad = 23 genera error debido que la constante no puede modificarse

const estudiante = { id: 6, nombre: "Yempier" };

console.log(estudiante);

estudiante.id = 7;
console.log(estudiante);

estudiante = { id: 8, nombre: "Jesus" };
