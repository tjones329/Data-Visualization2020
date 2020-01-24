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