var bx=100;
var by=100;
var bvx=2;
var bvy=2;
var rectangles= [50,100,150,200,250,300,350,400,450,500];


function setup() {
    createCanvas(600,400);
}

//on draw
function draw() {

    background(200, 0, 150);

    //draw a ball
    circle(bx, by, 20);

    //animate the ball in its velocity direction
   
    bx +=bvx;
    by +=bvy;

    //bounce ball off corners
    if (bx > 600) {
        bx = 600;
        bvx *= -1;
    }
   
    if (bx < 0) {
        bx = 0;
        bvx *= -1;
    }

    if (by < 0) {
        by = 0;
        bvy *= -1;
    }

    if (by > 400) {
        by = 400;
        bvy *= -1;
    }

    //loop through rects
    for (let i=0; i <rectangles.length; i++) {
        
        //draw them
        rect(rectangles[i], 50, 45, 15);
        // console.log(by, 50);


        //check if ball is hitting 
        if(hitTestPoint(bx, by, rectangles[i],50,45,15)){
            bvy *= -1;
            // console.log("Its hitting");

             //remove rectangles
             rectangles.splice(i,1);
        }
    }
}

function hitTestPoint(px, py, rx, ry, rw, rh) {

    if(px > rx && px <rx + rw) {
        //if the ball's y position
        if(py > ry && py < ry + rh) {
            return true;
        }
    }
    return false;

}