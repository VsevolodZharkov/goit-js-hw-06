function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const spnEL = document.querySelector('.color');

const btnEl = document.querySelector('.change-color');


btnEl.addEventListener('click', () => {
	const color = getRandomHexColor();
	document.body.style.backgroundColor = color;
	spnEL.textContent = color;
});



// const span = document.querySelector('.color')
// const button = document.querySelector('.change-color');
// const body = document.querySelector('body')
// button.addEventListener('click', changeColor);
// function changeColor() {
// 	body.style.backgroundColor = getRandomHexColor();
// 	span.textContent = getRandomHexColor();
// }

