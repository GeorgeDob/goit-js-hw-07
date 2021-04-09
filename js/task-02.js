// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. 
// Для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsUl = document.querySelector('#ingredients')


const ingredientEl = ingredients.map(el => {
    const newItem = document.createElement('li')
    newItem.textContent = el;
  return newItem
  console.log(el)
})

ingredientsUl.append(...ingredientEl)


