const yargs = require('yargs');

// customise yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Adds a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    console.log(`title: ${argv.title} body: ${argv.body}`);
  },
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Removes a new note',
  handler() {
    console.log('removing a note');
  },
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Reads a note',
  handler() {
    console.log('reading note');
  },
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'Lists a note',
  handler() {
    console.log('listing note');
  },
});

yargs.parse();
