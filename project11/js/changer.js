let redBox = document.getElementById("red");
redBox.addEventListener("click", redClick);

function redClick(event) {
    event.target.style.backgroundColor = "#7a0505";
}

let blueBox = document.getElementById("blue");
blueBox.addEventListener("click", blueClick);

function blueClick(event) {
    event.target.style.backgroundColor = "#424ef5";
}

let greenBox = document.getElementById("green");
greenBox.addEventListener("click", greenClick);

function greenClick(event) {
    event.target.style.backgroundColor = "#057a30";
}
