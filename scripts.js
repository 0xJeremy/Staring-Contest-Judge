var videoInput = document.getElementById('inputVideo');
var canvasOutput = document.getElementById('overlay');

var ctx = canvasOutput.getContext('2d');
var countdown = 0;

var game_started = 0;

function pad ( val ) { return val > 9 ? val : "0" + val; }

async function start_game() {
	var timeleft = 3;
	var timer = 0;
    var countdownTimer = setInterval(function(){
    	timeleft--;
    	timer++;
    	if(timeleft > 0) {
    		document.getElementById("gameInfo").textContent = "Game beginning in " + timeleft;
    	}
    	else {
    		document.getElementById("gameInfo").textContent = "Timer: " + (timer - 3) + " seconds";
    	}
    	if(timer == 3) {
    		game_started = 1;
    	}
    	if(game_started == 0 && timer > 3)
    	    clearInterval(countdownTimer);
    	},1000);
}
function stop_game() {
	game_started = 0;
}

document.addEventListener('blinkEvent', function() {
	if(game_started == 1) {
		document.getElementById("gameInfo").textContent += "\nGame over!";
		game_started = 0;
	}
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