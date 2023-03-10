function baseButton(icon, event) {
  let button = document.createElement("button");
  button.classList.add("btn");

  let ico = document.createElement("i");
  ico.classList.add("bi", icon);
  button.appendChild(ico);

  button.addEventListener("click", event);

  return button;
}

export { baseButton };
