let colors = ["red", "green", "blue", "yellow"];

function setup() {
  createCanvas(600, 400);
  rectMode(CENTER);
}

function draw() {
  background(220);

  noStroke();
  ellipse(300, 200, 200, 200);
}

function mousePressed() {
  fill(colors[Math.floor(Math.random() * colors.length)]);
}
