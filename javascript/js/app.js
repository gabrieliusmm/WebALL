let blacklist = ["Antanas", "Jonas", "Tomas"]
let guestnumber = prompt("Kiek yra sveciu?")
let sveciuvardai = [];
let num = 0;
for (let i = 0; i<guestnumber; i++)
{
    num++;
    sveciuvardai[i] = prompt(num + " Svecio vardas: ")
    for (const x in blacklist) {
        if (sveciuvardai[i] == blacklist[x])
        {
            sveciuvardai.pop();
        }
    }

}

for (const sveciai in sveciuvardai) {
    console.log(sveciuvardai[sveciai])

}




/*
var vardai = ["pirmas","antras","trecias","ketvirtas"];
var atbulai = [];

for (let x = vardai.length-1; x>-1; x--) {
    atbulai.push(vardai[x]);
}

console.log(" " + "atvirksciai" + " ")

for(const i in atbulai) {
    console.log(atbulai[i]);
}
*/


/*
let lastname = "xxx";
console.log("senas lastname", lastname);
lastname = "yyy";

console.log("naujas lastname", lastname);

lastname = lastname + "y";
console.log("naujausias lastname", lastname);

const appName = "Js basics";
function myFunction(e) {
    var x = e.clientX;
    var y = e.clientY;
    var coor = "Coordinates: (" + x + "," + y + ")";
    document.getElementById("box").innerHTML = coor;

}
*/