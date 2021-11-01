const argv = require('yargs/yargs')(process.argv.slice(2))
  .usage('Usage: $0 <command> [options]')
  .command('--add', 'Add a single movie')
  .command('--multi', 'Add multiple movies')
  .describe('title', 'Add movie with the title flag')
  .describe('actor', 'Add actor information to movie')
  .describe(
    'movie',
    'Add a single movie specifying the title using movie.title and optionally the actor using movie.actor'
  )
  .describe(
    'movie1',
    'When adding multiple movies you can specify the title of the first using movie1.title, and optionally the actor using movie1.actor'
  )
  .describe(
    'movie2',
    'When adding multiple movies you can specify the title of the second using movie2.title, and optionally the actor using movie2.actor'
  )
  .example(
    '$0 --add --title="The Godfather" --actor="Marlon Brando"',
    'Adds a single movie with title and actor.'
  )
  .example(
    '$0 --multi --movie1.title="Bill & Ted" --movie2.title="Dogma"',
    'Adds 2 movies with title only'
  ).argv;

module.exports = argv;
