var jonathan = {
  nombre: "Jonathan",
  apellido: "Nuñez",
  edad: 20,
  peso: 78
};

console.log(
  `Al inicio del año, ${jonathan.nombre} pesa ${jonathan.peso.toFixed(2)}kg`
);

const INCREMENTO_PESO = 0.3;
const DIAS_DEL_ANO = 365;

const aumentarDePeso = persona => (persona.peso += INCREMENTO_PESO);

const adelgazar = persona => (persona.peso -= INCREMENTO_PESO);

const comeMucho = () => Math.random() < 0.3;

const realizaDeporte = () => Math.random() < 0.4;

/*for (var i = 1; i <= DIAS_DEL_ANO; i++) {
  var random = Math.random();
  if (random < 0.25) {
    aumentarDePeso(jonathan);
  } else if (random < 0.5) {
    adelgazar(jonathan);
  }
}*/

const META = jonathan.peso - 3;

var dias = 0;

while (jonathan.peso > META) {
  if (comeMucho()) {
    aumentarDePeso(jonathan);
  }
  if (realizaDeporte()) {
    adelgazar(jonathan);
  }

  dias += 1;
}

console.log(`Pasaron ${dias} días hasta que ${jonathan.nombre} adelgazó 3kg`);
