const inquirer = require('inquirer');

module.exports = {
  summonerOptions: () => {
    const questions = [
      {
        name: 'summoner_name',
        type: 'input',
        message: 'Enter your Summoner name:',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your summoner name.';
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  },
};
