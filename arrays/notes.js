const notes = [{
    title:'My next trip',
    body:'America'
}, {
    title:'Listen to music',
    body:'Post Malone'
},{
    title:'Go exercise',
    body:'BJJ'
}];

// console.log(notes.pop());
// notes.push('Note 4');
//
// console.log(notes.shift());
// console.log(notes.length);
// console.log(notes.unshift());

//notes.splice(1, 1, 'added');


// notes[2] = 'new note 3';
//
// notes.forEach(function(element, index) {
//    console.log(element);
//    console.log(index);
// });
// console.log(notes[notes.length - 1]);
// console.log(notes);

// for(let i=0; i < notes.length; i++) {
//     console.log(notes[i]);
// }


const findNote = function(notes, noteTitle) {
    return notes.find(function(note) {
        return note.title.toUpperCase() === noteTitle.toUpperCase()
    });
};

// const findNote = function(notes, noteTitle) {
//     const index = notes.findIndex(function(note) {
//         return note.title.toUpperCase() === noteTitle.toUpperCase()
//     });
//     return notes[index];
// };

const note = findNote(notes, 'listen to music');
console.log(note);
//
// console.log(notes.length);
// console.log(notes);
//
// console.log(notes.indexOf({})); //Used for pretty much anything else.
//
// const index = notes.findIndex(function(note, index) {//used for objects. Uses === notatation, which looks for an exact match. 2 objects arent an exact match.
//     console.log(note);
//     return note.title === 'Go exercise';
// });
//
// console.log(index);