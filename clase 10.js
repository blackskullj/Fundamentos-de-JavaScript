var jonathan = {
  nombre: "Jonathan",
  apellido: "Nuñez",
  edad: 20,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: true,
  drone: false
};

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es:`);
  if (persona.ingeniero) {
    console.log("Ingeniero");
  }
  if (persona.cocinero) {
    console.log("Cocinero");
  }
  if (persona.cantante) {
    console.log("Cantante");
  }
  if (persona.dj) {
    console.log("Dj");
  }
  if (persona.guitarrista) {
    console.log("Guitarrista");
  }
  if (persona.drone) {
    console.log("Drone");
  }
}

imprimirProfesiones(jonathan);

function imprimirSiEsMayorDeEdad(persona) {
  if (persona.edad >= 18) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(
      `${persona.nombre} es menor de edad y le faltan ${18 -
        persona.edad} años para ser mayor`
    );
  }
}

imprimirSiEsMayorDeEdad(jonathan);
