/*
const container = document.querySelector('.container');
const btn = document.querySelector('button');

btn.addEventListener('click',keistispalva)

function random() {
	let x = Math.floor(Math.random() * 256);
	return x;
}



*/

function createDiv(amount) {
  
  for (let i=0; i < amount; i++) {
    let newdiv = document.createElement('div');
    document.body.appendChild(newdiv);
  }
};


createDiv(14);

let divs = document.querySelectorAll('div');


function random() {
	let x = Math.floor(Math.random() * 256);
	return x;
}

function bgChange() {
	let color = "rgb(" + random() + "," + random() + "," + random() + ")";
	return color;
}
console.log(divs)


for (let i = 0; i < divs.length; i++) {
	divs[i].onclick = function(e) {
		console.log(e)
		e.target.style.backgroundColor = bgChange();
	}
}
