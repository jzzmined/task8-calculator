
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
        let expression = screen.value.replace(/×/g, '*').replace(/÷/g, '/');
        screen.value = eval(expression);
        } catch (error) {
        screen.value = "Syntax Error";
        }
    }
    
    function deleteOn() {
        screen.value = screen.value.slice(0, -1);
    } 

    function toggleSign() {
        if (screen.value) {
            if (screen.value.startsWith('-')) {
                screen.value = screen.value.slice(1);
            } else {
                screen.value = '-' + screen.value;
            }
        }
    }

    window.toggleSign = toggleSign;
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

        else if (['+', '-','%'].includes(key)) {
            appendToDisplay(key);
        }

        else if (key === '*') {
            appendToDisplay('×');
        }

        else if (key === '/') {
            event.preventDefault();
            appendToDisplay('÷');
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

