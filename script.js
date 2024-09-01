//3 variables

let num1, num2; //these will be stored as strings
let operator; //add, subtract, multiply or divide
let displayStr = 'calculator'; //store value of whatever is on the screen 
display();




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
        case 'add':
            return addtwoNumbers(num1, num2);
            break;
        case 'subtract':
            return subtracttwoNumbers(num1, num2);
            break;
        case 'multiply':
            return multiplytwoNumbers(num1, num2);
            break;
        case 'divide':
            return dividetwoNumbers(num1, num2);
            break;
        default:
            return;
    }
}