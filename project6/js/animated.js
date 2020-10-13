let circle= {
color:"black",
 x: 400,
y:200,
velocity: 1,

drawCircle:function() {
  ellipse(this.x, this.y, 80, 80);
},

moveCircle:function(){
this.x=this.x+this.velocity;
if (this.x>=800) {
  this.x=0;
}

}

}

function setup() {
  createCanvas(800, 600);
  
}

function draw() {
  background("blue");
  circle.drawCircle();
  circle.moveCircle();
  

  
}
