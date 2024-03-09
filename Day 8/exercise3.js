// Higher-order function
function mathOperation(num1, num2, operation) {
    return operation(num1, num2);
}

// Callback functions for different operations
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if(num2 === 0) {
        throw new Error("Cannot divide by zero");
    }
    return num1 / num2;
}

// Using the mathOperation function
let result1 = mathOperation(10, 5, add);        // Add
let result2 = mathOperation(10, 5, subtract);   // Subtract
let result3 = mathOperation(10, 5, multiply);   // Multiply
let result4 = mathOperation(10, 5, divide);     // Divide

console.log(result1); // 15
console.log(result2); // 5
console.log(result3); // 50
console.log(result4); // 2
