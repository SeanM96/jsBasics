const toDo = [{
    text:'Go to america',
    completed: false
}, {
    text:'Box',
    completed: true
}, {
    text:'Go to bjj',
    completed: false
}, {
    text:'Program',
    completed: true
}, {
    text:'Listen to music',
    completed: false
},{
    text:'Go to sleep',
    completed: true
}];

function init(list) {
    incompleteTasks(list);
    list.forEach(function(element) {
        const newEl = document.createElement('p');
        newEl.textContent = element.text;
        document.querySelector('#todos').appendChild(newEl);
    });
}

function incompleteTasks(list) {
    let count = 0;
    list.forEach(function (element) {
        if (!element.completed)
            count++;
    });
    const newP = document.createElement('p');
    newP.textContent = `You have ${count} left to complete`;
    document.querySelector('#todos').appendChild(newP);
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

const filters = {
    searchText:''
};

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value;
    renderTodos(filters.searchText, toDo);
});

document.querySelector('#add-todo').addEventListener('submit', function(e) {
    e.preventDefault();
    toDo.push({
        text: e.target.elements.addTodo.value,
        completed: false
    });

    e.target.elements.addTodo.value = '';
    document.querySelector('#todos').innerHTML = '';
    incompleteTasks(toDo);
    //renderTodos(filter, todo);

    toDo.forEach(function(element) {
        const newEl = document.createElement('p');
        newEl.textContent = element.text;
        document.querySelector('#todos').appendChild(newEl);
    })});

function renderTodos(filter, list) {
    const filteredTodos = list.filter(function(element) {
        return element.text.toLowerCase().includes(filter.toLowerCase());
    });

    document.querySelector('#todos').innerHTML = '';
    incompleteTasks(filteredTodos);

    filteredTodos.forEach(function(element) {
            const newEl = document.createElement('p');
            newEl.textContent = element.text;
            document.querySelector('#todos').appendChild(newEl);
    })
}

init(toDo);
