const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

const { Movie, moviesArray } = require('./utils');

const app = () => {
  console.log(argv);
  if (argv.add) {
    let newMovie;

    if (argv.title) {
      newMovie = new Movie(argv.title, argv?.actor);
    } else {
      newMovie = new Movie(argv.movie.title, argv.movie?.actor);
    }

    newMovie.add();
  } else if (argv.multi) {
    let newMovie1, newMovie2;

    if (Array.isArray(argv.actor)) {
      newMovie1 = new Movie(argv.title[0], argv.actor[0]);
      newMovie2 = new Movie(argv.title[1], argv.actor[1]);
    } else if (typeof argv.actor === 'string') {
      newMovie1 = new Movie(argv.title[0], argv.actor);
      newMovie2 = new Movie(argv.title[1]);
    } else if (argv.movie1 && argv.movie2) {
      newMovie1 = new Movie(argv.movie1.title, argv.movie1?.actor);
      newMovie2 = new Movie(argv.movie2.title, argv.movie2?.actor);
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
