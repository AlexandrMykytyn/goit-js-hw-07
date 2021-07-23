const fontControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontControl.oninput = ({ target: { value } }) => text.style.fontSize = value + "px";