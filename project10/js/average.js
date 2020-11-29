

function compute() {
    
    var comma = document.getElementById("numbers").value;
    var returnSum = document.getElementById("returnSum");
    var returnAvg = document.getElementById("returnAvg");

    sum = 0;
    average = 0;

    var Splits= comma.toString().split(',');

   for (i= 0; i < Splits.length; i++) {
    sum += parseInt(Splits[i]);
    }

    average = sum / Splits.length;
    returnSum.innerHTML = "The Sum: " + sum.toFixed(2);
    returnAvg.innerHTML = "The Average: " + average.toFixed(2);

    document.getElementById("numbers").value = null;

}























// // let pixel=document.getElementById("square");
// // pixel.style.backgroundColor = "#00FF00";
// // pixel.style.width= "100px";
// // pixel.style.height="100px";

// // var pixelWidth=pixel.style.width;
// // var pixelHeight=pixel.style.height;

// // function Size() {
    
// //     pixelSize= pixelWidth=pixelHeight;
// //     if (pixelSize >.5) {
// //         pixelSize + "10px";
        
// //     } 
    
// // }
// let dvBox= document.getElementById("pixels");

// dvBox.style.backgroundColor = "#038227";
// dvBox.style.margin= "100px";

// varName = 100 + "px";

// dvBox.style.width = varName;
// dvBox.style.height = varName;


// function zoom() {

//     var dvBox = document.getElementById("pixels");
//     var Box = dvBox.getBoundingClientRect();

//     var varName = Box.height;
//     var varName = Box.width;

//     var newHeight = varName *1.1;
//     var newWidth = varName * 1.1;


    
//     document.getElementById("pixels").style.height = newHeight+"px";
//     document.getElementById("pixels").style.width = newWidth+"px";


// }