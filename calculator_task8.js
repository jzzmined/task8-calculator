
document.addEventListener('DOMContentLoaded', function() {
    const screen = document.getElementById("screen");

    function appendToDisplay(input) {
            screen.value += input;
    }

    function clearScreen() {
        screen.value = "";
    }

    function calculate() {
         try {
        screen.value = eval(screen.value);
        } catch (error) {
        screen.value = "Syntax Error";
        }
    }
    
    function deleteOn() {
        screen.value = screen.value.slice(0, -1);
    }  

    window.appendToDisplay = appendToDisplay;
    window.clearScreen = clearScreen;
    window.calculate = calculate;
    window.deleteOn = deleteOn;

    document.addEventListener('keydown', function(event) {
        console.log("Key pressed:", event.key)
        const key = event.key;

        if (key >= '0' && key <= '9') {
            appendToDisplay(key);
        }

        else if (['+', '-', '*', '/'].includes(key)) {
            appendToDisplay(key);
        }

        else if (key == 'Enter') {
            event.preventDefault()
            calculate();
        }

        else if (key == 'Backspace') {
            event.preventDefault();
            deleteOn();
        }

        else if (key === 'Escape' || key === 'c'  || key === 'C') {
            clearScreen();
        }

        else if (key === '.') {
            appendToDisplay(key);
        }
    });
})

