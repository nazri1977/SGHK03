function findLargestNumber(arr) {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }

    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

// Example usage
const numbers = [3, 5, 2, 8, 1];

function printArrayInOneLine(arr) {
    let output = "";
    for (let i = 0; i < arr.length; i++) {
        output += arr[i] + " ";
    }
    console.log(output.trim());
}


printArrayInOneLine(numbers);
console.log("The largest number in the above array is " + findLargestNumber(numbers)); // Output: 8
