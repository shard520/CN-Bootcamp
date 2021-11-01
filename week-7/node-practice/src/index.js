const argv = require('./utils/yargsDocs');
const { Movie, moviesArray } = require('./utils');

const app = () => {
  if (argv.add) {
    let newMovie;

    if (argv.title) {
      // single movie with title flag
      newMovie = new Movie(argv.title, argv?.actor);
    } else {
      // single movie with dot notation
      newMovie = new Movie(argv.movie.title, argv.movie?.actor);
    }

    newMovie.add();
  } else if (argv.multi) {
    let newMovie1, newMovie2;

    if (Array.isArray(argv.actor)) {
      // multiple actors passed individually
      newMovie1 = new Movie(argv.title[0], argv.actor[0]);
      newMovie2 = new Movie(argv.title[1], argv.actor[1]);
    } else if (typeof argv.actor === 'string') {
      // actor only given for 1st movie
      newMovie1 = new Movie(argv.title[0], argv.actor);
      newMovie2 = new Movie(argv.title[1]);
    } else if (argv.movie1 && argv.movie2) {
      // multiple movies passed with dot notation, optional chaining to allow actors to be passed or omitted
      newMovie1 = new Movie(argv.movie1.title, argv.movie1?.actor);
      newMovie2 = new Movie(argv.movie2.title, argv.movie2?.actor);
    } else {
      // multiple movies with no actors
      newMovie1 = new Movie(argv.title[0]);
      newMovie2 = new Movie(argv.title[1]);
    }

    newMovie1.add();
    newMovie2.add();
  } else if (!argv.add && !argv.multi) {
    console.log(
      'Please specify --add to add a single movie or --multi to add multiple movies'
    );
    return;
  }

  console.table(moviesArray);
};

app();
