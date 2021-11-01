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
    if (Array.isArray(argv.actor)) {
      const newMovie1 = new Movie(argv.title[0], argv.actor[0]);
      const newMovie2 = new Movie(argv.title[1], argv.actor[1]);
      newMovie1.add();
      newMovie2.add();
    } else if (typeof argv.actor === 'string') {
      const newMovie1 = new Movie(argv.title[0], argv.actor);
      const newMovie2 = new Movie(argv.title[1]);
      newMovie1.add();
      newMovie2.add();
    }
  }

  console.log(moviesArray);
};

app();
