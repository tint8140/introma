// Random Ball Placement
var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50;
var xSpeed = (2, 7);
var ySpeed = (-7, -2);
var score = 0

// Canvas
function setup() {
  createCanvas(800, 400);
}


function draw() {

  // Background
  background("gray");
b
  // Paddle
  fill('pink');
  rect(mouseX, 375, 90, 15);

  fill('#d9c3f7');
  ellipse(xBall, yBall, 60, 60);


  //Functions
  move();
  bounce();
  //resetBall();
  paddle();
  //Score
  fill('red');
  textSize(24);
  text("Score: " + score, 10, 25);
}
// Ball Functions
function move() {
  xBall += xSpeed;
  yBall += ySpeed;
}


function bounce() {

  if (xBall < 10 ||
    xBall > 800 - 10) {
    xSpeed *= -1;
  }
  else if (yBall < 10 ||
    yBall > 400 - 10) {
    ySpeed *= -1;
  }
}


// Bounce off Paddle
function paddle() {
  if ((xBall > mouseX &&
      xBall < mouseX + 90) &&
    (yBall + 10 >= 375)) {
    xSpeed *= -1;
    ySpeed *= -.5;
    score++;

  }
}