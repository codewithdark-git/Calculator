let displayValue = '';
let isNightMode = false;

function toggleDayNightMode() {
    isNightMode = !isNightMode;
    const body = document.body;
    const calculator = document.getElementById('calculator');
    const modeIcon = document.getElementById('mode-icon');

    if (isNightMode) {
        body.classList.add('night-mode');
        calculator.classList.add('night-mode');
        modeIcon.classList.remove(' bx-sun'); // Remove the sun icon
        modeIcon.classList.add(' bx-moon');   // Add the moon icon
    } else {
        body.classList.remove('night-mode');
        calculator.classList.remove('night-mode');
        modeIcon.classList.remove(' bx-moon');  // Remove the moon icon
        modeIcon.classList.add(' bx-sun');      // Add the sun icon
    }
}


function buttonClick(value) {
    displayValue += value;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function removeLast() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}