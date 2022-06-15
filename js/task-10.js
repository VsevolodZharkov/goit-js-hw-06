// const NewRef = document.querySelector('#controls');
// console.log(NewRef);

const refs = {
	divRef: document.querySelector("#boxes"),
	input: document.querySelector("input"),
	create: document.querySelector("button[data-create]"),
	destroy: document.querySelector("button[data-destroy]"),
}
let a = 0;
refs.input.addEventListener("input", () => {
  a = refs.input.value;
});
refs.create.addEventListener("click", handlerCr);
function handlerCr() {
  createBoxes(a);
}
refs.destroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  for (var i = 0; i <= amount; i++) {
    let div = document.createElement("div");
    div.style.backgroundColor = getRandomHexColor();
		div.style.width = i * 30 + 'px';
		div.style.height = i * 30 + 'px';
    div.classList.add("div-box");
    refs.divRef.appendChild(div);
  }
}

function destroyBoxes() {
  refs.divRef.remove();
	if (refs.input.value > 0) {
		refs.input.value = 0;
	}
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}