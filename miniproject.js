
let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["yellow", "red", "purple", "green"];

let h2 = document.querySelector('h2');

document.addEventListener('keypress', function (){      // 'keypress' means if any key on keyboard is pressed then action should be performed.
    if (started == false){
        console.log("game started");
        started = true;

        levelUp();
    }
})


function btnFlash(btn) {                      // it will be random flash and will flash white color flash.
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    }, 250);

}



function userFlash(btn) {            // created function for user to click and will return yellow color.
    btn.classList.add("userFlash");
    setTimeout(function (){
        btn.classList.remove("userFlash");
    },250);
}

let count = [];

function levelUp() {            // created function to up the level
    userSeq = []; 
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);         // randColor will be pushed in gameSeq array
    console.log(gameSeq);
    console.log(randColor)

    btnFlash(randBtn);


   count.push(level);            // level++ to pushed inside the count variable.
   const add =   maxNumber(count);
   console.log(add);
   h3.innerText = `Highest score is ${add}`;    // will print highest score of player while playing game.
   console.log(count)
    
}

let h3 = document.querySelector('h3');


function bgRed() {                   // function for the wrong press goes to bg-c red
    let body = document.querySelector('body');
    body.classList.add("bgRed");
    setTimeout(function () {
        body.classList.remove("bgRed")
    }, 250)
}

function checkAns(idx) {
    if(userSeq[idx] === gameSeq[idx]){
         if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000)
        }
}       else {
            h2.innerHTML = `Game Over! your score was <b>${level}</b> <br>Press any key to start.`;
        bgRed();         // 
        restart();
    }

        // console.log("curr level : ", level);
}

function btnPress() {
    let btn = this;
    // btnFlash(btn);
    userFlash(btn);                 // given function that when user click it should blink in yellow
   
    userColor = btn.getAttribute("id");     // getting color though id on pressing of button.
    userSeq.push(userColor);

    checkAns(userSeq.length-1);                    // will check the current level of the user game

    

    // bgRed();         // for the backgroundColor becomes red after wrong press.
}


let allbtns = document.querySelectorAll(".btn");       // selected all the buttons

for(btn of allbtns) {                            // loop to select the button one by one
    btn.addEventListener('click', btnPress)
}

console.log(userSeq);

function restart() {         // created function to restart the game.
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}



























// random work--------------------------------------------------------------------------------



let arr = [2,3,4,5,3,4,7,8,1,2];

// let final = arr.reduce((max,el) => {
//     if(el > max ){
//         return el;
//     } else {return max;}
// })

// let maxNumber = Math.max(...arr);

function maxNumber(arr){              // function to get maximum number from array using Math.max and spread
       let max = Math.max(...arr);

       return max;
}

let f = [10,20,25,8,9,35,0,5];
















function findAndPrintHighestValue(arr) {
    let highestValue = 0; // Initialize with null or a suitable initial value
  
    for (const element of arr) {
      if (element > highestValue || highestValue === 0) {
        highestValue = element;
        console.log(`Highest value so far: ${highestValue}`);
      }
    }
  
    return highestValue;
  }
  
//   const myArray = [10, 5, 8, 15, 3, 20, 18];
//   const highest = findAndPrintHighestValue(myArray);

 
  
  // At this point, `highest` contains the highest value from the array, and it won't change
//   console.log(`The highest value in the array is: ${highest}`);
  







// Initialize an empty array to store random values
var randomArray = [];

// Define the number of random values you want to generate
var numberOfRandomValues = 10; // Change this number as needed

// Generate random values and store them in the array
for (var i = 0; i < numberOfRandomValues; i++) {
  var randomValue = Math.floor(Math.random() * 10); // Generate a random number between 0 and 1
  randomArray.push(randomValue);   // Add the random value to the array
}




// Display the random values in the console
console.log(randomArray);


console.log(maxNumber(randomArray))
