let toDo = getSavedTodos();


const filters = {
    searchText:'',
    hideCompleted: false
};

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
    if(e.target.elements.addTodo.value != '') {
    toDo.push({
        text: e.target.elements.addTodo.value,
        completed: false
    });
    saveTodos(toDo)
    renderTodos(filters, toDo);
    e.target.elements.addTodo.value = '';
}
});

generateTodoDOM(toDo);
