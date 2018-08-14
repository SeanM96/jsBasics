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

function removeToDo(toDos, toDoTitle) {
    const index = toDos.findIndex(function(toDo) {
        return toDo.text.toLowerCase() === toDoTitle.toLowerCase()
   });
    if(index > -1) {
        toDos.splice(index, 1);
    }
    else{
        console.log('Element not found!')
    }
}

function getThingsToDo(toDos) {
    return toDos.filter(function(toDo) {
        return !toDo.completed;
    });
}

function sortToDos(toDos) {
    toDos.sort(function(objA, objB) {
        if (objA.completed > objB.completed) {
            return 1;
        } else if (objB.completed > objA.completed) {
            return -1;
        } else {
            return 0;
        }
    });
}

sortToDos(toDo);
console.log(toDo);