

const btnMin = document.querySelector('button[data-action="decrement"]');
const btnPlus = document.querySelector('button[data-action="increment"]');
const span = document.querySelector('#value');
console.log(span);
console.log(btnMin);
console.log(btnPlus);
let counterValue = 0;

btnMin.addEventListener("click", () => {
	counterValue -= 1;
	span.textContent = counterValue;
})
btnPlus.addEventListener("click", () => {
	counterValue += 1;
	span.textContent = counterValue;
})


// const btnEl = document.querySelector('[data-action="decrement"]');
// const btnRef = document.querySelector('[data-action="increment"]');
// const valEl = document.querySelector('#value');
// // console.log(valEl);
// btnEl.addEventListener('click', () => {
// 	valEl.innerHTML = parseInt(valEl.innerHTML) - 1;
// 	console.log('отнимает один', valEl);
// });
// btnRef.addEventListener('click', () => {
// 	valEl.innerHTML = parseInt(valEl.innerHTML) + 1;
// 	console.log('добавляем один', valEl);
// });