let tasks = [];

function renderTasks() {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.onchange = () => {
      toggleTaskCompletion(index);
    };

    const taskText = document.createElement('span');
    taskText.innerText = task.text;

    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.onclick = () => {
      editTask(index);
    };

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = () => {
      deleteTask(index);
    };

    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskText);
    taskItem.appendChild(editButton);
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);
  });
}

function addTask() {
  const newTaskText = document.getElementById('new-task').value.trim();
  if (newTaskText !== '') {
    tasks.push({ text: newTaskText, completed: false });
    renderTasks();
    document.getElementById('new-task').value = '';
  }
}

function toggleTaskCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function editTask(index) {
  const newText = prompt('Edit task:', tasks[index].text);
  if (newText !== null) {
    tasks[index].text = newText.trim();
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

renderTasks();
