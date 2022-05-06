

const rng = document.getElementById('font-size-control');
const text = document.getElementById('text');  
rng.addEventListener("input", 
  function() {            
    text.style.fontSize = rng.value + 'px'
		console.log(rng.value)           
  });