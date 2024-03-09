// Declare a global variable
var globalVar = "This is a global variable";

function myFunction() {
    // Declare a local variable with the same name
    var globalVar = "This is a local variable";

    // Log the value of the local variable
    console.log("Inside the function, globalVar is:", globalVar);
}

// Log the value of the global variable
console.log("Outside the function, globalVar is:", globalVar);

// Call the function
myFunction();