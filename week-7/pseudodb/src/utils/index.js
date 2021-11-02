const fs = require('fs');

const addMovie = movieObj => {
  try {
    const stringyObj = JSON.stringify(movieObj);
    fs.writeFileSync('./storage.json', stringyObj);
  } catch (err) {
    console.error(err);
  }
};

const listMovies = () => {
  try {
    const jsonList = fs.readFileSync('./storage.json');
    const list = JSON.parse(jsonList);
    console.log(list);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  addMovie,
  listMovies,
};
