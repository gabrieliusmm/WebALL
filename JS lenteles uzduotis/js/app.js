const task = document.querySelector('input');
const btn = document.querySelector('.btn');

btn.addEventListener('click',createTable)

function createTable() {
	let table = document.querySelector("table");
	let columnvalue = document.querySelector('.columnvalue').value;
	let rowvalue = document.querySelector('.rowvalue').value;
	for(let	i=0; i<rowvalue; i++) {
		let collumn = table.insertRow();
		for(let i=0; i<columnvalue; i++) {
			let row = row.insertCell();
		}
	}
}
