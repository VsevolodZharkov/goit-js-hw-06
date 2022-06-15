const refs = {
	form: document.querySelector('.login-form'),
}

console.log(refs.form);

refs.form.addEventListener('submit', handlerSub)
const result = {};
function handlerSub(evt) {
	evt.preventDefault();
	
	if(evt.target[0].value === '' || evt.target[1].value === '') {
		alert('Введите данные для входа')
		return;
	}
	const email = evt.target.elements.email.value;
	const password = evt.target.elements.password.value;

	result.email = email;
	result.password = password;
	console.log(result);
	refs.form.reset();
	return result;
}

// const inpEmRef = document.querySelector("body input[name=email]");
// const inpPasRef = document.querySelector("body input[name=password]");
// const form = document.querySelector(".login-form");

// form.addEventListener("submit", onFormSubmit);

// function onFormSubmit(event) {
// 	event.preventDefault();
// 	fieldСontenрСheck();
// 	deleteForm();
// }
// function fieldСontenрСheck() {
//   if (inpEmRef.value === "" || inpPasRef.value === "") {
//     alert("Заполните все поля!!!");
//   }
// }
// function deleteForm() {
// 	if (inpEmRef.value !== "" && inpPasRef.value !== "") {
// 			// console.dir(event.currentTarget.elements);
// 			const elementsEl = event.currentTarget.elements;
// 			const password = elementsEl.password.value;
// 			const email = elementsEl.email.value;
			
// 			const formData = {
// 				email,
// 				password,
// 			};
			
//     console.log(formData);
// 		form.reset();
//   }
// }