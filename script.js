const display = document.getElementById('display-id');

const symbols = ["-","+","×","/","."];
const symbols_no_dot = ["-","+","×","/"];

let dotIsTyped = false;

function appendToDisplay(input) {
    
    let last_input = display.value.slice(-1);

    if(display.value === "0" && !symbols.includes(input)){
        return;
    }

    if(symbols_no_dot.includes(last_input)){
        dotIsTyped = false;
    }

    if (display.value === "" && input !== "-" && symbols.includes(input) && !symbols.includes(last_input)) {
        return;
    }

    if (symbols.includes(last_input) && symbols.includes(input)) {
        return;
    }

    display.value += input;
}

function appendToDisplayDot(){
    if(!dotIsTyped){
        appendToDisplay(".");
        dotIsTyped = true;
    }
}

function clearDisplay(){
    if (display.value !== "") {
        // let lastChar = display.value.slice(-1);
        display.value = display.value.slice(0, -1);

        
        let parts = display.value.split(/[-+×/]/);
        let lastNumber = parts[parts.length - 1];

        dotIsTyped = !lastNumber.includes(".");
    }
    display.value = "0";
}

function clearDigit() {
    if(display.value === "0"){
        return;
    }
    if (display.value !== "") {
        // let lastChar = display.value.slice(-1);
        display.value = display.value.slice(0, -1);

        
        let parts = display.value.split(/[-+×/]/);
        let lastNumber = parts[parts.length - 1];

        dotIsTyped = lastNumber.includes(".");
    }
}
function calculate() {
    try {
        let str_eval = display.value.replaceAll("×", "*");
        let result = eval(str_eval);
        display.value = result;
        dotIsTyped = display.value.includes(".");
    } catch (error) {
        display.value = "0";
    }
}

