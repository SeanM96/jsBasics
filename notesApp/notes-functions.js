function getSavedNotes() {
    const notesJSON = localStorage.getItem('notes');

    if (notesJSON != null) {
        return JSON.parse(notesJSON);
    }
    else {
        return [];
    }
}
function renderNotes (notes, filters) {
    const filteredNotes = notes.filter(function(note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });
    generateDOM(filteredNotes);
}

function generateDOM(notes) {
    document.querySelector('#notes').innerHTML = '';
    filteredNotes.forEach(function (note) {
        const newNote = document.createElement('p');

        if (note.title.length > 0) {
            newNote.textContent = note.title;
        }
        else {
            newNote.textContent = 'Unnamed note';
        }
        document.querySelector('#notes').appendChild(newNote);
    })
}