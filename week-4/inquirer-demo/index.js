var inquirer = require('inquirer');
inquirer
  .prompt({
    type: 'list',
    name: 'play',
    message: 'Do you want to play with:',
    choices: [
      {
        key: 'a',
        name: 'Stick: boredom -2',
        value: 'a',
      },
      {
        key: 'b',
        name: 'Chewy toy: boredom -5',
        value: 'b',
      },
      {
        key: 'c',
        name: 'Ball : boredom -10',
        value: 'c',
      },
    ],
  })
  .then(answers => {
    console.log(answers);
  })
  .catch(error => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
