//3 variables

let num1 = '';
let num2 = ''; //these will be stored as strings
let operator; //add, subtract, multiply or divide
let displayStr = ''; //store value of whatever is on the screen 
display();

//function to turn control keys into inputs
const controlKeys = document.getElementById('operatorKeys');
controlKeys.addEventListener('click', (event) => {
    console.log(event.target.getAttribute('id'));
    switch (event.target.getAttribute('id')) {
        case 'buttonEnter':
            num2 = displayStr;
            displayStr = operate(num1, num2, operator);
            display();
            break;
        case 'buttonClear':
            operator = 'multiply'
            num1 = '';
            num2 = '';
            displayStr = ''
            display();
            break;
        default:
            num1 = displayStr;
            operator = event.target.getAttribute('id');
            displayStr = '';
            display();
    }
})

//function to turn number buttons into inputs
const numberKeys = document.getElementById('numberKeys');
numberKeys.addEventListener('click', (event) => {
    console.log(event.target.getAttribute('id'));
    enterNum(event.target.getAttribute('id'));
})

//function to run when a number button is clicked
function enterNum(button) {
    switch (button) {
        case 'button1':
            displayStr += 1;
            break;
        case 'button2':
            displayStr += 2;
            break;
        case 'button3':
            displayStr += 3;
            break;
        case 'button4':
            displayStr += 4;
            break;
        case 'button5':
            displayStr += 5;
            break;
        case 'button6':
            displayStr += 6;
            break;
        case 'button7':
            displayStr += 7;
            break;
        case 'button8':
            displayStr += 8;
            break;
        case 'button9':
            displayStr += 9;
            break;
        case 'button0':
            displayStr += 0;
            break;
        default:
            break;  
    }
    display();
}


//display num
    //run whenever a button is pressed
    
function display() {

    let screen = document.getElementById('display');
    screen.innerText = displayStr;
}

//add
function addtwoNumbers(num1, num2) {
    return parseInt(num1) + parseInt(num2);
}
//subtract
function subtracttwoNumbers(num1, num2) {
    return parseInt(num1) - parseInt(num2);
}
//multiply
function multiplytwoNumbers(num1, num2) {
    return parseInt(num1) * parseInt(num2);
}
//divide
function dividetwoNumbers(num1, num2) {
    return parseInt(num1) / parseInt(num2);
}
//select operator
function operate(num1, num2, operator) {
    switch (operator) {
        case 'buttonAdd':
            return addtwoNumbers(num1, num2);
            break;
        case 'buttonSubtract':
            return subtracttwoNumbers(num1, num2);
            break;
        case 'buttonMultiply':
            return multiplytwoNumbers(num1, num2);
            break;
        case 'buttonDivide':
            return dividetwoNumbers(num1, num2);
            break;
        default:
            return;
    }
}