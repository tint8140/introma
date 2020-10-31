// let carProducers = ["Subaru", "Chevy", "Ford", "Hond"];

// console.log(carProducers[2]); // "Ford"
// carProducers[2] = "Nissan";
// console.log(carProducers); // "Nissan"
// for (var i = 0; i < carProducers.length; i++) {
//   console.log("I own a " + carProducers[i]);
// }


let positions = [0,0,0,0,0,0,0,0,0];

function setup() {
  createCanvas(400,300);

}

function draw(){
  //see without background
  background(50);

  positions.push(mouseX);
  positions.shift();

  for( var i=0; i<positions.length; i++) {
    circle(positions[i], 150.20);
  }
}