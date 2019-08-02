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

var personas = [jonathan, alan, martin, dario, vicky, paula];

for (var i = 0; i < personas.length; i++) {
  var persona = personas[i];
  console.log(`${persona.nombre} mide ${persona.altura}mts`);
}
