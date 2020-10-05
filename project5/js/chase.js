let xPos = 400;
let yPos = 200;
let velocity = 3;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(204);
  //make the ellipse follow your mouse
  let d = dist(xPos, yPos, mouseX, mouseY);
  ellipse(xPos, yPos, 80, 80);
  if (xPos <= mouseX) {
    xPos = xPos + velocity;
  } else if (xPos >= mouseX) {
    xPos = xPos - velocity;
  }

  if (yPos <= mouseY) {
    yPos = yPos + velocity;
  } else if (yPos >= mouseY) {
    yPos = yPos - velocity;
  }

  if (d <= 7) {
    fill(252, 3, 57);
  } else if (d >= 7) {
    fill(0, 0, 0);
  }
}
