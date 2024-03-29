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

async function getCharacters() {
  var ids = [1, 2, 3, 4, 5, 6, 7];
  var promises = ids.map(id => getCharacter(id));
  try {
    var characters = await Promise.all(promises);
    console.log(characters);
  } catch (id) {
    onError(id);
  }
}

getCharacters();
