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

const filters = {
    searchText:''
};

function renderNotes (notes, filters) {
    const filteredNotes = notes.filter(function(note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    document.querySelector('#notes').innerHTML = '';
    filteredNotes.forEach(function (note) {
        const newNote = document.createElement('p');
        newNote.textContent = note.title;
        document.querySelector('#notes').appendChild(newNote);
    })
}

renderNotes(notes,filters);
document.querySelector('#create').addEventListener('click', function(e) {
    console.log('Adding a new todo');
});

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value;
    renderNotes(notes,filters);
});

document.querySelector('#name-form').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(e.target.elements.firstName.value);
});

//
// const p = document.querySelector('p');
// console.log(p);
// p.remove();
// const ps = document.querySelectorAll('p');
// ps.forEach(function(p) {
//     //manipulate each p tag
// });
//
// //add a new element
// const newP = document.createElement('p');
// newP.textContent = 'This is a new element from js.';
// document.body.appendChild(newP);