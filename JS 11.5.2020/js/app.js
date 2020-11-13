/*
let a = 10
let b = 20


function multiply(a,b) {
	return a * b;
}

console.log(multiply(a,b));
*/
/*
const article = document.querySelectorAll('article');
article[0].style.backgroundColor = 'red';
article[1].style.backgroundColor = 'blue';
article[2].style.backgroundColor = 'green';
article[3].style.backgroundColor = 'yellow';

for(let i = 0; i < article.length; i++) {
	article[i].style.backgroundColor = 'tomato';
	if (i === 0) {
		article[i].style.backgroundColor = 'red';
	}
	if (i === 1) {
		article[i].style.backgroundColor = 'blue';
	}
	if (i === 2) {
		article[i].style.backgroundColor = 'magenta';
	}
	if (i === 3) {
		article[i].style.backgroundColor = 'green';
	}
	
}

article.style.backgroundColor = 'red'; // naujo atributo kurimas
*/

/*
const article = document.querySelectorAll('article');
article.addEventListener('click',changeBg);
function changeBg(){
  article.style.backgroundColor = 'tomato';
}
*/

/*
const content = document.querySelector('.content');
const color = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click',changeBg);

function changeBg() {
	content.style.backgroundColor = color.value;
}
*/

/*
const article = document.querySelector('article h3');
const text = document.querySelector('input');
const btn = document.querySelector('.bg');

btn.addEventListener('click', changeText);

function changeText(){
	article.textContent = text.value; arba //article.innerHTML = text.value;
}
*/


const task = document.querySelector('input');
const btn = document.querySelector('.btn');
const remove = document.querySelector('.remove')

btn.addEventListener('click',addTask)

function addTask() {
	const taskList = document.querySelector('.todo');
	let li = document.createElement('li');
	li.textContent = task.value;
	taskList.appendChild(li);
}

remove.addEventListener('click',removeTask)

function removeTask() {
	const taskList = document.querySelector('.todo');
	const lastTask = document.querySelector('.todo li:last-child');
	taskList.removeChild(lastTask);
}
