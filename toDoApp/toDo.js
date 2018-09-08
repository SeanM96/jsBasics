let toDo = [];
let todoJSON = localStorage.getItem('todo');

if (todoJSON != null) {
    toDo = JSON.parse(todoJSON);
}

const filters = {
    searchText:'',
    hideCompleted: false
};


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


document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value;
    renderTodos(filters, toDo);
});

document.querySelector('#hide-completed').addEventListener('change', function(e) {
    filters.hideCompleted = e.target.checked;
    renderTodos(filters, toDo)
});

document.querySelector('#add-todo').addEventListener('submit', function(e) {
    e.preventDefault();
    toDo.push({
        text: e.target.elements.addTodo.value,
        completed: false
    });
    localStorage.setItem('todo', JSON.stringify(toDo));

    renderTodos(filters, toDo);
    e.target.elements.addTodo.value = '';
});

function renderTodos(filter, list) {
    let filteredTodos = list.filter(function(element) {
        return element.text.toLowerCase().includes(filter.searchText.toLowerCase());
    });
    if(filter.hideCompleted) {
        filteredTodos = filteredTodos.filter(function (element) {
            return !element.completed
        });
    }

    document.querySelector('#todos').innerHTML = '';
    incompleteTasks(list);

    filteredTodos.forEach(function(element) {
            const newEl = document.createElement('p');
            newEl.textContent = element.text;
            document.querySelector('#todos').appendChild(newEl);
    });
}

init(toDo);
