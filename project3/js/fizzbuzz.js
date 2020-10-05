function setup() {
  createCanvas(1400, 1400);
}

function draw() {
  background(90);
  var y = 200;
  // 25 black squares
  for (let i = 0; i < 25; ++i) {
    let x = i * 50;

    if (i % 3 == 0 && i % 5 == 0) {
      // sets the last blue square
      fill(0, 0, 255);
      square(x, y, 50);
    } else if (i % 3 === 0) {
      // sets the purple circle
      fill(153, 31, 240);
      ellipse(x + 25, y + 25, 50, 50);
    } else if (i % 5 === 0) {
      // sets the green squares
      fill(0, 255, 0);
      square(x, y, 50);
    }  else (i ) {
      fill (61, 61, 61);
      ellipse(x + 25, y + 25, 50, 50);
    }
  }

      
}
