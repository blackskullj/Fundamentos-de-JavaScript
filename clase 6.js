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

function imprimirNombreEnMayusculas({ nombre }) {
  //   var nombre = persona.nombre.toUpperCase();
  console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(jonathan);
imprimirNombreEnMayusculas(dario);
imprimirNombreEnMayusculas({ nombre: "Pepito" });
