// let square=document.getElementById("squareDiv");

// square.style.backgroundColor="#4287f5";
// square.style.width="100px";
// square.style.height="100px";

// square.onmouseover=square.onmouseout=handler;

// function handler(event) {
//     if (event.type == 'mouseover') {
//         event.target.style.background = 'pink'
//       }
//       if (event.type == 'mouseout') {
//         event.target.style.background = 'green'
//       }
// }
var Box = document.getElementById("div2");

Box.style.width = "100px";
Box.style.height = "100px";
Box.style.backgroundColor = "blue";
Box.style.margin= "300px"

function mouseOver() {
    Box.style.backgroundColor = "pink";

}

function mouseOut() {
    Box.style.backgroundColor = "blue";

}
