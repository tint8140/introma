let square=document.getElementById("squareDiv");

square.style.backgroundColor="#4287f5";
square.style.width="100px";
square.style.height="100px";

square.onmouseover=square.onmouseout=handler;

function handler(event) {
    if (event.type == 'mouseover') {
        event.target.style.background = 'pink'
      }
      if (event.type == 'mouseout') {
        event.target.style.background = 'green'
      }
}
