function Persona(nombre, apellido) {
  this.nombre = nombre;
  this.apelldio = apellido;
}

Persona.prototype.saludar = function() {
  console.log(`Hola, me llamo ${this.nombre} ${this.apelldio}`);
};

var jonathan = new Persona("Jonathan", "Nuñez");
var erika = new Persona("Erika", "Luna");
var arturo = new Persona("Arturo", "Martinez");
