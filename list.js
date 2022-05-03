let taskList = [];
const listDisplay = document.querySelector('[displayList]');
const addTaskForm = document.querySelector('.addTask');
const newTask = document.querySelector('[newTask]')

function start() {
    displayList();
}
function displayList() {
    taskList.forEach(task => {
        listDisplay.appendChild(document.createElement('li', ))
    })
}

addTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = newTask.nodeValue;
    taskList.push({
        task: task,
        isComplete: false,
    });
})
