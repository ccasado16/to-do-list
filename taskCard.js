export function TaskCard(task, completeTask, removeTask) {
  let li = document.createElement("li");
  li.innerText = `${task.name} ${task.completed}`;

  let btnComplete = document.createElement("button");
  btnComplete.innerText = "Complete";
  btnComplete.addEventListener("click", () => completeTask(task));
  li.appendChild(btnComplete);

  let btnDelete = document.createElement("button");
  btnDelete.innerText = "Remove";
  btnDelete.addEventListener("click", () => removeTask(task));
  li.appendChild(btnDelete);

  return li;
}
