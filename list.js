const newTaskInput = document.querySelector('[data-new-task-input]')
const newTaskForm = document.querySelector('[data-new-task-form]')
const toDoList = document.querySelector('[data-task-list]')

const LOCAL_STORAGE_TASK_KEY = 'task.lists'

let currentTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASK_KEY)) || []


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
        taskLi.className = 'listItem'
        taskDelete.className = 'deleteItem'
        taskStrong.innerText = `${task.task}`
        taskStrong.style.cursor = 'pointer'
        taskEdit.innerText = 'Edit'
        taskDelete.innerText = 'X'
        taskStrong.addEventListener('click', e => {
            task.isComplete = !task.isComplete
            if(task.isComplete)
                taskStrong.style.textDecoration = 'line-through'
            else
                taskStrong.style.textDecoration = 'none'

        })
        taskDelete.addEventListener('click', e => {
            currentTasks.splice(currentTasks.indexOf(task), 1)
            saveAndDisplay()
        })
        taskEdit.addEventListener('click', e => {
            taskLi.removeChild(taskEdit)
            taskStrong.innerHTML = `<form action="" data-form-${task.id}><input type="text" data-edit-${task.id} value="${task.task}"/><button type="submit">Edit</button></form>`
            const editForm = document.querySelector(`[data-form-${task.id}]`)
            const edit = document.querySelector(`[data-edit-${task.id}]`)
            editForm.addEventListener('submit', e => {
                e.preventDefault()
                currentTasks.splice(currentTasks.indexOf(task), 1, {id: task.id, task: edit.value, isComplete: task.isComplete})
                console.log(currentTasks)
                saveAndDisplay();
            })
        })
        taskLi.appendChild(taskStrong)
        taskLi.appendChild(taskEdit)
        taskLi.appendChild(taskDelete)
        console.log(task)

        toDoList.appendChild(taskLi) 
    })
}

newTaskForm.addEventListener('submit', e => {
    e.preventDefault()
    console.log(currentTasks)
    const newTask = newTaskInput.value;
    newTaskInput.value = "";
    currentTasks.push({ id: currentTasks.length, task: newTask, isComplete: false})
    saveAndDisplay()
})

const list = document.querySelector('ul')
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'li') {
    ev.target.classList.toggle('checked')
  }
}, false);

function saveAndDisplay(){
    save()
    display()
}

function save() {
    localStorage.setItem(LOCAL_STORAGE_TASK_KEY, JSON.stringify(currentTasks))
}

display();



