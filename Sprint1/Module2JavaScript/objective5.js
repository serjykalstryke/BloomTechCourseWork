// Objective 5 - Understand Javascript Functions, Why We Use Them and Be Able to Write Correct Function Syntax

// Introduction to Functions
// Functions allow developers to repeat sections of code with just a single command. Consider, for a moment, you want to "program" a robot to bake you cookies. The steps might include:

//addFlour
//addEggs
//addChocolateChips
//preheatOven
//bakeCookies.

//A function would collect these steps into a container called bakeCookies(). Then, running bakeCookies() would run all of the steps in the function. The goal is to produce DRY code, or Don't Repeat Yourself.

//Before we dive into syntax, study the following example and predict the output:

function myFunc() {
  console.log("this is my function");
}

myFunc();

//What would the output be? Naturally, the console would read "this is my function". But why? The function is called, and the function is run. The function is run because it is called. And you can run it as many times as you want, you just need to call it by its name.

//Function Syntax. Similar to how we use const, let, and var to declare variables, we use the keyword function to declare a function. The syntax is as follows:

function myFunc() {
  //code to be run
}

//The function keyword tells whatever is running your program that what follows is a function and treats it as such. After that comes the functions name - we like to give them names that are descriptive of what they do. Then, we have the parentheses. The parentheses are where we can pass in arguments. We'll get to that in a moment. Finally, we have the curly braces. The curly braces are where we put the code that we want to run when the function is called.

function logsHello() {
  console.log("Hello");
}

//Now, we can call the function by its name:

logsHello();

//Function Declaration Hoisting. JavaScript utilizes a two-pass compiler when executing lines of code that we write. This means that anytime we run JavaScript in the browser, the browser will take two passes over our code. The first pass builds up references to all our code, declaring variables and functions and the like. The second pass applies values to the references that were found, thus actually running the code.

//Function declarations are defined in the first pass. The compiler is made aware of the function declaration adn adds it to the top of the execution order for the code. This concept of putting a function higher in the execution order for later use is known as hoisting.

//What does this mean for us? It means that function declarations can be invoked before they are defined! Consider the following:

//This code is valid above the definition

console.log(add(2, 4)); //logs 6

function add(a, b) {
  return a + b;
}

//This is an odd behavior to new developers. It can be used as a feature or introduce bugs if not understood properly. Be aware that hoistin applies to function declarations and not function expressions or arrow functions.

//Function Expressions. Function expressions are a way to define a function without giving it a name. They are defined using the const or let keywords. They are defined using the following syntax:

const add = function (a, b) {
  console.log(a + b);
};

add(2, 4); //logs 6

//Notice the function doesn't actually have a name. This is what we refer to as an anonymous function. Because we are using a const named add we don't need to name out function anything. We can simply execute the function when add is reference by invocation.

//Why do this and not use function declarations? Because we have more control over our code now. We can pass the function as an argument to another function, we can return the function from another function, and we can assign the function to a variable.

//Arrow Functions. Arrow functions are a new way to define functions in JavaScript. They are a more concise way to write function expressions. They are defined using the following syntax:

const add = (a, b) => {
  console.log(a + b);
};

add(2, 4); //logs 6

//Notice that the arrow function is defined using the const keyword. This is because arrow functions are always anonymous. They are also defined using the => syntax. The => syntax is known as the fat arrow. The fat arrow is used to define the function. The code to be run is placed inside the curly braces.

//There are some subrules to the syntax. If the function only has one argument, the parentheses can be omitted. If the function only has one line of code, the curly braces can be omitted. If the function only has one line of code and that line is a return statement, the curly braces and return keyword can be omitted.

//When not to use arrow functions. Arrow functions are great for simple functions. But, they are not great for complex functions. Consider the following:

const add = (a, b) => a + b;

//This is a great function. It is concise and easy to read. But, what if we wanted to add a console.log statement to the function? We would have to rewrite the function. Consider the following:

const add = (a, b) => {
  console.log(a + b);
  return a + b;
};

//This is a more complex function. It is not as easy to read as the first function. It is also not as easy to debug. If we wanted to add a console.log statement to the first function, we would simply add the console.log statement. With the second function, we would have to rewrite the entire function.

//Other times to avoid arrow functions are:

//Event handlers (Unless inside a class constructor), Object methods, prototype methods, and methods in general, anytimes you need to use arguments Object.
