'use strict';

var fs = require('fs');
var ColorThief = require('color-thief');
var colorThief = new ColorThief();

let DominantColour = {};

DominantColour.getDominantColour = (imagePath) => {

	var image = fs.readFileSync(imagePath);

	var bgColour = colorThief.getColor(image);

	var bgRed = bgColour[0];
	var bgGreen = bgColour[1];
	var bgBlue = bgColour[2];

	console.log(bgRed);
	console.log(bgGreen);
	console.log(bgBlue);

	var averageColour = 'rgba(' + bgRed + ', ' + bgGreen + ', ' + bgBlue + ', 0.8)';

	console.log(averageColour);
	return averageColour;

}

module.exports = DominantColour
