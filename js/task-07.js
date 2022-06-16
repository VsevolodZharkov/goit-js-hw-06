

const input = document.getElementById('font-size-control');
const span = document.getElementById('text');  
input.addEventListener("input", change)
  
function change(evt) {        
    span.style.fontSize = evt.target.value + 'px';   
  };
	span.style.fontSize = input.value + 'px';   

// const input = document.querySelector("#font-size-control")
// console.log(input);
// const span = document.querySelector("#text")
// console.log(span);
// input.addEventListener('input', handlerInp);
// function handlerInp(evt) {
// 	console.log(evt.target.value);
// 	span.style.color = evt.target.value;
// }
