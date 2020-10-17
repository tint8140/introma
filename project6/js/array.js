let circle= {
    color:"pink",
     x: 300,
    y:200,
    velocity:1,
    
    drawCircle:function() {
      ellipse(this.x, this.y, 50, 50);
    },


    
    // moveCircle:function(){
    // this.x=this.x+this.velocity;
    // if (this.x>=800) {
    //   this.x=0;
    // }
    
    // }
    
    }
  balls= [circle, circle,circle,circle,circle,circle];



    function setup() {
      createCanvas(800, 600);
      
    }
    
    function draw() {
      background("blue");
      for (let i=0; i<balls.length; i++) {
          balls[i].x+=0.5;
          balls[i].y=i*100+40;
          balls[i].drawCircle();

      }
      
    
      
    }
    