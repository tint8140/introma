//PART FIVE
//application level variables
// var txtSentence = document.getElementById("txtSentence");
// var dvOutput = document.getElementById("dvOutput");
// var allWords = [];

// function breakString() {
//     var newWord = txtSentence.value;

//     allWords.push[newWord];
//     // console.log(allWords);

//     dvOutput.innerHTML = "";
//     //Displays all words
//     for(var i=0; i<allWords.length; i++){
//         var newEl =document.createElement("div");

//         newEl.innerHTML = allWord[i];

//         if(allWords[i] == "cloud") {
//             newEl.style.color = "#4287f5";
//         }
//         dvOutput.appendChild(newEl);

       

//     }
    
//     //if the word says "cloud -> display in blue
// }


//Part One (Splitting strings into arrays)

// var testString= "Persona four is coming to PC this weekend (presumably).";


// var splitString= testString.split(" ");
// console.log(testString);
// console.log(splitString);



//Part Two (Searching arrays old-fasioned)


// var txtSentence = document.getElementById("#txtSentence");
// var txtOutput= document.getElementById("txtOutput");


// function breakString() {
//     var inputString= txtSentence.value;
//     var splitString= txtSentence.split(" ");
//     txtOutput.innerHTML= splitString[0];
// }

//Part Three A (Condensing arrays)
// var guesses= [12,7,18,5,2];
// var foundFlag = false;


// for (var i= 0; i<guesses.length; i++)
// {
//     var curGuess = guesses[i];
//     if(curGuess == "5") {
//         foundFlag= true;
//         //stop looping
//         break;
//     } 
// }

// console.log (foundFlag);

//Part Three B (Condensing arrays)
// var guesses= [12,7,18,5,2];
// var sum = 0;


// for (var i= 0; i<guesses.length; i++)
// {
//     var curGuess = guesses[i];
//     sum= sum+curGuess;
// }

// console.log (sum);




//PART FOUR
// var pizzas= [
//     { name: "Pepperoni", price: 12},
//     { name: "Cheese", price: 9},
//     { name: "Mushroom", price: 11},
//     { name: "The Works", price: 19},
//     { name: "The special", price: 17},
// ]

// for (var i= 0; i< pizzas.length; i++) {
//     var curPizza= pizzas[i];
    
//     //make a new element for that pizza
//     var newEl= document.createElement("div");

//     //customize
//     newEl.innerHTML= curPizza.name +": $" + curPizza.price;
//     newEl.backgroundColor = "#FFFF00";

//     //add to the page
//     document.body.appendChild(newEl);

// }
