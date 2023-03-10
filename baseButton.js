function baseButton(icon, event) {
  let button = document.createElement("button");
  button.classList.add("btn");
  button.innerHTML = icon || "button";
  button.addEventListener("click", event);

  return button;
}

export { baseButton };
