
let text = document.getElementsByTagName("input")[0];





// console.log(val);

text.addEventListener('blur', () => {
  const inpdaraEl = text.getAttribute('data-length');

  let val = text.value.length;

	console.log('Длина введеного слова = ', val)
	if ( val > inpdaraEl || val < inpdaraEl ) {
		text.classList.remove('valid');
		text.classList.add('invalid');
		return console.log('Сработала ф-я:', 2);
	} 
	if ( val !== inpdaraEl) {
	  text.classList.add('valid');
		text.classList.remove('invalid');
		return console.log('Сработала ф-я:', 1);
	}
  
});


