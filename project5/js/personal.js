// for red, green, blue, and yellow color values
let r, g, b, y;

function setup() {
  createCanvas(720, 400);
  r = random(255);
  g = random(255);
  b = random(255);
  y = random(255);
}

function draw() {
  // Draw a circle
  strokeWeight(2);
  stroke(r, g, b, y);
  fill(r, g, b, y);
  ellipse(360, 200, 200, 200);
}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  ellipse(mouseX, mouseY, 360, 200);
  // if (d < 100) {
  //   // Pick new random color values
  //   r = random(255);
  //   g = random(255);
  //   b = random(255);
  // }
}
