"use strict";
 var onOff = false;
//$(document).ready(function() {
function randomColor(){
	var r = Math.floor(Math.random()*255);
	var g = Math.floor(Math.random()*255);
	var b = Math.floor(Math.random()*255);
	var a = 0;

	return "rgb(" + [r, g, b].join(",") + ")";
}

function wait(ms)
{
	var d = new Date();
	var d2 = null;
	do { d2 = new Date(); }
	while(d2-d < ms);
}


function h1ColorFlipper(onOff){
	let color = randomColor();
	//console.log(color);
	$("h1").css("background-color", color);
	console.log(color);
	// wait(500);
	// 	if(onOff) {
	//
	// 		h1ColorFlipper(onOff);
	// 	}

}

function liColorFlipper(){
	let color = randomColor();
	//console.log(color);
	$("li").css("background-color", color);
	console.log(color);
	// wait(500);
	// 	if(onOff) {
	//
	// 		h1ColorFlipper(onOff);
	// 	}

}
	// INSERT JAVASCRIPT CODE SAMPLE HERE
$('h1').click(function () {
	h1ColorFlipper(onOff);
});

$('p').dblclick(function () {
	let color = randomColor();
	$("p").css("background-color" , color);
});

$("li").hover(function () {
	$(this).css("background-color", randomColor())
},
	function () {
	$(this).css("background-color", "white");
} );


$("*").hover(function () {
		$(this).css("background-color", randomColor())
	},
	function () {
		$(this).css("background-color", "white");
	} );

//});