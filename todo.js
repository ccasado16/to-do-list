import { Task } from "./components/task.js";
import { TaskCard } from "./components/taskCard.js";

const taskInput = document.getElementById("task-input");
const btnAddTask = document.getElementById("btn-add-task");
const taskList = document.getElementById("task-list");
const completedTasksList = document.getElementById("completed-tasks-list");

const taskArray = JSON.parse(localStorage.getItem("tasks")) || [];

const completedTasksArray =
  JSON.parse(localStorage.getItem("completedTasks")) || [];

const addTask = () => {
  if (!taskInput.value) {
    window.alert("No task provided");
    throw Error("No Task Provided");
  }

  if (taskArray.map((task) => task.description).includes(taskInput.value)) {
    window.alert("Task already exists");
    throw Error("Task Already Exists");
  }

  let task = new Task(taskInput.value);
  taskArray.push(task);

  localStorage.setItem("tasks", JSON.stringify(taskArray));

  taskInput.value = "";

  renderTasks();
};

const removeTask = (task) => {
  // Search for the task in the taskArray or completedTasksArray based on the task.completed value
  let index = !task.completed
    ? taskArray.indexOf(task)
    : completedTasksArray.indexOf(task);

  if (!task.completed) {
    taskArray.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(taskArray));
  }

  if (task.completed) {
    completedTasksArray.splice(index, 1);
    localStorage.setItem("completedTasks", JSON.stringify(completedTasksArray));
  }

  renderTasks();
};

const completeTask = (task) => {
  let index = taskArray.indexOf(task);
  task.completed = true;

  // move to completedTasksArray
  completedTasksArray.unshift(taskArray.splice(index, 1)[0]);

  localStorage.setItem("tasks", JSON.stringify(taskArray));
  localStorage.setItem("completedTasks", JSON.stringify(completedTasksArray));

  renderTasks();
};

const renderTasks = () => {
  console.log("taskArray-->", taskArray);
  taskList.innerHTML = "";
  taskArray.forEach((task) => {
    taskList.appendChild(TaskCard(task, removeTask, completeTask));
  });

  console.log("completedTasksArray-->", completedTasksArray);
  completedTasksList.innerHTML = "";
  completedTasksArray.forEach((task) => {
    completedTasksList.appendChild(TaskCard(task, removeTask, null));
  });
};

btnAddTask.addEventListener("click", addTask);
taskInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") addTask();
});

renderTasks();
