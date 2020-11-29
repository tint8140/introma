let objects = [

  { color: "#FF0000", height: 100, width: 300 },
 
  { color: "#FFFF00", height: 200, width: 200 },
 
  { color: "#ff0000", height: 300, width: 100 },
 
 ];


objects.forEach((div2) => {

  let div1 = document.createElement("div1");
  div1.setAttribute('color', div2.color);
  div1.setAttribute('height',  div2.height);
  div1.setAttribute('width', div2.width);

  document.body.appendChild(div1);

});




// for (var i = 1; i <= 100; i++ ) {
//     var Box = document.createElement("div2");
    

//     //generate the RGB format
//     var randomColor = Math.floor(Math.random() * 256);
//     var randomColor2 = Math.floor(Math.random() * 256);
//     var randomColor3 = Math.floor(Math.random() * 256);

//     //Box sizes and float to left
//     Box.style.width = "20px";
//     Box.style.height = "20px";
//     Box.style.float = "left";


//     //RGB Colors
//     Box.style.backgroundColor = "rgb(" + randomColor + ","+randomColor2+","+randomColor3+")";

//   document.body.appendChild(Box);
//     }
 

