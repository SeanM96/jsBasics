const notes = getSavedNotes();
const filters = {
    searchText:''
};

renderNotes(notes,filters);

document.querySelector('#add-note').addEventListener('submit', function(e) {
    if(e.target.elements.noteBody.value != '') {
    notes.push({
        title:e.target.elements.noteTitle.value,
        body: e.target.elements.noteBody.value
    });
}
    saveNotes(notes);
    renderNotes(notes, filters);
});

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value;
    renderNotes(notes,filters);
});
