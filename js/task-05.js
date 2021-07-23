const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.oninput = ({ target: { value } }) => {

    nameOutput.textContent = value.trim() === "" ? ("незнакомец") : (nameOutput.textContent = value);
};