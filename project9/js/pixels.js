let pixel=document.getElementById("square");
pixel.style.backgroundColor = "#00FF00";
pixel.style.width= "100px";
pixel.style.height="100px";

function Size() {
    var pixelWidth=pixel.style.width;
    var pixelHeight=pixel.style.height;
    pixelSize= pixelWidth+pixelHeight;
    if (pixelSize >.5) {
        pixelSize + "10px";
        
    } 
    
}
