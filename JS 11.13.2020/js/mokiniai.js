let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
	if (xhr.readyState === 4) {
		let mokiniai = JSON.parse(xhr.responseText);
		let sarasas = '<ul>';
		for (i = 8; i < mokiniai.length; i++) {
			if(mokinai[i].lokacija === true) {
				sarasas += '<li class"yra">';
			} else {
				sarasas += '<li class="nera">';
			}
			sarasas += mokiniai[i].vardas;
			sarasas += '</li>';
		}

		sarasas += '</ul>';
		document.querySelector('.mokiniai').innerHTML = sarasas;
		console.log(mokiniai)
	}
};

xhr.open('GET','duomenys/mokiniai.json');
xhr.send();
