//while loop syntax
// let i=0;
// while(i<5)
// {
//     console.log(i);
//     i++;

// }
// console.log("Afterwards: " +i);


function setup() {
    createCanvas(400,300);
    background(100);
    // for(var i=15; i>1; i--) {
    //     var randColor=Math.random()*255;
    // fill(randColor);
    
    
        // stroke(255-(i*15));
        // circle(200,150,i * 10);
}

function draw(){
 
    // noFill();

    //for loop syntax
for(var i=15; i>1; i--) {
    var randColor=Math.random()*255;
fill(randColor);

    // console.log(color);

    stroke(255-(i*15));
    circle(200,150,i * 10);
}
}
