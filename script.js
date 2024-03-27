// FOR CALCULATOR

const display = document.getElementById("display");


function appendToDisplay(input){
    //Accepts Button user input
    display.value += input;
}

function clearDisplay(){
    //Clears the screen
    display.value = "";
}

function calculate(){
    //calculates the display value with eval
    try{
        display.value = eval(display.value);
    }
    //Catches error if user Inputs differently
    catch(error){
        display.value = "ERROR";
    }
}