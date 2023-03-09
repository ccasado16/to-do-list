const taskInput = document.getElementById("task-input");
const btnAddTask = document.getElementById("btn-add-task");
const taskList = document.getElementById("task-list");

const taskArray = ["Task 1", "Task 2", "Task 3"];

const addTask = () => {
  if (!taskInput.value) throw Error("No Task Provided");

  if (taskArray.includes(taskInput.value)) throw Error("Task Already Exists");

  let task = taskInput.value;
  taskArray.push(task);
  taskInput.value = "";

  renderTasks();
};

const renderTasks = () => {
  taskList.innerHTML = "";
  taskArray.forEach((task) => {
    let li = document.createElement("li");
    li.innerHTML = task;
    taskList.appendChild(li);
  });
};

btnAddTask.addEventListener("click", addTask);

renderTasks();
