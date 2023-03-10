import { baseButton } from "./baseButton";

export function TaskCard(task, removeTask, completeTask) {
  let li = document.createElement("li");
  li.classList.add("task-card");

  let text = document.createElement("span");
  text.textContent = `${task.description} ${task.completed}`;
  li.appendChild(text);

  let actions = document.createElement("div");
  actions.classList.add("actions");

  if (!task.completed) {
    actions.appendChild(btnComplete(completeTask, task));
  }
  actions.appendChild(btnDelete(removeTask, task));

  li.classList.add("list-group-item");
  li.appendChild(actions);
  return li;
}

function btnComplete(completeTask, task) {
  let btnComplete = baseButton("bi-check-lg", () => completeTask(task));

  btnComplete.classList.add("btn-outline-success");

  return btnComplete;
}

function btnDelete(removeTask, task) {
  let btnDelete = baseButton("bi-x-lg", () => removeTask(task));

  btnDelete.classList.add("btn-outline-danger");

  return btnDelete;
}
