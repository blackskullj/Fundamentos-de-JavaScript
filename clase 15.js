var contador = 0;

const llueve = () => Math.random() < 0.25;

const singular = () => console.log(`Fui a ver si llovía ${contador} vez`);

const plural = () => console.log(`Fui a ver si llovía ${contador} veces`);

const condicion = () => contador > 1;

do {
  contador++;
} while (!llueve());

if (condicion()) {
  plural();
} else {
  singular();
}
