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
    if(notes != null || notes != []) {
    const filteredNotes = notes.filter(function(note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    document.querySelector('#notes').innerHTML = '';

    filteredNotes.forEach(function(note) {
        let newRenderNote = generateDOM(note);
        document.querySelector('#notes').appendChild(newRenderNote);
    });
}
}

function generateDOM(notes) {
    const container = document.createElement('div');
    const note = document.createElement('span');
    const button = document.createElement('button');

    button.textContent = 'x'
    container.appendChild(button);

        if (notes.title.length > 0) {
            note.textContent = notes.title;
        }
        else {
            note.textContent = 'Unnamed note';
        }

        container.appendChild(note);
        return container
}

function saveNotes(notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
}
