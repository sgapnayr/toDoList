const input = document.querySelector('.todo-input')
const toDoButton = document.querySelector('.todo-button')
const toDoList = document.querySelector('.todo-list')

toDoButton.addEventListener('click', addToDo)

function addToDo(event) {
    event.preventDefault()
    if (!input.value) { return } else {
        const toDoDiv = document.createElement('div')
        toDoDiv.classList.add('toDoDiv')

        const toDoItem = document.createElement('li')
        toDoItem.innerText = input.value
        input.value = ''
        toDoItem.classList.add('toDoItem')
        toDoDiv.appendChild(toDoItem)

        toDoItem.addEventListener('dblclick', editItem)

        function editItem(event) {
            let item = event.target.innerText
            let itemInput = document.createElement('input')
            itemInput.autofocus
            itemInput.type = 'text'
            itemInput.value = item
            itemInput.classList.add('editItem')
            itemInput.addEventListener('keypress', saveItem)
            itemInput.addEventListener('click', saveItem)
            event.target.parentNode.prepend(itemInput)
            event.target.remove()
            itemInput.select()
        }

        function saveItem(event) {
            let inputValue = event.target.innerText
            if (event.target.value.length > 0 && (event.keyCode === 13 || event.type === 'click')) {
                let li = document.createElement('li')
                li.addEventListener('click', toggleDone)
                li.addEventListener('dblclick', editItem)
                li.innerText = event.target.value
                event.target.parentNode.prepend(li)
                event.target.remove()``
            }
        }

        const completedButton = document.createElement('button')
        completedButton.innerHTML = 'C'
        completedButton.classList.add('complete-button')
        toDoDiv.appendChild(completedButton)

        const removeButton = document.createElement('button')
        removeButton.innerHTML = 'X'
        removeButton.classList.add('remove-button')
        toDoDiv.appendChild(removeButton)

        toDoList.appendChild(toDoDiv)

        completedButton.addEventListener('click', () => {
            toDoItem.style.textDecoration = 'line-through'
        })

        removeButton.addEventListener('click', () => {
            toDoList.removeChild(toDoDiv)
        })
    }
}

