
let xPos = 0;
let xSpeed = 0;

function draw() {
	background(0); //clear to black
	xSpeed = 0;
	if(keyIsDown(LEFT_ARROW)) { //gets "w"
		xSpeed = -3;
	}	if(keyIsDown(RIGHT_ARROW)) { //gets "w"
		xSpeed = 3;
	}
	xPos += xSpeed;
	circle(xPos, 200, 30);
}
