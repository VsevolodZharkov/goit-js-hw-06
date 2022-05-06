const btnEl = document.querySelector('[data-action="decrement"]');
const btnRef = document.querySelector('[data-action="increment"]');
const valEl = document.querySelector('#value');
// console.log(valEl);
btnEl.addEventListener('click', () => {
	valEl.innerHTML = parseInt(valEl.innerHTML) - 1;
	console.log('отнимает один', valEl);
});
btnRef.addEventListener('click', () => {
	valEl.innerHTML = parseInt(valEl.innerHTML) + 1;
	console.log('добавляем один', valEl);
});