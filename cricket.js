// for handle click button bat 
function handleBatButtonClick(){
let random=Math.random()*3;
let computerchoice;
if(random>0&&random<=1){
    computerchoice="bat";
}else if(random>1&&random<=2){
    computerchoice="ball";
}else{
    computerchoice="stumps";
}
let result;
if(computerchoice==="bat"){
    result="it's tie";
}else if(computerchoice==="ball"){
    result="you won";
}else{
    result="computer won";
}
   alert(`you choosen bat and computer choosen ${computerchoice} and ${result}`);
}

var batButton = document.getElementById("batButton");

// Add a click event listener to the bat button, calling the handleBatButtonClick function
batButton.addEventListener("click", handleBatButtonClick);


// for handle click button ball


function handleBallButtonClick(){
    let random=Math.random()*3;
    let computerchoice;
    if(random>0&&random<=1){
        computerchoice="bat";
    }else if(random>1&&random<=2){
        computerchoice="ball";
    }else{
        computerchoice="stumps";
    }
    let result;
    if(computerchoice==="bat"){
        result="computer won";
    }else if(computerchoice==="ball"){
        result="its tie";
    }else{
        result="you won";
    }
       alert(`you choosen ball and computer choosen ${computerchoice} and ${result}`);
    }

    var batButton = document.getElementById("ballButton");

// Add a click event listener to the bat button, calling the handleBatButtonClick function
batButton.addEventListener("click", handleBallButtonClick);


// for handle stump button 

function handleStumpButtonClick(){
    let random=Math.random()*3;
    let computerchoice;
    if(random>0&&random<=1){
        computerchoice="bat";
    }else if(random>1&&random<=2){
        computerchoice="ball";
    }else{
        computerchoice="stumps";
    }
    let result;
    if(computerchoice==="bat"){
        result=" you won";
    }else if(computerchoice==="ball"){
        result="computer won";
    }else{
        result="its a tie";
    }
       alert(`you choosen stump and computer choosen ${computerchoice} and ${result}`);
    }

    var stumpButton = document.getElementById("StumpButton");

// Add a click event listener to the bat button, calling the handleBatButtonClick function
    stumpButton.addEventListener("click", handleStumpButtonClick);