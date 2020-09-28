//where the ball is intially positioned horizontally on the canvas
let posX = 30;
//where the ball is intially positioned vertically on the canvas
let posY = 300;
//how fast the ball is moving
let velocity = 5;

//initialize the canvas setup, things that only happen once
function setup() {
  createCanvas(800, 600);
}
//things we want to happen continously
function draw() {
  background(0, 100, 100);
  //create the posX,posY, and diameter
  circle(posX, posY, 40);

  //changing the postion x with velocity
  posX = posX + velocity;

  //if the ball reaches the right edge
  //if the ball position to the left edge
  if (posX >= 800) {
    posX = 0;
  }
}
