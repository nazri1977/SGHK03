// Object Literal

// 1. Creat an object literal representing a person
const person = {
	// 2. Added properties
	firstName: "John",
	lastName: "Doe",
	age: 25,
	hobbies: ["reading", "coding", "eating"],
	// 3. Adding a method
	greet: function () {
		console.log("Hello, my name is " + person.firstName + " " + this.lastName);
	},
};

// 4. Accessing object properties
console.log(person.firstName);
console.log(person.age);
person.greet();

// 5. Modifying object properties
