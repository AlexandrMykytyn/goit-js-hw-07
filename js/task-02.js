const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
const listEl = document.querySelector('#ingredients');

const createItem = (elements) => {
    return elements.map(element => {
        const itemEl = document.createElement('li');
        const textEl = document.createElement('p');

        textEl.textContent = element;
        itemEl.appendChild(textEl);
        return itemEl;
    })
}
const elements = createItem(ingredients);
listEl.append(...elements);