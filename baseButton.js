function baseButton(text, event) {
  let button = document.createElement("button");
  button.innerText = text;
  button.classList.add("btn");
  button.addEventListener("click", event);

  return button;
}

export { baseButton };
