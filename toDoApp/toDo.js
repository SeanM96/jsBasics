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

<<<<<<< HEAD

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value;
    renderTodos(filters, toDo);
});

document.querySelector('#hide-completed').addEventListener('change', function(e) {
    filters.hideCompleted = e.target.checked;
    renderTodos(filters, toDo)
});
=======
>>>>>>> bbd94de9b17251e85b1133a1762e1a82a882351d

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

<<<<<<< HEAD
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
=======
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
>>>>>>> bbd94de9b17251e85b1133a1762e1a82a882351d

init(toDo);
