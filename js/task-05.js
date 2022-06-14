const inpEl = document.querySelector('#name-input');

const spnEl = document.querySelector('#name-output');

const red = '';


inpEl.addEventListener('input', function(e) {
	if (e.keyCode === 13) {
		// можете делать все что угодно со значением текстового поля
		
		if ( this.value !== red ) {
      return spnEl.textContent = this.value;
		}
		if ( this.value === red ) {
				
			return spnEl.textContent = 'Anonymous';
		}
	}
});