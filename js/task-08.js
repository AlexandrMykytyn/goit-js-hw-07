const [inputEl, btnRender, btnDestroy] = document.querySelector('#controls').children;
const boxesEl = document.querySelector('#boxes');

function createRandom() {
    return `rgb(${(Math.random() * 255) << 0},
     ${(Math.random() * 255) << 0},
      ${(Math.random() * 255) << 0})`;
}

const createElements = (amount) => {
    let elements = [];
    let size = 30;
    for (let i = 0; i < amount; i += 1) {

         const divEl = document.createElement('div');
        divEl.style.width = size + 'px';
        divEl.style.height = size + 'px';
        divEl.style.backgroundColor = createRandom();

        elements.push(divEl);
        size += 10;
    }
    boxesEl.innerHTML = '';
    boxesEl.append(...elements);
    return elements;
}

const renderMarkup = () => {
    const maxBoxes = inputEl.getAttribute('max');
    if (+inputEl.value > maxBoxes) {
        alert('Количество блоков больше 100')
        return;
    }

    createElements(+inputEl.value);
}

const destroyMarkUp = () => {
    inputEl.value = '';
    inputEl.innerHTML = '';
}

btnRender.addEventListener('click', renderMarkup)
btnDestroy.addEventListener('click', destroyMarkUp)