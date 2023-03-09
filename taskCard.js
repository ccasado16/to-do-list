import { baseButton } from "./baseButton";
export function TaskCard(task, completeTask, removeTask) {
  let li = document.createElement("li");
  li.innerText = `${task.name} ${task.completed}`;

  li.appendChild(btnComplete(completeTask, task));

  li.appendChild(btnDelete(removeTask, task));

  return li;
}

function btnComplete(completeTask, task) {
  let btnComplete = baseButton("Complete", () => completeTask(task));

  return btnComplete;
}

function btnDelete(removeTask, task) {
  let btnDelete = baseButton("Delete", () => removeTask(task));

  return btnDelete;
}
