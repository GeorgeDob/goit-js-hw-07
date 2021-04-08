// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;


const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    value: document.querySelector('#value'),
}

function onIncrement() {
    counterValue += 1;
    updateInterface(counterValue);
};


function onDecrement()  {
    counterValue -= 1;
    updateInterface(counterValue);
};


const updateInterface = value => (refs.value.textContent = value);
refs.incrementBtn.addEventListener('click', onIncrement);
refs.decrementBtn.addEventListener('click', onDecrement);





 


