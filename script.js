document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('add-task-btn');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');
    const completedTaskList = document.getElementById('completed-task-list'); // Reference to the completed task list

    const addTask = () => {
        const taskText = newTaskInput.value.trim();
        if (taskText === '') return;

        const listItem = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                // Move task to the completed task list
                completedTaskList.appendChild(listItem);
            } else {
                // Move task back to the active task list
                taskList.appendChild(listItem);
            }
            listItem.classList.toggle('completed', checkbox.checked);
        });

        const taskTextNode = document.createTextNode(taskText);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            listItem.parentElement.removeChild(listItem);
        });

        listItem.appendChild(checkbox);
        listItem.appendChild(taskTextNode);
        listItem.appendChild(deleteBtn);

        taskList.appendChild(listItem);

        newTaskInput.value = '';
    };

    addTaskBtn.addEventListener('click', addTask);
    newTaskInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') addTask();
    });
});