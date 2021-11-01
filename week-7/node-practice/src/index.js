const prompt = require('prompt-sync')({ sigint: true });

const { updateArray, expandArray } = require('./utils');

const movies = [];

const app = () => {
  let keepRunning = true;

  while (keepRunning) {
    const movieInput = prompt('Please enter a movie title: ');

    updateArray(movies, movieInput);
    console.log(`${movieInput} has been added to your list.`);

    const additionalInfo = prompt(
      'Please enter additional information about the film, e.g. lead actor, director etc: '
    );

    expandArray(movies, additionalInfo);

    console.log(
      `${additionalInfo} has been added to ${movies[movies.length - 1][0]}`
    );

    const continueAdding = prompt(
      'Do you want to add another movie? y/n: '
    ).toLowerCase();

    if (continueAdding === 'n' || continueAdding === 'no') keepRunning = false;
  }

  console.log(`Your movie collection contains:`);

  movies.forEach(movie => {
    console.log(`${movie[0]}: `);
    console.log(`${movie[1]}`);
    console.log('');
  });
};

app();
