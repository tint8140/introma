//an array we put the raindrops in

let yPos = [];

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(198, 226, 247);
  yPos.push(0);

  fill("pink");

  for (let i = 0; i < yPos.length; i++) {
    if (i % 10 == 0) {
      circle(200, yPos[i], 10);
      yPos[i] += 5;
    }
    if (yPos[i] > 300) {
      yPos.splice();
    }
  }
}
