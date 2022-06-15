

const rng = document.getElementById('font-size-control');
const text = document.getElementById('text');  
rng.addEventListener("input", 
  function() {            
    text.style.fontSize = rng.value + 'px'
		console.log(rng.value)           
  });



// const input = document.querySelector("#font-size-control")
// console.log(input);
// const span = document.querySelector("#text")
// console.log(span);
// input.addEventListener('input', handlerInp);
// function handlerInp(evt) {
// 	console.log(evt.target.value);
// 	span.style.color = evt.target.value;
// }
