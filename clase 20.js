var jonathan = {
  nombre: "Jonathan",
  apellido: "Nuñez",
  altura: 1.72,
  cantidadDelibros: 111
};

var alan = {
  nombre: "Alan",
  appelido: "Pérez",
  altura: 1.86,
  cantidadDelibros: 78
};

var martin = {
  nombre: "Martín",
  appelido: "Gómez",
  altura: 1.85,
  cantidadDelibros: 132
};

var dario = {
  nombre: "Darío",
  appelido: "Juárez",
  altura: 1.71,
  cantidadDelibros: 90
};

var vicky = {
  nombre: "Vicky",
  appelido: "Zapata",
  altura: 1.56,
  cantidadDelibros: 91
};

var paula = {
  nombre: "Paula",
  appelido: "Barros",
  altura: 1.76,
  cantidadDelibros: 182
};

var personas = [jonathan, alan, martin, dario, vicky, paula];

const pasarAlturaACms = persona => ({
  ...persona,
  altura: persona.altura * 100
});

var personasCms = personas.map(pasarAlturaACms);

const reducer = (acum, { cantidadDelibros }) => acum + cantidadDelibros;

var totalDeLibros = personas.reduce(reducer, 0);

console.log(`En total todos tienen ${totalDeLibros} libros`);
