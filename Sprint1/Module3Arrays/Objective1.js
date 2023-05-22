//In the previous lessons, we learned the three basic data types in JavaScript: strings, numbers, and booleans and how to assign them to variables

// We then discussed how a variable could only point to a single string, number or Boolean. In many cases, however, we want to point to a collection of data of either the same or different types. For example, what if we wanted to keep track of cookie flavors using a single variable, flavors. We can do that using arrays. We can think of arrays as storage containers for collections of data. Building an array is simple: declare a variable and set it to []. We can then add however many strings, numbers or booleans we want to the container adn access those items whenever we want.

// Example 1
const flavors = ["chocolate chip", "sugar", "peanut butter", "lemon crisp"];

// Like the string data type, which has a build-in .length property, the array also has a built-in .length property. In fact, the array has many useful built-in methods. Just as string.length() counts the characters, array.length() will return the number of items in an array:

// Example 2

const flavors = ["chocolate chip", "sugar", "peanut butter", "lemon crisp"];
console.log(flavors.length); // 4

// We can access an item at any time in an array; we need to call the item by its position. Items are given a numerical position (index) according to where it is in the array, in order. An array's numerical order always starts with 0. So the first item is in the 0 index, the second in the 1 index, the third in the 2, and so on (this can be tricky at first, but just remember, arrays always start at 0)

// Example 3
const flavors = ["chocolate chip", "sugar", "peanut butter", "lemon crisp"];
console.log(flavors[0]); // chocolate chip
console.log(flavors[1]); // sugar
console.log(flavors[2]); // peanut butter
console.log(flavors[3]); // lemon crisp

// You can return the last array item by using some logic.

// Example 4

const flavors = ["chocolate chip", "sugar", "peanut butter", "lemon crisp"];
console.log(flavors[flavors.length - 1]); // lemon crisp

// We can assigning and reassigning any index in the array using the bracket/index and an =

const flavors = ["chocolate chip", "sugar", "peanut butter", "lemon crisp"];
flavors[0] = "vanilla";
console.log(flavors); // ["vanilla", "sugar", "peanut butter", "lemon crisp"]

// let's make a "magic 8 ball" program using arrays. We'll use an array to store the possible answers, and then randomly select one of those answers to return to the user.

// Example 5

function magicEightBall() {
  const answer = Math.floor(Math.random() * fortunes.length);
  const fortunes = [
    "Yes",
    "Definitely",
    "You can rely on it",
    "Without a doubt",
    "most likely",
    "hmm...i'm not sure",
    "yikes, nope",
    "try again",
    "very doubtful",
    "no",
  ];

  fortune = fortunes[answer];

  console.log(fortune);
}

magicEightBall();
