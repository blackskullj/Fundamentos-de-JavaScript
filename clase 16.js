var signo = prompt("¿Cuál es tu signo?").toLowerCase();

console.log(signo);

switch (signo) {
  case "aries":
    console.log(
      "Después de tanto, sepa que estará en condiciones de descubrir cuál es el motivo de su actual angustia siempre y cuando preste atención a sus verdaderos deseos."
    );
    break;
  case "tauro":
    console.log(
      "Teniendo la Luna en su signo, trate de evitar las grandes emociones y las aventuras. Dedíquese a disfrutar al máximo de los pequeños placeres diarios."
    );
    break;
  case "geminis":
  case "géminis":
    console.log(
      "Tenga cuidado con los cambios abruptos que tiene en su vida cotidiana. En esta jornada procure estar alerta ya que usted es una persona muy impulsiva."
    );
    break;
  case "cancer":
  case "cáncer":
    console.log(
      "En poco tiempo, sepa que descubrirá una cantidad de recursos inimaginables que lo ayudarán a concretar sus ambiciones y su proyecto comenzará a tener forma."
    );
    break;
  case "leo":
    console.log(
      "Sepa que será un día complicado, lo mejor será que se encierre en soledad. Evite tomar decisiones apresuradas, ya que se encontrará demasiado irritable."
    );
    break;
  case "virgo":
    console.log(
      "Esté preparado, ya que en esta jornada se sentirá liberado por completo y estará en condiciones de dedicarse de lleno a los nuevos objetivos que se ha propuesto."
    );
    break;
  case "libra":
    console.log(
      "No se desespere si una decisión se sigue postergando y obstaculiza sus planes futuros. Debe tener paciencia y en poco tiempo podrá ver que todo se va a encaminar."
    );
    break;
  case "escorpio":
    console.log(
      "Intente ser más claro a la hora de evaluar cada una de sus decisiones. Muchas de sus dudas y confusiones pueden llegar a dañar su inteligencia natural."
    );
    break;
  case "sagitario":
    console.log(
      "En este día, evite dejarse inducir por la nostalgia. No se olvide que su impulso y alegría son sus principales aliados, confíe en su percepción."
    );
    break;
  case "capricornio":
    console.log(
      "No deje de comunicarse con sus seres queridos. Aproveche esta jornada, ya que será un día positivo para fortalecer las amistades que están desgastadas."
    );
    break;
  case "acuario":
    console.log(
      "No se deje engañar por las innumerables tareas que deba realizar durante este día. Sepa que logrará resolverlas en el momento adecuado, no sea impaciente."
    );
    break;
  case "piscis":
    console.log(
      "Recuerde no descuidar los asuntos laborales. Sepa que será importante que trate de mantenerse con perseverancia en el cumplimiento de su rutina."
    );
    break;
  default:
    console.log("No es un signo zodiacal válido");
    break;
}
