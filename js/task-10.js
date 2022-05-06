// const NewRef = document.querySelector('#controls');
// console.log(NewRef);

const divRef = document.querySelector("#boxes");
console.log(divRef);

const inpRef = document.querySelector("input");
console.log(inpRef);

const btnCr = document.querySelector(".crea");
console.log(btnCr);

const btnDes = document.querySelector(".dest");
console.log(btnDes);
const text = document.getElementsByTagName("input")[0];
let a = 0;
inpRef.addEventListener("click", () => {
  a = text.value;
});
btnCr.addEventListener("click", () => {
  createBoxes(a);
});

btnDes.addEventListener("click", destroyBoxes);
// function EntrerNumberInINput() {

// }
function createBoxes(amount) {
  for (var i = 0; i < amount; i++) {
    let div = document.createElement("div");
    div.style.backgroundColor = getRandomHexColor();
		div.style.width = '20px'
		div.style.height = '20px'
    div.classList.add("div-box");
    div.style.display = "inline-block";
    divRef.appendChild(div);
  }
}

function destroyBoxes() {
  divRef.remove();
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
