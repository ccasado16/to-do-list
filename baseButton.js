function baseButton(text, event) {
  let button = document.createElement("button");
  button.innerText = text;
  button.className = "btn";
  button.addEventListener("click", event);

  return button;
}

export { baseButton };
