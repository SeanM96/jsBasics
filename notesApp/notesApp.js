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

const p = document.querySelector('p');
console.log(p);
p.remove();
const ps = document.querySelectorAll('p');
ps.forEach(function(p) {
    //manipulate each p tag
});

//add a new element
const newP = document.createElement('p');
newP.textContent = 'This is a new element from js.';
document.body.appendChild(newP);