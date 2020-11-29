let txtDieSize= document.getElementById("txtDieSize");
let dvResult= document.getElementById("dvResult");

function rollDie(){
    let dieSize= Number(txtDieSize.value);
    let randRoll= 1+ Math.floor(Math.random()*dieSize);
    dvResult.innerHTML= randRoll;

        // reset value
    // txtDieSize.value= "";
}


