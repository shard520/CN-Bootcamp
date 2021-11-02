const yargs = require('yargs');

const { addMovie, listMovies } = require('./utils');

const app = () => {
  if (process.argv[2] === 'add') {
    addMovie({ title: yargs.argv.title, actor: yargs.argv.actor });
  } else if (process.argv[2] === 'list') {
    listMovies();
  } else {
    console.log('Incorrect Command');
  }
};

app();
