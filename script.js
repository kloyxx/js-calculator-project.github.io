const display = document.getElementById('display');

const symbols = ["-","+","×","/","."];
const symbols_no_dot = ["-","+","×","/"];

let dotIsTyped = false;

function appendToDisplay(input) {
    let last_input = display.value.slice(-1);
    if(symbols_no_dot.includes(last_input)){
        dotIsTyped = false;
    }
    if (display.value === "" && symbols.includes(input) && !symbols.includes(last_input)) {
        return;
    }

    if (!(symbols.includes(last_input) && symbols.includes(input))) {
        display.value += input;
    }
}

function appendToDisplayDot(){
    if(!dotIsTyped){
        dotIsTyped = true;
        appendToDisplay(".");
    }
}

function clearDisplay(){
    display.value = "";
    dotIsTyped = false;
}

function clearDigit(){
    if(display.value !== ""){
        display.value = display.value.slice(0,-1);
    }
}
function calculate(){
    
    try {
        let str_eval = display.value.replaceAll("×", "*");
        display.value = eval(str_eval); 
    } 
    catch(error) {
        display.value = "Error"; 
    }
}
