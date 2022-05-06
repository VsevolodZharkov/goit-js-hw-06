const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector('#ingredients');

Array.prototype.forEach.call(ingredients, (element) => {
  let eleEl = document.createElement('li');
  eleEl.classList.add('item');
  eleEl.textContent = element;
  listEl.append(eleEl);
});
