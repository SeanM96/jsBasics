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
    document.querySelector('#hide-completed').checked = false;
    incompleteTasks(list);
    list.forEach(function(element) {
        const newEl = document.createElement('p');
        newEl.textContent = element.text;
        document.querySelector('#todos').appendChild(newEl);
    });
}

const filters = {
    searchText:'',
    hideCompleted: false
};

function renderTodos(filter, list) {
    let filteredTodos;
    if(filter === filters.hideCompleted) {
        const hiddenTodos = list.filter(function(element) {
            return !element.completed
        });
         filteredTodos = hiddenTodos.filter(function(element) {
            return element.text.toLowerCase().includes(filter.toLowerCase());
        });
    }
    else {
     filteredTodos = list.filter(function(element) {
        return element.text.toLowerCase().includes(filter.toLowerCase());
    });
}

    document.querySelector('#todos').innerHTML = '';
    incompleteTasks(filteredTodos);

    filteredTodos.forEach(function(element) {
            const newEl = document.createElement('p');
            newEl.textContent = element.text;
            document.querySelector('#todos').appendChild(newEl);
    })
}


//MORE EFFICIENT WAY
function incompleteTasks() {
    const incompleteTodos = toDo.filter(function (todo) {
        return !todo.completed
    });
    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary);
}


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

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value;
    renderTodos(filters.searchText, toDo);
});

document.querySelector('#hide-completed').addEventListener('change', function(e) {
   filters.hideCompleted = e.target.checked;
   if(filters.searchText.strip() === '' ) {
       init(toDo);
   }
   renderTodos(filters.hideCompleted, toDo);
});

init(toDo);
