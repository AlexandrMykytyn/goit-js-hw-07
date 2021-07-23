const inputEl = document.querySelector("#validation-input");

const length = +inputEl.dataset.length;

const toggleClass = (add, remove) => {

    inputEl.classList.add(add);
    inputEl.classList.remove(remove);
}
const changeLength = ({ target: { value } }) => {
    value.length === length ? toggleClass('valid', 'invalid') : toggleClass('invalid', 'valid')
}
inputEl.addEventListener('change', changeLength)