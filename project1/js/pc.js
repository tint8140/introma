function setup() {
  var xPos = 400;
  var yPos = 300;
  var pp = "purple";

  createCanvas(900, 600);
  background(232, 172, 142);

  noStroke();
  fill(230, 223, 90);
  square(250, 200, 325);

  fill(56, 132, 176);
  ellipse(xPos, yPos, 100, 100);

  fill(pp);
  arc(xPos, yPos, 80, 80, HALF_PI, PI);
  arc(xPos, yPos, 80, 80, 0, HALF_PI);

  stroke("green");
  strokeWeight(6);
  line(xPos, 500, xPos, 350);

  // Change the color
  stroke(pp);
  // Make the points 10 pixels in size
  strokeWeight(10);
  point(380, 280);
  point(420, 280);
}
