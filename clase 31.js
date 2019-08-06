const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";
const options = { crossDomain: true };

function getCharacter(id, callback) {
  const URL = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
  $.get(URL, options, callback).fail(function() {
    console.log(`Couldn't get the character ${id}`);
  });
}

getCharacter(1, function(person) {
  console.log(`Hola, yo soy ${person.name}`);

  getCharacter(2, function(person) {
    console.log(`Hola, yo soy ${person.name}`);

    getCharacter(3, function(person) {
      console.log(`Hola, yo soy ${person.name}`);

      getCharacter(4, function(person) {
        console.log(`Hola, yo soy ${person.name}`);

        getCharacter(5, function(person) {
          console.log(`Hola, yo soy ${person.name}`);

          getCharacter(6, function(person) {
            console.log(`Hola, yo soy ${person.name}`);

            getCharacter(7, function(person) {
              console.log(`Hola, yo soy ${person.name}`);

              getCharacter(8, function(person) {
                console.log(`Hola, yo soy ${person.name}`);
              });
            });
          });
        });
      });
    });
  });
});
