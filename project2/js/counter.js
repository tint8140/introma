let xPos = 0;

function setup() {
  createCanvas(400, 300);
}
function draw() {
  background(207, 224, 92);
  xPos = xPos + 1;
  circle(xPos, 200, 30);
}
