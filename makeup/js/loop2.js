
function setup() {
    createCanvas (500,500);
    background(110);
}

function draw() {

    for(x=1;x<5;x++){
    
        for(y=1;y< x+1;y++){
            fill(255,0,0);
            rect((y*35), (x*35), 35, 35); 
        }
    }
}
