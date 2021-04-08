// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//     подставляет его текущее значение в span#name - output.Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const refs = {
  input: document.querySelector('[id="name-input"]'),
  span: document.querySelector('[id="name-output"]'),
};

refs.input.addEventListener('input', showInputMessage);

function showInputMessage(message) {
  refs.span.textContent =
    message.currentTarget.value === ''
      ? 'незнакомец'
      : message.currentTarget.value;
}

