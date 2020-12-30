var listElements = document.querySelector('#app ul')
var inputElements = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')
var todos = []

function renderTodos(){
    listElements.innerHTML = ''
    for (var todo of todos){
        var todoElement = document.createElement('li')
        var todoText = document.createTextNode(todo)

        var linkElement
        
        todoElement.appendChild(todoText)
        listElements.appendChild(todoElement)
    }
}

function addTodo(){
    var todoText = inputElements.value
    todos.push(todoText)
    inputElements.value = ''
    renderTodos()
}

buttonElement.onclick = addTodo
renderTodos()
