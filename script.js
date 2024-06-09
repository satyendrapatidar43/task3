document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        addTodo();
    });

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            const li = document.createElement('li');
            li.textContent = todoText;

            const deleteBtn = document.createElement('span');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete');
            deleteBtn.addEventListener('click', deleteTodo);

            li.appendChild(deleteBtn);
            todoList.appendChild(li);

            todoInput.value = '';
        }
    }

    function deleteTodo() {
        this.parentElement.remove();
    }

    todoList.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            event.target.classList.toggle('completed');
        }
    });
});