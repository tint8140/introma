let element= document.getElementById("eventTest");
element.addEventListener("click", itsClicked);

function itsClicked(event) {
    event.target.style.backgroundColor= "#03fcc6";

}