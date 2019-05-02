//(function () {


"use strict";
// api stuff
var corsUrl = "https://cors-anywhere.herokuapp.com/"
var darkSkyUrl = "https://api.darksky.net/forecast/";
var darkSkyApi = darkSkyKey;


//lat and longitude
var lat = 29.4241;
var lgn = -98.4936;

//scope variables
var compIcon = "";

/*need to get data for the following weather specs:
* High and low temp
* cloud cover condition
* humidity
* Windspeed
* Berametric pressure
* */


function forcastData(i) {
	var highLow = $.get(corsUrl + darkSkyUrl + darkSkyApi + "/" + lat + "," + lgn).done(function (data) {
		var high = data.daily.data[i].apparentTemperatureHigh;
		var low = data.daily.data[i].apparentTemperatureLow;
		console.log((Math.round(high)).toString() + "/" + (Math.round(low)).toString());
		var hiLo = (Math.round(high)).toString() + "/" + (Math.round(low)).toString();
		return hiLo;
	})
}

function compDirection(bearing){
	if ((bearing > 315 ) || (bearing>= 0 && bearing<=45)){
		compIcon = cloudCover["Compass-North"];
	}
	if (bearing > 45 && bearing <= 135){
		compIcon = cloudCover["Compass-East"];
	}
	if (bearing > 135 && bearing <= 225){
		compIcon = cloudCover["Compass-South"];
	}
	if (bearing > 225 && bearing <= 315){
		compIcon = cloudCover["Compass-West"];
	}
	console.log(compIcon);
}


//object for icons

var cloudCover = {
	"clear-day": " Sun.svg",

	"clear-night": "icon/climacons-master/svg/Moon.svg",

	"rain": "icon/climacons-master/svg/Cloud-Rain.svg",

	"snow": "icon/climacons-master/svg/Cloud-Snow.svg",

	"sleet": "icon/climacons-master/svg/Cloud-Hail.svg",

	"wind": "icon/climacons-master/svg/Wind.svg",

	"fog": "icon/climacons-master/svg/Cloud-Fog.svg",

	"cloudy": "icon/climacons-master/svg/Cloud.svg",

	"partly-cloudy-day": "icon/climacons-master/svg/Cloud-Sun.svg",

	"partly-cloudy-night": "icon/climacons-master/svg/Cloud-Moon.svg",

	"Compass-North" : "icon/climacons-master/svg/Compass-North.svg",
	"Compass-East" : "icon/climacons-master/svg/Compass-East.svg",
	"Compass-West" : "icon/climacons-master/svg/Compass-West.svg",
	"Compass-South" : "icon/climacons-master/svg/Compass-South.svg"

};


// function to pull data so I can see where to get the rest of the data
$.get(corsUrl + darkSkyUrl + darkSkyApi + "/" + lat + "," + lgn).done(function (data) {

	// var time = new Date(data.currently.time * 1000);
	// var summary = data.currently.summary;
	//console.log(data);
	// populate temp data
	for (var i = 0; i < 3; i++) {
		var box = "#box_" + i;
		var high = data.daily.data[i].apparentTemperatureHigh;
		var low = data.daily.data[i].apparentTemperatureLow;
		var dIcon = data.daily.data[i].icon;
		var iconUrl = cloudCover[dIcon];
		var humidity = (data.daily.data[i].humidity) * 100 ;
		var windSpeed = Math.round(data.daily.data[i].windSpeed);
		var windBearing = data.daily.data[i].windBearing;
		var bPressure = parseInt(data.daily.data[i].pressure);


		// need to fix this still.


		compDirection(windBearing);
		// $.ajax("data/weather.json")

		console.log(/*cloudCover[dIcon]*/ iconUrl);
		//console.log((item[0]));
		$(box).append("<div class='columns six sub_box'> <div>" + "Hgh/Low Temp: " + (Math.round(high)).toString() + "/" + (Math.round(low)).toString() + "</div>"
		+ "<img src= " + iconUrl + " alt=" + dIcon + ">"
		+"<div>Humidity: " + humidity + "</div></div>"
		+ "<div class='six columns'><div> Windspeed: " + windSpeed
			+ "<div>Wind Bearing "+ windBearing
			+ "</div>  <img src= "+ compIcon + " >"
			+ "<div>Baro. Pressure: "+ bPressure +  " </div></div>")
	}

});

$(".weather_box").on("click", function () {
	$.get(corsUrl + darkSkyUrl + darkSkyApi + "/" + lat + "," + lgn).done(function (data) {

		// var time = new Date(data.currently.time * 1000);
		// var summary = data.currently.summary;
		//console.log(data);
		// populate temp data
		for (var i = 0; i < 3; i++) {
			var box = "#box_" + i;
			var high = data.daily.data[i].apparentTemperatureHigh;
			var low = data.daily.data[i].apparentTemperatureLow;
			var dIcon = data.daily.data[i].icon;
			var iconUrl = cloudCover[dIcon];
			var humidity = (data.daily.data[i].humidity) * 100;
			var windSpeed = Math.round(data.daily.data[i].windSpeed);
			var windBearing = data.daily.data[i].windBearing;
			var bPressure = data.daily.data[i].pressure;

			compDirection(windBearing);

		}
	})
});

//})();