let element = document.getElementById("capital");
element.addEventListener("click", isClicked);

let element2 = document.getElementById("iupui");
element.addEventListener("click", isClicked);

let element3 = document.getElementById("BTS");
element.addEventListener("click", isClicked);


function isClicked(event){

    let div = document.getElementById("answers");

    let attr = event.target.getAttribute("data-attribute");

    div.innerHTML = attr;
    
};