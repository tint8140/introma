let carProducers = ["Subaru", "Chevy", "Ford", "Hond"];

console.log(carProducers[2]); // "Ford"
carProducers[2] = "Nissan";
console.log(carProducers); // "Nissan"
for (var i = 0; i < carProducers.length; i++) {
  console.log("I own a " + carProducers[i]);
}
// console.log("I own a " + carProducers[2]);
