
//Task 1
const square = num => {
    const result = num * num;
    console.log(result);
};

square(5); // Logs 25 to the console

//Task 2

const welcomeMessage = (name, age) => {
    console.log(`Welcome ${name}, you are ${age} years old.`);
};


welcomeMessage('Alice', 30); // Logs "Welcome Alice, you are 30 years old." to the console

//Task 3
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 28
};

const { firstName, lastName } = person;
console.log('First Name:', firstName, 'Last Name:', lastName);

//Task 4
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = [...array1, ...array2];
console.log(combinedArray);

// Task 5

const calculateArea = (length = 1, width = 1) => {
    return length * width;
};

// Usage examples:
console.log(calculateArea(5, 4)); // Logs 20 to the console
console.log(calculateArea());     // Logs 1 to the console (both parameters default to 1)









