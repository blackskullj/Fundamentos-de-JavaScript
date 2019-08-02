function Persona(nombre, apellido, altura) {
  this.nombre = nombre;
  this.apelldio = apellido;
  this.altura = altura;
}

Persona.prototype.saludar = () => {
  console.log(`Hola, me llamo ${this.nombre} ${this.apelldio}`);
};

Persona.prototype.soyAlto = () => this.altura > 1.8;

var jonathan = new Persona("Jonathan", "Nuñez", 1.72);
var erika = new Persona("Erika", "Luna", 1.65);
var arturo = new Persona("Arturo", "Martinez", 1.89);
