let colors = ["#f9c0c0", "#f6d6ad", "#ccf6c8"];

function setup() {
  createCanvas(800, 600);
  background(198, 226, 247);

  for (var i = 0; i < colors.length; i++) {
    fill(colors[i]);
    rect(300, 100 + 50 * i, 400, 150);
  }
}
