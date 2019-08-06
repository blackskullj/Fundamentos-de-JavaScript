const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";
const options = { crossDomain: true };

function getCharacter(id) {
  return new Promise((resolve, reject) => {
    const URL = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
    $.get(URL, options, function(data) {
      resolve(data);
    }).fail(() => reject(id));
  });
}

function onError(id) {
  console.log(`Couldn't get the character ${id}`);
}

getCharacter(1)
  .then(person => {
    console.log(`Hola, yo soy ${person.name}`);
    return getCharacter(2);
  })
  .then(person => {
    console.log(`Hola, yo soy ${person.name}`);
    return getCharacter(3);
  })
  .then(person => {
    console.log(`Hola, yo soy ${person.name}`);
    return getCharacter(4);
  })
  .then(person => {
    console.log(`Hola, yo soy ${person.name}`);
    return getCharacter(5);
  })
  .then(person => {
    console.log(`Hola, yo soy ${person.name}`);
    return getCharacter(6);
  })
  .then(person => {
    console.log(`Hola, yo soy ${person.name}`);
    return getCharacter(7);
  })
  .then(person => {
    console.log(`Hola, yo soy ${person.name}`);
  })
  .catch(onError);
