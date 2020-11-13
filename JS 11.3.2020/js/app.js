let knygos = {
	'GrozineLiteratura':{
		'knyga1':{
			'ISBN':"GR1236K",
			'leidimometai':2018,
			'pavadinimas':"",
			'puslapiusk':250
		},
		'knyga2':{
			'ISBN':"ZL1746A",
			'leidimometai':2015,
			'pavadinimas':"",
			'puslapiusk':100
		},
		'knyga3':{
			'ISBN':"LR1286Y",
			'leidimometai':2020,
			'pavadinimas':"",
			'puslapiusk':700
		},
		'knyga4':{
			'ISBN':"ER2236F",
			'leidimometai':2001,
			'pavadinimas':"",
			'puslapiusk':450
		},
		'knyga5':{
			'ISBN':"TR1206K",
			'leidimometai':2007,
			'pavadinimas':"",
			'puslapiusk':250
		},
		'knyga6':{
			'ISBN':"MR1736Z",
			'leidimometai':2009,
			'pavadinimas':"",
			'puslapiusk':555
		},
		'knyga7':{
			'ISBN':"RR1636J",
			'leidimometai':2000,
			'pavadinimas':"",
			'puslapiusk':179
		},
		'knyga8':{
			'ISBN':"BD1656K",
			'leidimometai':2019,
			'pavadinimas':"",
			'puslapiusk':300
		}
	},
	'InformacineLiteratura':{
		'knyga1':{
			'ISBN':"IL1006J",
			'leidimometai':2012,
			'pavadinimas':"",
			'puslapiusk':215
		},
		'knyga2':{
			'ISBN':"IL4496K",
			'leidimometai':2019,
			'pavadinimas':"",
			'puslapiusk':240
		}
	},
	'MokomojiLiteratura':{
		'knyga1':{
			'ISBN':"MK1736J",
			'leidimometai':2020,
			'pavadinimas':"",
			'puslapiusk':59
		},
		'knyga2':{
			'ISBN':"MK1656K",
			'leidimometai':2014,
			'pavadinimas':"",
			'puslapiusk':120
		}
	},
}
for(let item in knygos){
	if (item === "GrozineLiteratura") {
		let bookam = 0;
		for(let bookamount in knygos[item]) {
			bookam++;
		}
		console.log(item + ":" + "("+bookam+" Knygų(- os))");
		for(let books in knygos[item]) {
			console.log(books+":");
			for(let properties in knygos[item][books]) {
				if (properties == "leidimometai")  {
					if (knygos[item][books][properties] === 2020) {
						console.log(properties + ": " + knygos[item][books][properties] + "(Nauja Knyga)");
					}
					else {
						console.log(properties + ": " + knygos[item][books][properties]);
					}
				}
				else {
					console.log(properties + ": " + knygos[item][books][properties]);
				}
			}

		}
	}
	if (item === "InformacineLiteratura") {
		let bookam = 0;
		for(let bookamount in knygos[item]) {
			bookam++;
		}
		console.log(item + ":" + "("+bookam+" Knygų(- os))");
		for(let books in knygos[item]) {
			console.log(books+":");
			for(let properties in knygos[item][books]) {
				if (properties == "leidimometai")  {
					if (knygos[item][books][properties] === 2020) {
						console.log(properties + ": " + knygos[item][books][properties] + "(Nauja Knyga)");
					}
					else {
						console.log(properties + ": " + knygos[item][books][properties]);
					}
				}
				else {
					console.log(properties + ": " + knygos[item][books][properties]);
				}
			}

		}
	}
	if (item === "MokomojiLiteratura") {
		let bookam = 0;
		for(let bookamount in knygos[item]) {
			bookam++;
		}
		console.log(item + ":" + "("+bookam+" Knygų(- os))");
		for(let books in knygos[item]) {
			console.log(books+":");
			for(let properties in knygos[item][books]) {
				if (properties == "leidimometai")  {
					if (knygos[item][books][properties] === 2020) {
						console.log(properties + ": " + knygos[item][books][properties] + "(Nauja Knyga)");
					}
					else {
						console.log(properties + ": " + knygos[item][books][properties]);
					}
				}
				else {
					console.log(properties + ": " + knygos[item][books][properties]);
				}
			}

		}
	}
}



/*
let names = [
	"Ieva",
	"Andrius",
	"Petras"
];
let subjects = [];
let marks = [];
for (let name in names) {
	console.log(names[name] + " Dalykai ir Pažymiai")

}

name = prompt("Mokinio vardas: ")
for (let i = 0; i < 3; i++)
{
	subjects[i] = prompt("Mokomasis Dalykas: ")
	marks[i] = prompt("Pažymys: ")
	while (marks[i] < 1 || marks[i] > 10)
	{
		alert("Netinkamas Pažymys!!!!! (Pažymį veskite iš naujo)");
		marks[i] = prompt("Pažymys: ");
	}
}

console.log("Mokinys: " + name)
console.log("Dalykai:")
for (let i = 0; i < 3; i++)
{
	if (marks[i] == 10)
	{
		console.log(subjects[i] + ": " + marks[i] + " (puikiai)");
	}
	else if (marks[i] == 9) {
		console.log(subjects[i] + ": " + marks[i] + " (labai gerai)");
	}
	else if (marks[i] == 8) {
		console.log(subjects[i] + ": " + marks[i] + " (gerai)");
	}
	else if (marks[i] == 7) {
		console.log(subjects[i] + ": " + marks[i] + " (vidutiniškai)");
	}
	else if (marks[i] == 6) {
		console.log(subjects[i] + ": " + marks[i] + " (patenkinamai)");
	}
	else if (marks[i] == 5) {
		console.log(subjects[i] + ": " + marks[i] + " (silpnai)");
	}
	else if (marks[i] <= 4) {
		console.log(subjects[i] + ": " + marks[i] + " (nepatenkinamai)");
	}
}
*/

/*
let mokiniai = [
	'Ieva',
	'Andrius',
	'Petras'
]
let mokinys = [
	akodas:3454356,
	vardas: "Petras",
	pavarde: "Petraitis",
	email: "petras@one.lt"
]

for(let item in mokinys) {
	console.log(item+": "+mokinys[item])
}
*/

/*
(function(){
	var studentai = {
		'Jonas':{
			'ekodas':1,
			'adresas':'Pievu g. 1, Kaunas',
			'ivertinimai': {
				'php': 10,
				'js': 6,
				'Java': 9
			}
		},
		'Petras':{
			'ekodas':896,
			'adresas':'Tilto g. 1, Kaunas',
			'ivertinimai': {
				'php': 4,
				'js': 9,
				'Java': 2
			}
		},
		'Andrius':{
			'ekodas':567,
			'adresas':'Rutu g. 1, Kaunas',
			'ivertinimai': {
				'php': 5,
				'js': 9,
				'Java': 7
			}
		},
	}
	for(var item in studentai){
		console.log(item);
		console.log('Duomenys:');
		for(var subitem in studentai[item]) {
			if (subitem == "ivertinimai") {

				console.log("Ivertinimai:");
				for(let subject in studentai[item][subitem]) {
					console.log(subject + ": " + studentai[item][subitem][subject])
				}
			} else {
				console.log(subitem+': ' +studentai[item][subitem]);
			}


		}
	}



})();
*/


/*
for(var item in studentai){
	console.log(item);
	console.log('Duomenys:');
	for(var subitem in studentai[item]) {
		if (subitem == "ivertinimai") {
			console.log("Ivertinimai:");
			for(let subject in studentai[item][subitem]) {
				console.log(subject + ": " + studentai[item][subitem][subject])
			}
		} 
		else {
			console.log(subitem+': ' +studentai[item][subitem]);
		}


		}
}
*/