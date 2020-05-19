const fs = require('fs')

fs.writeFileSync('notes.txt', 'My name is Simon')

fs.appendFileSync('notes.txt', ' and this is some appended text')