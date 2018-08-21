const toDo = [{
    text:'Go to america',
    completed: false
}, {
    text:'Listen to music',
    completed: true
},{
    text:'Go to sleep',
    completed: false
}];

function incompleteTasks(list) {
    let count = 0;
    list.forEach(function (element) {
        if (!element.completed)
            count++;
    });
    const newP = document.createElement('p');
    newP.textContent = `You have ${count} left to complete`;
    document.body.appendChild(newP);
}

//MORE EFFICIENT WAY
function moreEfficientIncompleteTasks() {
    const incompleteTodos = toDo.filter(function (todo) {
        return !todo.completed
    });
    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.body.appendChild(summary);
}

function createList(list) {
    let newP;
    list.forEach(function(element) {
        if (!element.completed) {
            newP = document.createElement('p');
            newP.textContent = `You need to ${element.text}`;
            document.body.appendChild(newP);
        }
    });
}

incompleteTasks(toDo);
createList(toDo);



// pA.forEach(function(p) {
//     if(p.textContent.toLowerCase().includes('the'))
//         p.remove();
// });