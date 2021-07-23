const [decrement, span, increment] = document.querySelector('#counter').children;

increment.onclick = () => span.textContent = +span.textContent + 1;
decrement.onclick = () => span.textContent -= 1;
