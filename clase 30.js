const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";

const options = { crossDomain: true };

function getCharacter(id, callback) {
  const URL = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
  $.get(URL, options, function(person) {
    console.log(`Hola, yo soy ${person.name}`);
    if (callback) {
      callback();
    }
  });
}

getCharacter(1, function() {
  getCharacter(2, function() {
    getCharacter(3, function() {
      getCharacter(4, function() {
        getCharacter(5, function() {
          getCharacter(6, function() {
            getCharacter(7, function() {
              getCharacter(8);
            });
          });
        });
      });
    });
  });
});
