
const input = document.querySelector('input')
const toDoInput = document.querySelector('.todo-input')
const toDoButton = document.querySelector('.todo-button')
const toDoList = document.querySelector('.todo-list')

toDoButton.addEventListener('click', addToDo)

function addToDo(event) {
    event.preventDefault()
    if (!input.value) { return } else {

        const todoDiv = document.createElement('div')
        todoDiv.classList.add('todo')

        const newTodo = document.createElement('li')
        newTodo.innerText = input.value
        input.value = ''
        newTodo.classList.add('todo-item')
        todoDiv.appendChild(newTodo)

        const completedButton = document.createElement('button')
        completedButton.innerHTML = 'C'
        completedButton.classList.add('complete-btn')
        todoDiv.appendChild(completedButton)

        const trashButton = document.createElement('button')
        trashButton.innerHTML = 'X'
        trashButton.classList.add('trash-btn')
        todoDiv.appendChild(trashButton)

        toDoList.appendChild(todoDiv)

        completedButton.addEventListener('click', () => {
            newTodo.style.textDecoration = 'line-through'
        })

        trashButton.addEventListener('click', () => {
            toDoList.removeChild(todoDiv)
        })
    }
}