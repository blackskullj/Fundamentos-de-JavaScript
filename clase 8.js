var jonathan = {
  nombre: "Jonathan",
  apellido: "Nuñez",
  edad: 20
};

var dario = {
  nombre: "Darío",
  apellido: "Susnisky",
  edad: 27
};

function imprimirNombreEnMayusculas(persona) {
  var { nombre } = persona;
  console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(jonathan);
imprimirNombreEnMayusculas(dario);
imprimirNombreEnMayusculas({ nombre: "Pepito" });

function imprimirNombreYEdad(persona) {
  var { nombre } = persona;
  var { edad } = persona;
  console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`);
}

imprimirNombreYEdad(jonathan);

function cumpleanos(persona) {
  return {
    ...persona,
    edad: persona.edad + 1
  };
}
