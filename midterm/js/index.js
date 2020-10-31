
//creating an object and its properties
var ball = { 
    x: 100, 
    y: 100,
    velocityX: 2, 
    velocityY: 2,
    
    //Ball Functions
    update: function() {
    noFill();
    stroke(255, 238, 130);

    //bounce ball off corners 
        if(ball.x > 400) {
            ball.x = 400;
            ball.velocityX *= -1;
        }
        
        if(ball.x < 0) {
            ball.x = 0;
            ball.velocityX *= -1;
        }

        if(ball.y > 400) {
            ball.y = 400;
            ball.velocityY *= -1;
        }
            
        if(ball.y < 0) {
            ball.y = 0;
            ball.velocityY *= -1;
        }
        
    //draw the circle
    circle(this.x, this.y, 10);
    //moving directions with the velocity
    this.x += this.velocityX;
    this.y += this.velocityY;
    }
    };

    //paddle for the ball to bounce
    var paddle = {
    x: 100, y: 350, w: 150, h: 20,
    //Paddle Functions
    update: function() {
    noFill();
    stroke(143, 251, 255);
    rect(this.x, this.y, this.w, this.h);
    //When left arrow key is 
    if(keyIsDown(LEFT_ARROW)) {
    this.x -= 2;
    }
    
    if(keyIsDown(RIGHT_ARROW)) {
    this.x += 2;
    }

    }
    };
    
    //tried creating block object and functions on its own
    /*var blocks = {
        bx: 60, 
        by: 10,
        //Ball Functions
        update: function() {
        noFill();
        stroke(255, 238, 130);
        rect(this.bx, this.by, 60, 20);

        for (var i = 0; i < 6; i++) {
        blocks[i] = i*this.bx, this.by;
        }

        }
    };*/

    //create the blocks 
    var blocks = [];
    //loops the blocks 
    for(var i = 0; i < 6; i++) {
    blocks[i] = { x: i * 60, y: 10 };
    }
    
    function setup() {
    createCanvas(400, 400);
    }
    
    //on draw
    function draw() {
    background(70);

    //recall the objects and its functions
    ball.update();
    //invoke the paddle and its functions
    paddle.update();

    /*blocks.update();*/
    
    //check if the ball is hitting  the paddle
        if(hitTestPoint(ball.x, ball.y, paddle.x, paddle.y, paddle.w, paddle.h) ) {
            //bounce the ball
            ball.velocityY *= -1;
            }   


        //loop through the blocks
        for(var i = 0; i < blocks.length; i++) {
            var b = blocks[i];
            //draw rectangle
            rect(b.x, b.y, 60, 20);

            //check if ball is hitting the area
        if(hitTestPoint(ball.x, ball.y, b.x, b.y, 60, 20)) {
            //bounce the ball
            ball.velocityY *= -1;
        
        //remove block from array
        blocks.splice(i, 1);
        }
        }
         
        
        
    }

    
    function hitTestPoint(px, py, bx, by, bw, bh) {
        //if the bal/s y position is greater than the top, less than the bottom
        if(px > bx && px < bx + bw) {
            if(py > by && py < by + bh) {
                return true;
            }
         }
    
    return false;
    }