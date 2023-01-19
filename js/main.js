var checkTime;
/**
 * A remote control key variables
 */
var RC_LEFT,RC_UP,RC_RIGHT,RC_DOWN,RC_ENTER,RC_BACK,RC_EXIT;
let root = null;

/**
 * Setting key event numeric value to variables so you don't have to numeric values
 */
function registerKeys() {
  console.log("registerKeys is called");
  RC_LEFT = 37;
  RC_UP = 38;
  RC_RIGHT = 39;
  RC_DOWN = 40;
  RC_ENTER = 13;
  RC_BACK = 10009;
  RC_EXIT = 10182;
}/*
* The key press functions
*/
function keyPressUp() {
 console.log("You pressed the up key");
 root.innerHTML = "UP";
}

function keyPressDown() {
 console.log("You pressed the down key");
 root.innerHTML = "DOWN";
}

function keyPressLeft() {
 console.log("You pressed the left key");
 root.innerHTML = "LEFT";
}

function keyPressRight() {
 console.log("You pressed the right key");
 root.innerHTML = "RIGHT";
}

function selectItem() {
 console.log("You pressed the enter key");
 root.innerHTML = "ENTER";
}
function handleKeyPress(event) {
	  switch(event.keyCode) {
	    case RC_ENTER:
	      selectItem();
	      break;
	    case RC_EXIT:
	      break;
	    case RC_LEFT:
	      keyPressLeft();
	      break;
	    case RC_RIGHT:
	      keyPressRight();
	      break;
	    case RC_UP:
	      keyPressUp();
	      break;
	    case RC_DOWN:
	      keyPressDown();
	      break;
	    default:
	      console.log("You need to add some cases here, a key you pressed was", event.keyCode);
	  }
	}

//Initialize function

var init = function () {
    // TODO:: Do your initialization job
    console.log('init() called');
    
    document.addEventListener('visibilitychange', function() {
        if(document.hidden){
            // Something you want to do when hide or exit.
        } else {
            // Something you want to do when resume.
        }
    });
 
    // add eventListener for keydown
    /*document.addEventListener('keydown', function(e) {
    	switch(e.keyCode){
    	case 37: //LEFT arrow
    		  console.log("You pressed the down key");
    	case 38: //UP arrow
    		  console.log("You pressed the down key");
    	case 39: //RIGHT arrow
    		  console.log("You pressed the down key");
    	case 40: //DOWN arrow
    		  console.log("You pressed the down key");
    	case 13: //OK button
    		  console.log("You pressed the down key");
    	case 10009: //RETURN button
		tizen.application.getCurrentApplication().exit();
    		break;
    	default:
    		console.log('Key code : ' + e.keyCode);
    		break;
    	}
    });*/
    console.log("Creating the app...");

    registerKeys();

    /**
     * Setting the root HTML element
    */
    root = document.getElementById("app");

    document.addEventListener("keydown", handleKeyPress);

    /**
     * Here you can start doing awesome things!
     */
    console.log("...and it's ready for use");
};
// window.onload can work without <body onload="">
window.onload = init;

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('divbutton1').innerHTML='Current time: ' + h + ':' + m + ':' + s;
    setTimeout(startTime, 10);
}

function checkTime(i) {
    if (i < 10) {
        i='0' + i;
    }
    return i;
}
