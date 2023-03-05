// Objective 4 - Write a Basic for Loop and While Loops

// A loop is just a set of instructions that  tells the computer to repeat a set of instructions a certain number of times. Javascript has two types of loops, a for loop and a while loop. A for loop is used when you know how many times you want to repeat a set of instructions. A while loop is used when you don't know how many times you want to repeat a set of instructions.

// A for loop is written like this:

for (var i = 0; i < 10; i++) {
  console.log(i);
}

// The first part of the for loop is the initialization. This is where you set the variable that will be used to count the number of times the loop has run. In this example, the variable is i. The second part of the for loop is the condition. This is where you tell the computer how many times you want the loop to run. In this example, the loop will run 10 times. The third part of the for loop is the increment. This is where you tell the computer how to increment the variable that is counting the number of times the loop has run. In this example, the variable i is incremented by 1 each time the loop runs.

// The ++ operator is used to increment a variable by 1. The -- operator is used to decrement a variable by 1. The += operator is used to increment a variable by a certain amount. The -= operator is used to decrement a variable by a certain amount. The *= operator is used to multiply a variable by a certain amount. The /= operator is used to divide a variable by a certain amount.

// A while loop is written like this:

while (i === true) {
  console.log("i is true");
}

// The while loop will run as long as the condition is true. In this example, the loop will run as long as the variable i is true. If the variable i is set to false, the loop will not run.

//The most practical example of loops will use a counter, an outside variable affected by what's inside the loop. A more practical example of a while loop, using a counter, is written like this:

let counter = 0;
while (count < 10) {
  console.log(count);
  count += 2;
}

//the return value of the while loop is the last value of the counter. In this example, the return value is 10.

//Infinite loops are loops that never end. They will break your code. To avoid infinite loops, make sure that the condition in the loop will eventually be false. In the example above, the condition is count < 10. This means that the loop will run as long as the counter is less than 10. Once the counter reaches 10, the condition will be false and the loop will stop running.

//and example of an infinite loop is written like this:

for (let i = 0; i >= onabort; i++) {
  console.log(i);
}
