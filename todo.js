import { Task } from "./task.js";
import { TaskCard } from "./taskCard.js";

const taskInput = document.getElementById("task-input");
const btnAddTask = document.getElementById("btn-add-task");
const taskList = document.getElementById("task-list");

const taskArray = [
  { description: "Task 1", completed: false },
  { description: "Task 2", completed: false },
  { description: "Task 3", completed: false },
];

const addTask = () => {
  if (!taskInput.value) throw Error("No Task Provided");

  if (taskArray.map((task) => task.description).includes(taskInput.value))
    throw Error("Task Already Exists");

  let task = new Task(taskInput.value);
  taskArray.push(task);

  taskInput.value = "";

  renderTasks();
};

const removeTask = (task) => {
  let index = taskArray.indexOf(task);
  taskArray.splice(index, 1);
  renderTasks();
};

const completeTask = (task) => {
  let index = taskArray.indexOf(task);
  taskArray[index].completed = true;
  renderTasks();
};

const renderTasks = () => {
  console.log(taskArray);
  taskList.innerHTML = "";
  taskArray.forEach((task) => {
    taskList.appendChild(TaskCard(task, removeTask, completeTask));
  });
};

btnAddTask.addEventListener("click", addTask);

renderTasks();

