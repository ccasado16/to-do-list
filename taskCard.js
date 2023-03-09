export function TaskCard(task, completeTask, removeTask) {
  let li = document.createElement("li");
  li.innerText = `${task.name} ${task.completed}`;

  li.appendChild(btnComplete(completeTask, task));

  li.appendChild(btnDelete(removeTask, task));

  return li;
}

function btnComplete(completeTask, task) {
  let btnComplete = document.createElement("button");
  btnComplete.innerText = "Complete";
  btnComplete.addEventListener("click", () => completeTask(task));

  return btnComplete;
}

function btnDelete(removeTask, task) {
  let btnDelete = document.createElement("button");
  btnDelete.innerText = "Remove";
  btnDelete.addEventListener("click", () => removeTask(task));

  return btnDelete;
}
