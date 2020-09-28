let xPos = [];
let yPos = [];

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background("blue");

  for (let i = 0; i < yPos.length; i++) {
    rect(xPos[i], yPos[i], 200, 200);
    yPos[i] += 5;
  }

  if (mouseIsPressed) {
    xPos.push(mouseX);
    yPos.push(mouseY);
  }
}
