const toDo = [{
    text:'Go to america',
    completed: false
}, {
    text:'Listen to music',
    completed: false
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

console.log(toDo);
removeToDo(toDo, 'Listen to music');
removeToDo(toDo, 'Listen to music');
console.log(toDo);

// toDo.splice(2,1);
// toDo.push('New Task 6');
// toDo.shift();
// console.log (`You have ${toDo.length} tasks to complete.`);
// console.log(toDo);

// console.log('loop');
//
// toDo.forEach(function(element, index){
//    console.log(`${index + 1}. ${element}`);
// });
//
// for(let i = 0; i < toDo.length; i++) {
//     console.log(`${i + 1}. ${toDo[i]}`)
// }
