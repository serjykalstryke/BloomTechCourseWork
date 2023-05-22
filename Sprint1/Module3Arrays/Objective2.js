//There will be times when you need to edit data inside of arrays; we have access to a few methods in JavaScript to do so

// .length() - returns the number of items in an array

// .push() - adds an item to the end of an array

// .pop() - removes the last item from an array

// Example of push() and pop()

const flavors = ["chocolate chip", "sugar", "peanut butter", "lemon crisp"];
flavors.push("vanilla");
console.log(flavors); // ["chocolate chip", "sugar", "peanut butter", "lemon crisp", "vanilla"]

flavors.pop();
console.log(flavors); // ["chocolate chip", "sugar", "peanut butter", "lemon crisp"]

// .shift() - removes the first item from an array
// .unshift() - adds an item to the beginning of an array

// Example of shift() and unshift()
const flavors = ["chocolate chip", "sugar", "peanut butter", "lemon crisp"];
flavors.shift();
console.log(flavors); // ["sugar", "peanut butter", "lemon crisp"]

flavors.unshift("vanilla");
console.log(flavors); // ["vanilla", "sugar", "peanut butter", "lemon crisp"]
