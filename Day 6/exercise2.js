
const prompt = require('prompt-sync')();
function determineGrade(score) {
    let grade;

    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else if (score >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    console.log("Grade: " + grade);
}

// Get user input
let userInput = prompt("Enter your score: ");
let score = parseInt(userInput);

// Check if the input is a valid number
if (!isNaN(score)) {
    determineGrade(score);
} else {
    console.log("Invalid input. Please enter a numeric score.");
}

