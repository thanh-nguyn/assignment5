const loginBtn = document.getElementById('login-btn');
const createTaskBtn = document.getElementById('create-task-btn');
const taskList = document.getElementById('task-list');

loginBtn.addEventListener('click', () => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'user' && password === 'password') {
    alert('Login successful');
    document.getElementById('user-area').style.display = 'none';
    document.getElementById('task-dashboard').style.display = 'block';
  } else {
    alert('Invalid credentials');
  }
});

createTaskBtn.addEventListener('click', () => {
  const taskName = prompt('Enter task name:');
  if (taskName) {
    addTask(taskName);
  }
});

function addTask(taskName) {
  const taskItem = document.createElement('div');
  taskItem.classList.add('task-item');
  taskItem.textContent = taskName;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });

  taskItem.appendChild(deleteBtn);
  taskList.appendChild(taskItem);
}