document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todoForm');
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');

    // Add new task
    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskText = todoInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            todoInput.value = '';
        }
    });

    // Add task to the list
    function addTask(taskText) {
        const li = document.createElement('li');
        li.innerText = taskText;
        const completeButton = document.createElement('button');
        completeButton.innerText = 'Complete';
        completeButton.classList.add('completeButton');
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.classList.add('deleteButton');
        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        todoList.appendChild(li);

        completeButton.addEventListener('click', function() {
            li.classList.toggle('completed');
            if (li.classList.contains('completed')) {
                deleteButton.style.display = 'none';
            } else {
                deleteButton.style.display = 'inline';
            }
        });

        deleteButton.addEventListener('click', function() {
            li.remove();
        });
    }
});
