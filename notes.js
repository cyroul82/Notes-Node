console.log('starting notes.js');
var addNote = (title, body) => {
  console.log('Adding note ', title, body);
};

var getAll =() => {
  console.log('Get All');
}

var getNote = (title) => {
  console.log('get note with title');
}

var removeNote = (title) => {
  console.log('remove note');
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
