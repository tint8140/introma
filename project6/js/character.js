let circle= {
  color: "blue",
  x: 400,
  y: 200,


drawCircle: function(){
  ellipse(this.x, this.y, 80, 80);
 
},
moveCircle: function(){
  if (keyIsDown(LEFT_ARROW)) {
    this.x -= 2;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    this.x += 2;
  }

  if (keyIsDown(UP_ARROW)) {
    this.y -= 2;
  }

  if (keyIsDown(DOWN_ARROW)) {
    this.y += 2;
  }
}
  
}




function setup() {
  createCanvas(600, 400);
  
  
}

function draw(){
  background("red");
  circle.drawCircle();
  circle.moveCircle();
}