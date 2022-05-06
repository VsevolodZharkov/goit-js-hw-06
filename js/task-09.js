function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const spnEL = document.querySelector('.color');

const btnEl = document.querySelector('.change-color');


btnEl.addEventListener('click', () => {

	let colorBody = document.body.style.backgroundColor = getRandomHexColor();
	spnEL.textContent = colorBody;
});