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


const findNote = function(notes, noteTitle) {
    return notes.find(function(note) {
        return note.title.toUpperCase() === noteTitle.toUpperCase()
    });
};

function findNotes(notes, query) {
        return notes.filter(function(note) {
            const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
            const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
            return isTitleMatch || isBodyMatch;
        });
}

function findNotes2(notes, query, type) {
    if (notes !== undefined && query !== undefined && type !== undefined ) {
        return notes.filter(function (note) {
            if (type === 'title')
                return note.title.toLowerCase().includes(query.toLowerCase());
            else if (type === 'body')
                return note.body.toLowerCase().includes(query.toLowerCase());
            else {
                return 'Error, no search type specified'
            }
        });
    }
    else
        return 'Function called wrong';
}

function sortNotes(notes) {
    notes.sort(function(objA, objB) {
        if (objA.title.toLowerCase() < objB.title.toLowerCase()) {
            return -1;
        } else if (objB.title.toLowerCase() < objA.title.toLowerCase()) {
            return 1;
        } else {
            return 0;
        }
    });
}

sortNotes(notes);
console.log(notes);
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
// const findNote = function(notes, noteTitle) {
//     const index = notes.findIndex(function(note) {
//         return note.title.toUpperCase() === noteTitle.toUpperCase()
//     });
//     return notes[index];
// };

// const note = findNote(notes, 'listen to music');
// console.log(note);
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