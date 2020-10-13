
let ball = {
color: "red",
h: 80,
r:80,

drawBall: function(){ 
  ellipse(360, 200, this.h, this.r);

}
}
function setup() {
  createCanvas(720, 400);
}


function draw() {
  // Draw a circle
  ball.drawBall();
  
}

