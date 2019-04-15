//(function () {
"use strict";


/*
================================= BOM BONUSES
BONUS 1: Build a Jack-In-The-Box

Define an object called jackBox.

Include properties for...
   triggered - whether or not the box has been sprung (should be false by default)
  intervalId - set to null
      play() - once called, if triggered is false, console.log one new element in the lyrics array every second
               after the lyrics, stop the interval, set the triggered property to true, and alert POP!
    windUp() - once called will stop the play() method and set triggered to false
      lyrics - an array with the following elements:

    "All a-...",
    "-round the ...",
    "mulberry...",
    "bush, The...",
    "monkey...",
    "chased the...",
    "wea-...",
    "-sel...",
    "The monkey...",
    "stopped to...",
    "pull up his...",
    "sock,...",
    "Pop!...",
    "goes the...",
    "wea-...",
    "-sel."

    Include methods for...


BONUS 2: Build a Stop Watch

Define an object called stopWatch.

Include the following properties...

  intervalId
  count

Include the following methods...

  start() - starts console logging an increasing count every second
  pause() - pauses counter
  reset() - stops counter and resets count to zero
*/

var x = 0;
var JackInTheBox = {};

JackInTheBox.triggered = false;
JackInTheBox.intervalId = null;
// play() - once called, if triggered is false, console.log one new element in the lyrics array every second
//                after the lyrics, stop the interval, set the triggered property to true, and alert POP!
JackInTheBox.play = function (trig) {
    function trigger(trig){

        if(!this.triggered){
            console.log(this.lyrics[x]);
            x++;
        }
    }
    setInterval()
};
JackInTheBox.windUp;
JackInTheBox.lyrics= ["All a-...",
    "-round the ...",
    "mulberry...",
    "bush, The...",
    "monkey...",
    "chased the...",
    "wea-...",
    "-sel...",
    "The monkey...",
    "stopped to...",
    "pull up his...",
    "sock,...",
    "Pop!...",
    "goes the...",
    "wea-...",
    "-sel."
];



//})();