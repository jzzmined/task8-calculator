

const screen = document.getElementById("screen");

function appendToDisplay(input) {
        screen.value += input;
        screen.value * input;
        screen.value - input;
        screen.value / input;
}

function clearScreen() {
        screen.value = "";
}

function calculate() {
        screen.value = eval(screen.value);
}