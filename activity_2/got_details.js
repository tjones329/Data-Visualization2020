data = [{
    "name": "Bran Stark",
    "status": "Alive",
    "current_location": "Fleeing White Walkers",
    "power_ranking": 7,
    "house": "stark",
    "probability_of_survival": 98
},
{
    "name": "Arya Stark",
    "status": "Alive",
    "current_location": "Back in Westeros",
    "power_ranking": 8,
    "house": "stark",
    "probability_of_survival": 99
},
{
    "name": "Sansa Stark",
    "status": "Alive",
    "current_location": "Winterfell",
    "power_ranking": 10,
    "house": "stark",
    "probability_of_survival": 83
},
{
    "name": "Robb Stark",
    "status": "Dead - Red Wedding S3E9",
    "current_location": "-",
    "power_ranking": -1,
    "house": "stark",
    "probability_of_survival": 0
}];

function halfSurvival(obj) {
    // obj.probability_of_survival = obj.probability_of_survival * .5;
    return obj.probability_of_survival * .5;
}

for (i = 0; i < 4; i++) {
	if (data[i].name == "Arya Stark") {
    } else {
        data[i].probability_of_survival = halfSurvival(data[i]);
    }
};

function debugCharacters(somedata) {
    for (i = 0; i < 4; i++) {
        console.log(somedata[i].name);
        console.log(somedata[i].probability_of_survival);
    }
};

debugCharacters(data);

function displayCharacterData(someData) {
    for (i = 0; i < someData.length; i++) {
        var newDiv = document.createElement("div");
        document.getElementById("main").appendChild(newDiv);

        var Cname = document.createElement("h4");
        Cname.textContent = someData[i]["name"];
        newDiv.appendChild(Cname);

        var Chouse = document.createElement("h5");
        Chouse.textContent = someData[i]["house"];
        newDiv.appendChild(Chouse);

        var Csurvival = document.createElement("h5");
        Csurvival.textContent = someData[i]["probability_of_survival"];
        newDiv.appendChild(Csurvival);

        var Cstatus = document.createElement("h5");
        Cstatus.textContent = someData[i]["status"];
        newDiv.appendChild(Cstatus);
    }
};

var header = document.createElement("h3");
header.textContent = "My Favorite GoT Characters";
// Append the newly created <h3> element to #main
document.getElementById("main").appendChild(header);

displayCharacterData(data);

// // Create a new <div> element	
// var div1 = document.createElement("div");
// // Append the newly created <div> element to #main
// document.getElementById("main").appendChild(div1);

// // Create a new <h5> element
// var name1 = document.createElement("h5");
// // Append the newly created <h5> element to your new div
// div1.appendChild(name1);
// // Set the textContent to the first characters name
// name1.textContent = data[0]["name"];

// // Create a new <p> element
// var survival1= document.createElement("p");
// // Append the newly created <p> element to your new div
// div1.appendChild(survival1);
// // Set the textContent to the first characters survival prob.
// survival1.textContent = "Survival %: " + data[0]["probability_of_survival"] +"%";