import { baseButton } from "./baseButton";

export function TaskCard(task, completeTask, removeTask) {
  let li = document.createElement("li");
  li.classList.add("task-card");

  let text = document.createElement("span");
  text.textContent = `${task.description} ${task.completed}`;
  li.appendChild(text);

  li.classList.add("list-group-item");

  li.appendChild(btnComplete(completeTask, task));
  li.appendChild(btnDelete(removeTask, task));

  return li;
}

function btnComplete(completeTask, task) {
  let btnComplete = baseButton("Complete", () => completeTask(task));

  btnComplete.classList.add("btn-complete");

  return btnComplete;
}

function btnDelete(removeTask, task) {
  let btnDelete = baseButton("Delete", () => removeTask(task));

  btnDelete.classList.add("btn-delete");

  return btnDelete;
}
