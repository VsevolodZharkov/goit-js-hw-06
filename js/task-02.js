const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector('#ingredients');

const a = ingredients.map((element) => {
  let eleEl = document.createElement('li');
  eleEl.classList.add('item');
  eleEl.textContent = element;
  return eleEl;
});
listEl.append(...a);