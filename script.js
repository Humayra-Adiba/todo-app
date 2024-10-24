
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
        else{
            alert("Please enter a to-do");
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
            input.className = 'flex-1 p-2 border rounded';
            input.value = span.textContent;

            const saveButton = document.createElement('button');
            saveButton.textContent = 'Save';
            saveButton.className = 'ml-2 px-2 py-1 bg-green-500 text-white rounded transition-all ease-in-out hover:scale-125 hover:bg-teal-600';

            saveButton.addEventListener('click', function() {
                if(input.value){
                    span.textContent = input.value;
                    li.removeChild(input);
                    li.removeChild(saveButton);
                    li.appendChild(span);
                    li.appendChild(editButton);
                    li.appendChild(doneButton);
                    li.appendChild(deleteButton);
                }

                else{
                    alert('Please enter a value');
                }
            });

            li.removeChild(span);
            li.removeChild(editButton);
            li.removeChild(doneButton);
            li.removeChild(deleteButton);
            li.appendChild(input);
            li.appendChild(saveButton);
            input.focus();
        });

        deleteButton.addEventListener('click', function() {
            todoList.removeChild(li);
        });

        doneButton.addEventListener('click', function() {
            span.classList.toggle('line-through');
            if(doneButton.innerHTML == '<i class="fa-regular fa-square-check"></i>'){
              doneButton.innerHTML = '<i class="fa-solid fa-rotate-right"></i>';
            }
            else if(doneButton.innerHTML == '<i class="fa-solid fa-rotate-right"></i>'){
              doneButton.innerHTML = '<i class="fa-regular fa-square-check"></i>';
            }
        });

        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(doneButton);
        li.appendChild(deleteButton);
        todoList.appendChild(li);
    }

    addEventListener('beforeunload', (event)=>{
      event.preventDefault();
      event.returnValue = '';
    })


