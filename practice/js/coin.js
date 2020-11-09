let dvCoin= document.getElementById("coin");

dvCoin.innerHTML= "tails";
dvCoin.style.backgroundColor= "#ebcf34";
dvCoin.style.width= "100px";
dvCoin.style.height="100px";

function flipCoin() {
    //do a coin flip
    let flip= Math.random();
    let side="heads";
    if (flip>.5) side="tails";
    dvCoin.innerHTML=side;

    //set results in innerHTML
    if(side == "tails") {
        dvCoin.style.backgroundColor= "#eb6434";
    } else {
        dvCoin.style.backgroundColor = "#34cceb";
    }
    //record result in result list
//make an element
let newEl=document.createElement("div");
//customize
newEl.innerHTML= side;
newEl.style.backgroundColor="#eb6434";
newEl.style.width= "40px";
newEl.style.float= "left";
newEl.style.margin= "3px";
//place the object on the page
document.body.appendChild(newEl);
}


