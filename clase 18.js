var jonathan = {
  nombre: "Jonathan",
  apellido: "Nuñez",
  altura: 1.72
};

var alan = {
  nombre: "Alan",
  appelido: "Pérez",
  altura: 1.86
};

var martin = {
  nombre: "Martín",
  appelido: "Gómez",
  altura: 1.85
};

var dario = {
  nombre: "Darío",
  appelido: "Juárez",
  altura: 1.71
};

var vicky = {
  nombre: "Vicky",
  appelido: "Zapata",
  altura: 1.56
};

var paula = {
  nombre: "Paula",
  appelido: "Barros",
  altura: 1.76
};

const esAlta = ({ altura }) => altura > 1.8;

const esBaja = ({ altura }) => altura < 1.7;

var personas = [jonathan, alan, martin, dario, vicky, paula];

var personasAltas = personas.filter(esAlta);
var personasBajas = personas.filter(esBaja);

/*var personasAltas = personas.filter(function(persona) {
  return persona.altura > 1.8;
});
*/

console.log(personasAltas);
console.log(personasBajas);
