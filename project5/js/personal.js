// for red, green, blue, and yellow color values
let colors = ["#b01504", "#32a852", "#0b36d4", "#0b36d4"];
let h = 80;
let w = 80;
function setup() {
  createCanvas(720, 400);
}

function draw() {
  // Draw a circle
  strokeWeight(2);
  ellipse(360, 200, h, w);
}

// When the user clicks the mouse
function mousePressed() {
  fill(colors[Math.floor(Math.random() * colors.length)]);
  stroke(colors[Math.floor(Math.random() * colors.length)]);
  ellipse(mouseX, mouseY, h, w);
}
