var videoInput = document.getElementById('inputVideo');
var canvasOutput = document.getElementById('overlay');

var ctx = canvasOutput.getContext('2d');
var countdown = 0;

var game_started = false;

function start_game() {
	game_started = true;
	// document.getElementById('gameInfo').innerHTML = "GAME STARTING";
	// setTimeout(function (){
	// 	document.getElementById('gameInfo').innerHTML = "Game beginning in 3...";
	// }, 1000);
	// setTimeout(function (){
	// 	document.getElementById('gameInfo').innerHTML = "Game beginning in 2...";
	// }, 1000);
	// setTimeout(function (){
	// 	document.getElementById('gameInfo').innerHTML = "Game beginning in 1...";
	// }, 1000);
	// var start = new Date().getTime();
	// while(game_started) {
	// 	var current = new Date().getTime();
	// 	var distance = current - start;
	// 	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	// 	document.getElementById('gameInfo').innerHTML = seconds;
	// }
}
function stop_game() {
	game_started = false;
}

document.addEventListener('blinkEvent', function() {
	game_started = false;
});

document.addEventListener('eyeTrackedEvent', function(event) {
	// if(game_started == false) {
	// 	document.getElementById('gameInfo').innerHTML = "Eyes Found. Game Ready to Begin!";
	// }

});

require(['eyePlayer'], function(eyePlayer) {
	eyeplayer = new eyePlayer({ debug: true });
	eyeplayer.init(videoInput, canvasOutput);
	eyeplayer.start();
});