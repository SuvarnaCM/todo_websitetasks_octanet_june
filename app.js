document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task');
    const prioritySelect = document.getElementById('priority');
    const deadlineInput = document.getElementById('deadline');
    const addButton = document.getElementById('add');
    const highList = document.getElementById('highList');
    const moderateList = document.getElementById('moderateList');
    const lowList = document.getElementById('lowList');

    addButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        const taskPriority = prioritySelect.value;
        const taskDeadline = deadlineInput.value;
        if (taskText) {
            const li = document.createElement('li');
            li.textContent = `${taskText} (Priority: ${taskPriority}, Deadline: ${taskDeadline})`;

            // Create a delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'DONE';
            deleteButton.classList.add('delete');
            li.appendChild(deleteButton);

            if (taskPriority === 'High') {
                li.classList.add('high');
                highList.appendChild(li);
            } else if (taskPriority === 'Medium') {
                li.classList.add('moderate');
                moderateList.appendChild(li);
            } else {
                li.classList.add('low');
                lowList.appendChild(li);
            }

            taskInput.value = '';
            deadlineInput.value = '';
        }
    });

    // Mark as completed or delete task
    document.addEventListener('click', function (event) {
        const target = event.target;
        if (target.classList.contains('delete')) {
            target.parentElement.remove();
        } else if (target.tagName === 'LI') {
            target.classList.toggle('completed');
        }
    });
});
