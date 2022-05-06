

const inpEmRef = document.querySelector("body input[name=email]");
// console.log(inpEmRef);
const inpPasRef = document.querySelector("body input[name=password]");
// console.log(inpPasRef);

const form = document.querySelector(".login-form");
// console.log(form);

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  
	event.preventDefault();
  
	fieldСontenрСheck();

	deleteForm();
}


function fieldСontenрСheck() {
  if (inpEmRef.value === "" || inpPasRef.value === "") {
    alert("Заполните все поля!!!");
  }
}
function deleteForm() {
	if (inpEmRef.value !== "" && inpPasRef.value !== "") {
			// console.dir(event.currentTarget.elements);
			const elementsEl = event.currentTarget.elements;
			const password = elementsEl.password.value;
			const email = elementsEl.email.value;
			
			const formData = {
				email,
				password,
			};
			
    console.log(formData);
		form.reset();
  }
}