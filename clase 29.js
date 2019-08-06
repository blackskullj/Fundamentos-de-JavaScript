const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";

const options = { crossDomain: true };
const onPeopleResponse = person => console.log(`Hola, yo soy ${person.name}`);

function getCharacter(id) {
  const URL = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
  $.get(URL, options, onPeopleResponse);
}

getCharacter(1);
getCharacter(2);
getCharacter(3);
