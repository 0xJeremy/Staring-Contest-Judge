var videoInput = document.getElementById('inputVideo');
var canvasOutput = document.getElementById('overlay');

var ctx = canvasOutput.getContext('2d');
var countdown = 0;

var game_started = false;

function pad ( val ) { return val > 9 ? val : "0" + val; }

async function start_game() {
	game_started = true;
	var timeleft = 3;
	var timer = 0;
    var countdownTimer = setInterval(function(){
    	timeleft--;
    	timer++;
    	if(timeleft > 0) {
    		document.getElementById("gameInfo").textContent = "Game beginning in " + timeleft;
    	}
    	else {
    		document.getElementById("gameInfo").textContent = "Timer: " + timer-3;
    	}
    	// if(timeleft <= 0)
    	//     clearInterval(countdownTimer);
    	},1000);
    // var timer = 0;
    // var countupTimer = setInterval(function(){
    // 	timer++;
    // 	if(timer > 0) {
    // 		document.getElementById("gameInfo").textContent = "Timer: " + timer;
    // 	}
    // 	console.log("Timer: " + timer);
    // 	if(game_started == false) {
    // 		clearInterval(countupTimer);
    // 	}
    // }, 1000);
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