const newTodoInput = document.getElementById('new-todo');
const addTodoButton = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');

    // Add new event to make to-dos
addTodoButton.addEventListener('click', function() {
    const todoText = newTodoInput.value;
    if (todoText) {
        addTodoItem(todoText);
        newTodoInput.value = '';
    }
});