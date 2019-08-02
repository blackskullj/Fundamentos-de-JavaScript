var jonathan = {
  nombre: "Jonathan",
  apellido: "Nuñez",
  edad: 20,
  peso: 78
};

console.log(
  `Al inicio del año, ${jonathan.nombre} pesa ${jonathan.peso.toFixed(2)}kg`
);

const INCREMENTO_PESO = 0.2;
const DIAS_DEL_ANO = 365;

const aumentarDePeso = persona => (persona.peso += INCREMENTO_PESO);

const adelgazar = persona => (persona.peso -= INCREMENTO_PESO);

for (var i = 1; i <= DIAS_DEL_ANO; i++) {
  var random = Math.random();
  if (random < 0.25) {
    aumentarDePeso(jonathan);
  } else if (random < 0.5) {
    adelgazar(jonathan);
  }
}

console.log(
  `Al final del año, ${jonathan.nombre} pesa ${jonathan.peso.toFixed(2)}kg`
);
