
//Drawing an Arrays
// var colors = [ "#ff0000", "#00FF00", "#0000FF", "#ff0000", "#00FF00", "#0000FF" ];
// function setup() {
// 	createCanvas(800,600);
// 	for(let i = 0; i < colors.length; i++) {
// 		stroke(colors[i]);
// 		let x1 = Math.random() * 800;
// 		let y1 = Math.random() * 600;
// 		let x2 = Math.random() * 800;
// 		let y2 = Math.random() * 600;
// 		line(x1, y1, x2, y2);
// 	}
// }

//Array Positions
// let xPositions = [];
// let yPositions = [];
// function setup() {
// 	createCanvas(600,300);
// 	fill(255, 12, 129);
// 	for(let i = 0; i < 20; i++) {
// 		xPositions[i] = Math.random() * 600;
// 		yPositions[i] = Math.random() * 300;
// 	}
// }
// function draw() {
// 	background(0);
// 	for(var i = 0; i < xPositions.length; i++) 	{
// 		circle(xPositions[i], yPositions[i], 30);
// 	}
// }


//Making Snake
let xPositions = [];
function setup() {
	createCanvas(600,400);
	fill(255, 12, 129);
}
function draw() {
	background(0);
	if(xPositions.length > 10) {
		xPositions.shift();
	}
	xPositions.push(mouseX);
	for(var i = 0; i < xPositions.length; i++) {
		circle(xPositions[i],150, i*4);
	}
}

// //Falling Droplet
// let dObj = { x: 200, y: 0, velocityY: 2 }
// let gravity = .2;
// function draw() {
// 	background(0);
// 	circle(dObj.x, dObj.y, 20);
// 	dObj.y += dObj.velocityY;
// 	dObj.velocityY += gravity;
// }

