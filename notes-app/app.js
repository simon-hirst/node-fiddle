const yargs = require('yargs');
const notes = require('./notes.js');

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
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Removes a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
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
