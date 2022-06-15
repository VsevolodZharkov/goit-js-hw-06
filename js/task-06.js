
let text = document.getElementsByTagName("input")[0];

text.addEventListener('blur', () => {
  const inpdaraEl = text.getAttribute('data-length');

  let val = text.value.length;

	console.log('Длина введеного слова = ', val)
	if ( val > inpdaraEl || val < inpdaraEl ) {
		text.classList.remove('valid');
		text.classList.add('invalid');
		return console.log('Сработал if:', 2);
	} 
if ( val !== inpdaraEl) {
	  text.classList.add('valid');
		text.classList.remove('invalid');
		return console.log('Сработал if:', 1);
	}
});


// const input = document.querySelector('#validation-input')
// console.log(input);

// input.addEventListener("blur", handlerInp);
// function handlerInp(evt) {
// 	const value = evt.target.value;
// 	console.log(value.length);
// 	const dataVal = Number(evt.target.dataset.length)
// 	console.log(dataVal);
// 	if(value.length > dataVal || value.length < dataVal) {
// 		input.classList.add("invalid");
// 		input.classList.remove("valid");
// 		return;
// 	} else if (value.length === dataVal) { 
// 		input.classList.add("valid");
// 		input.classList.remove("invalid");
// 		return;
// 	}
// };

