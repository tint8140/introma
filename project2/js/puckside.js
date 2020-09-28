let posX = 100;
let poxY = 100;

function setup() {
  createCanvas(400, 300);
}
function draw() {
  background(0, 100, 100);
  posX = mouseX;
  posY = mouseY;
  circle(posX, posY, 30);
  fill(60, 154, 163);
  if (posX >= 200) {
    fill(163, 60, 60);
  }
}
