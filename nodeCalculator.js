// Use readline-sync npm package for this project:
// Ask the user, "What operation would you like to perform?"
// Then the user enters one of these options: "/" "*" "-" "+"
// If the user enters an invalid character, print: "That is not a valid operation" and then restart the program.
// After the user enters a valid operation, ask the user, "Please enter the first number"
// The user then enters the first number. If the user enters something that is not a number, print: “This is not a number” and then re-ask the question
// After a valid number is entered, ask the user, "Please enter the second number". Perform the same error handling as before
// Then create a function to perform the proper math operation and print the result as: "The result is: X" where "X" is the actual result

const readlineSync = require('readline-sync');
let operation = readlineSync.question('What operation would you like to perform? ');

while (operation !== '/' && operation !== '*' && operation !== '-' && operation !== '+') {
  operation = readlineSync.question('That is not a valid operation, please enter a valid operation: ');
  if (operation === '/' || operation === '*' || operation === '-' || operation === '+') {
    console.log(`You entered a valid operation: ${operation}`);
    break;
  }
}

let firstNumber = readlineSync.question('Please enter the first number: ');
while (isNaN(firstNumber)) {
  firstNumber = readlineSync.question('This is not a number, please enter a number:');
  if (!isNaN(firstNumber)) {
    console.log(`First number: ${firstNumber}`);
    break;
  }
}

let secondNumber = readlineSync.question('Please enter the second number: ');
while (isNaN(secondNumber)) {
  secondNumber = readlineSync.question('This is not a number, please enter a number:');
  if (!isNaN(secondNumber)) {
    console.log(`Second number: ${secondNumber}`);
    break;
  }
}

function calculator(operation, firstNumber, secondNumber) {
  if (operation === '/') return +firstNumber / +secondNumber;
  if (operation === '*') return +firstNumber * +secondNumber;
  if (operation === '-') return +firstNumber - +secondNumber;
  if (operation === '+') return +firstNumber + +secondNumber;
}

console.log(`The result is: ${calculator(operation, firstNumber, secondNumber)}`);

