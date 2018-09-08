const notes = getSavedNotes();
const filters = {
    searchText:''
};

getSavedNotes();
renderNotes(notes,filters);

document.querySelector('#create').addEventListener('click', function(e) {
    notes.push({
        title:'',
        body: e.target.elements.create.value
    });
    localStorage.setItem('notes', JSON.stringify(notes));
    renderNotes(notes, filters);
});

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value;
    renderNotes(notes,filters);
});

document.querySelector('#filterBy').addEventListener('change', function(e) {
   console.log(e.target.value);
});

// document.querySelector('#name-form').addEventListener('submit', function(e) {
//     e.preventDefault();
//     console.log(e.target.elements.firstName.value);
// // });

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
//localStorage.setItem('location','Manchester');
//localStorage.getItem('location');
//localStorage.removeItem('location');
//localStorage.clear();

// const user = {
//     name: 'Sean',
//     age: 22
// };
//
// let userJSON = JSON.stringify(user);
// console.log(userJSON);
// localStorage.setItem('user', userJSON);

//LOCAL STORAGE STORES AFTER REFRESH AND AFTER REMOVAL OF CODE FROM TEXT,
//WOULD HAVE TO BE CLEARED. CAN USE JSON METHOD PARSE TO GET IT BACK.
//
// const userJSON = localStorage.getItem('user');
// const user = JSON.parse(userJSON);
// console.log(user.name)