const calculatorDisplay = document.querySelector('h1');
const inputButtons = document.querySelectorAll('button');
const clearButton = document.getElementById('clear-button');

let firstValue = 0;
let operatorValue = '';
let awaitingNextValue = false;

function sendNumberValue(number) {
if (awaitingNextValue) {
    calculatorDisplay.textContent = number;
    awaitingNextValue = false;
} else {
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
}
}

function addDecimal() {
    if (awaitingNextValue)  return;
    if(!calculatorDisplay.textContent.includes('.')) {
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
    }
}

function useOperator(operator) {
    const currentValue = Number(calculatorDisplay.textContent);
    if (!firstValue) {
        firstValue = currentValue;
    } else {
        console.log('currentValue', currentValue);
    }
    awaitingNextValue = true;
    operatorValue = operator;   
    console.log('firstValue', firstValue);
    console.log('operator', operatorValue);
}

// Add Event Listeners for numbers, operators, decimal buttons

inputButtons.forEach((inputButton) => {
    if (inputButton.classList.length === 0) {
        inputButton.addEventListener('click', () => sendNumberValue(inputButton.value));
    } else if (inputButton.classList.contains('operator')) {
        inputButton.addEventListener('click', () => useOperator(inputButton.value));
    } else if (inputButton.classList.contains('decimal')) {
        inputButton.addEventListener('click', () => addDecimal());
    }
})

function clearAll() {
    firstValue = 0;
    operatorValue = '';
    awaitingNextValue = false;
    calculatorDisplay.textContent = '0';
}

clearButton.addEventListener('click', clearAll);