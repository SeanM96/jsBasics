function getSavedTodos() {
    const toDoTemp = localStorage.getItem('todo');
    if(toDoTemp != null) {
        return JSON.parse(toDoTemp);
    } else {
        return [];
    }
}

function saveTodos(todos) {
    localStorage.setItem('todo', JSON.stringify(todos));
}

function generateTodoDOM(list) {
    incompleteTasks(list);
    list.forEach(function(element) {
        const newDiv = document.createElement('div')
        const newTodo = document.createElement('span');
        const newInput = document.createElement('input')
        const newButton = document.createElement('button')

        newInput.type = 'checkbox';
        newButton.textContent = 'x'
        newTodo.textContent = element.text;
        newInput.textContent = element.completed;
        
        newDiv.appendChild(newInput);
        newDiv.appendChild(newTodo);
        newDiv.appendChild(newButton);

        document.querySelector('#todos').appendChild(newDiv);
    });
}

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
    generateTodoDOM(filteredTodos);
}

//MORE EFFICIENT WAY
function incompleteTasks(list) {
    const incompleteTodos = list.filter(function (todo) {
        return !todo.completed
    });
    const summary = document.createElement('h3');
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary);
}