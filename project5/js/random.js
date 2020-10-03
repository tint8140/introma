var r;
var g;
var y;

function setup() {
  createCanvas(600, 400);
  rectMode(CENTER);
}

function draw() {
  background(220);

  r = random(255); // r is a random number between 0 - 255
  g = random(100, 200); // g is a random number betwen 100 - 200
  y = random(100); // b is a random number between 0 - 100

  noStroke();
  fill(r, g, y);
  ellipse(300, 200, 200, 200);
}
