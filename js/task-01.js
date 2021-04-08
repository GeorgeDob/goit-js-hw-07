const ulCategories = document.querySelectorAll('#categories li.item');


ulCategories.forEach(el => {
    console.log('Категория:', el.firstElementChild.textContent);
    console.log('Количество элементов:', el.lastChild.previousSibling.childElementCount);
});

