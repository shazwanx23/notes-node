console.log('Starting notes.js');

var addNote = (title, body) =>{
	console.log('Adding note', title, body);
};

var getAll = () =>{
	console.log('Getting all notes');
};

var getNote = (title) => {
	console.log('Getting note with title: ', title);
};

var remove = (title) => {
	console.log('Removing note with title: ', title);
};

module.exports = {
	addNote,
	getAll,
	getNote,
	remove
};