const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => 'Your notes...';

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({
      title,
      body,
    });

    saveNotes(notes);
    console.log('new note added');
  } else {
    console.log('note title taken already');
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const newNotes = notes.filter((note) => note.title !== title);

  if (notes.length === newNotes.length) {
    console.log(chalk.bgRed('no note found'));
  } else {
    console.log(chalk.bgGreenBright(`removed note ${title}`));
  }

  saveNotes(newNotes);
};

module.exports = {
  getNotes,
  addNote,
  removeNote,
};
