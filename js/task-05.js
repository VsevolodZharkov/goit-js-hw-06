
const inpEl = document.querySelector('#name-input');

const spnEl = document.querySelector('#name-output');

inpEl.addEventListener('input', chang)



function chang(e) {
	if ( e.target.value !== '' ) {
		return spnEl.textContent = this.value;
	}
	if ( e.target.value === '' ) {
		return spnEl.textContent = 'Anonymous';
	}
};