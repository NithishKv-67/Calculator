
const display = document.getElementById("screen");

function append(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function del(){
    display.value = display.value.slice(0, -1);
}

function equal(){
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
