const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

const { Movie, moviesArray } = require('./utils');

const app = () => {
  console.log(argv);
  if (argv.add) {
    const newMovie = new Movie(argv.title, argv.actor);
    newMovie.add();
  } else if (argv.multi) {
    let newMovie1, newMovie2;

    if (Array.isArray(argv.actor)) {
      newMovie1 = new Movie(argv.title[0], argv.actor[0]);
      newMovie2 = new Movie(argv.title[1], argv.actor[1]);
    } else if (typeof argv.actor === 'string') {
      newMovie1 = new Movie(argv.title[0], argv.actor);
      newMovie2 = new Movie(argv.title[1]);
    } else {
      newMovie1 = new Movie(argv.title[0]);
      newMovie2 = new Movie(argv.title[1]);
    }

    newMovie1.add();
    newMovie2.add();
  }

  console.table(moviesArray);
};

app();
