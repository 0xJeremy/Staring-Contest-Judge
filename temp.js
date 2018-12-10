var videoInput = document.getElementById('inputVideo');
var canvasOutput = document.getElementById('overlay');

var ctx = canvasOutput.getContext('2d');
var countdown = 0;

var game_started = 0;

var user_score = 0;

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var save_button = document.getElementById("save_score");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
	document.getElementById("user_score").value = user_score + " seconds";
	modal.style.display = "block";
}

save_button.onclick = function() {
	modal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {

    modal.style.display = "none";
  }
}

async function start_game() {
	document.getElementById("gameOver").textContent += "";
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
    		user_score = timer - 3;
    	    clearInterval(countdownTimer);
    	},1000);
}
function stop_game() {
	game_started = 0;
}

document.addEventListener('blinkEvent', function() {
	if(game_started == 1) {
		document.getElementById("gameOver").textContent += "You blinked! Game over!";
		game_started = 0;
		modal.style.display = "block";
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
