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
    span.className = 'flex-1';

    const editButton = document.createElement('button');
    editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
    editButton.className = 'mx-2 px-2 py-1 bg-yellow-500 text-white rounded';

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.className = 'px-2 py-1 bg-red-500 text-white rounded';

    const doneButton = document.createElement('button');
    doneButton.innerHTML = '<i class="fa-regular fa-square-check"></i>';
    doneButton.className = 'px-2 py-1 mr-2 bg-green-500 text-white rounded';

    
    editButton.addEventListener('click', function() {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'flex-1 p-1 border rounded outline-none';
        input.value = span.textContent;
    })
}
