const options  = require('./lib/options.js');
const handler = require('./lib/handler.js');

const chalk = require("chalk");
const figlet = require("figlet");
const clear = require("clear");

clear();
const init = () => {
  console.log(
    chalk.yellow(
    figlet.textSync('League Elo', { horizontalLayout: 'full' })
  )
  );
}

const run = async () => {
  init();
  const credentials = await options.summonerOptions();
  console.log(credentials);
};

run();
