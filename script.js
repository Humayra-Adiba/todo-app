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
 

  // Function to create a to-do item
  function addTodoItem(text) {
    const li = document.createElement('li');
    li.className = 'flex justify-between items-center p-2 border-b';

    const span = document.createElement('span');
    span.textContent = text;

    const editButton = document.createElement('button');
    editButton.innerHTML = 'Edit';

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';

    const doneButton = document.createElement('button');
    doneButton.innerHTML = 'Done';
  }