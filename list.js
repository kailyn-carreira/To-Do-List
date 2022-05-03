const newTaskinput = document.querySelector('[data-new-task-input]')
const newTaskForm = document.querySelector('[data-new-task-form]')
const toDoList = document.querySelector('[data-task-list]')

const LOCAL_STORAGE_LIST_KEY = 'toDo.List';

let currentTasks = [{id: 0, tasks: 'hello', isComplete: false}];

//This function creates the display of all the tasks and the buttons
function display() {
    while(toDoList.firstChild){
        toDoList.removeChild(toDoList.firstChild)
    }
    currentTasks.forEach( (task) => {
        const taskLi = document.createElement('li')
        const taskStrong = document.createElement('strong')
        const taskEdit = document.createElement('button')
        const taskDelete = document.createElement('button')
        taskStrong.innerText = `${task.task}`
        taskEdit.innerText = 'Edit'
        taskDelete.innerText = 'Delete'
        taskLi.appendChild(taskStrong)
        taskLi.appendChild(taskEdit)
        taskLi.appendChild(taskDelete)
        console.log(task);

        toDoList.appendChild(task1) 
    })
}

newTaskForm.addEventListener('submit', e => {
    e.preventDefault()
    console.log(currentTasks)
    const newTask = newTaskinput.value
    currentTasks.push({ id: currentTasks.length, task: newTask, isComplete: false})
    localStorafe.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(currentTasks))
    display();
})




