/* Objective 1: Understand What JavaScript is and Explain its Use in Web Development */

console.log("Hello World");

var firstName = "David";
let lastName = "Stinnett";
const favoriteFood = "Tacos";

/* var is a pre ES6 way of declaring a variable 

variables declared with var can be changed without errors. While this may sound good, this can lead to confusing and buggy code. 

cost and let allow for declaring variables in a more manageable way

A const variable is a variable that cannot be changed later in the code. const is short for constant. 

const fistName = "Alice";
firsName = "Bob"; <=== this would generate an error

This fixes issues of buggy or confusing code, but sometimes need to change variables.

let allows for the creation of malliable variables.

As a general rule, use const unless you otherwise can't, then use let. 

*/

/* Primiative Data Types 

Strings: Strings are blocks of text, and are defined by having single or double quotes

Numbers: literally numbers

Booleans: true/false or on/off statements. 

Undefined and Null: typeless types. Undefined means literall undefined. console.log(unknownVar); //undefined

null is an object that we set when we want to tell other developers that the item they are looking for exists, but there is no value associated with it. Undefined is set by the JavaScripts language, null is set by the developer. 

*/

/* Objective 2: Explain Global Object in JavaScripts and be Able to Use the Math Object */

/* ==== Challenge 1: ====
  - Create a variable named `name`
  - Assign it's value to your first and last name 
  - Does this variable need to be a constant? It depends completely on you! It should be a const variable IF you intend to never change your name.
*/

// code for `name` goes here
const name = "david stinnett";

/* ==== Challenge 2: ====
  - Create a variable called `age`
  - UNLESS you've descovered a very important secret in life, you should  probably allow for `mutability` here.
*/

// code for `age` goes here
let age = "29";

/* ==== Challenge 3: ====
  - Create a variable called `myLocation`
  - Base the value on where you're currently sitting. Consider if this is something that could change eventually.
*/

// code for `myLocation` goes here
let myLocation = "Powhatan, Virginia";

/* ==== Challenge 4: ====
  - Create a variable called `faveBook` 
  - Consider if this is some data about yourself that could change.
*/

// code for `faveBook` goes here
let favBook = "The Screwtape Letters";

/* ==== Challenge 5: ====
  - Create a variable called `faveBand` 
  - Consider if this is some data about yourself that could change.
*/

// code for `faveBand` goes here
let favBand = "Invisible, Inc.";

/* ==== Challenge 6: ====
  - Problem create a variable called `faveFood` 
  - Consider if this is some data about yourself that could change.
*/

// code for `faveFood` goes here
let favFood = "Sushi";

/* ==== Challenge 7: ====
  - Look at the function declaration named `example` below
  - Comment `block scope` where you see block scope
  - Comment `function scope` where you see function scope
*/
/* block scope */
function example() {
  /* function scope */
  if (true) {
    /* function scope */
  }
}
/* block scope */

// Check your work against some potential solutions when you're finished: https://codepen.io/lambdaschool/pen/ejbEGN?editors=0012

/* OBJECTIVE 2 - EXPLAIN GLOBAL OBJECT IN JAVASCRIPT AND BE ABLE TO USE THE MATH OBJECT 

Calculators were the first major function of computers. In JavaScript, we have built-in math operators.

STANDARD OPERATORS

JavaScript can preform any standard operations, like addition, subtraction, multiplication, and division on integers and strings. 

1 + 1 returns 2
2*2 returns 4
2 - 2 returns 0
2 / 2 returns 1

The following also works:

const num1 = 2
const num2 = 2

num1 + num2 returns 4

You can also apply operators to strings

const string1 = "My name is "
const string2 = "Bob"

string1 + string2 returns "My name is Bob"

Something to be aware of is the modulo operator %

% will return to remainder that occurs when you divide to numbers. 

so, 

10 % 3 returns 1, because 10/3 is 3 with a remainder of 1.

Math is an object built into javascript that allows for math functionality.

we can apply functions to the math object as in the following:

Math.pow

We can use the pow method on Math to return a number raised to an exponent. It will take two numbers, the first is the base and the second is the exponent the base will be raised to. 

Math.pow(5,2) calculates 5 squared, so returns 25.

Math.pow(2,2) returns 4
Math.pow(3,2) returns 9
Math.pow(3,3) returns 27

Math.round, Math.floor, Math.ceil

Math also has methods that will round numbers for us. .round will round a number to the nearest whole number. .floor will always round a number down to the nearest whole number. .ceil wll round up to the nearest whole number.

TRUTHINESS

Boolean values are true or false binary values. When using an if statement or other statement that expects a boolean value (such as !, NOT), if the expression given is not a Boolean value, JavaScript will do something called type coercion and transform whatever is given into a Boolean value. This is known as "truthy" and "falsey". Every data type has some truthiness to it. Every data type has some truthiness to it.

items interpreted as true:

true
1
' '
[]
{}
function() {}

items interpreted as false:

false
0
undefined
null
""

Comparison Operators

Javascript has a number of logical operators, > >= < <= = == === !). These work as one would expect them too. Greater than, less than, and so on. 

We use these operators to evaluate two expressions. As the computer runs the code, the operator will return either a true (if the statement is true) or a false (is the statement is not true)

1 > 2; false
2 <3; true
10 >= 10; true
"cat" === "cat"; true
"cat" === "Cat"; false

1 === 1; "true"
1 === "1"; false

LOGICAL OPERATORS

We can also combine two equality expressions and ask if either of them is true, both or true, or neither is true. To do this, we will use Logical Operators.

&& signifies and. 

100 > 10 && 10 === 10 will return true because both are true

10 === 9 && 10 === 10 will return false because both statements are not true

|| signifies or.

it returns true or false if either statement is true. 

10 === 9 || 10 === 10 

returns true because one of the statements is true`

NOTE: Logical operators are evaluated in order, and the computer will skip any redundant expressions. Example, when using &&, if the first expression is false, then the computer will not evaluate the second expression because && requires both expressions be true.

Parenthesis take precedence, as with Order of Operations


Magic Number Birthday Game:
Set birthMonth and birthDay equal to whatever your birth date is and this code will find your birthday

*/

let magicNumber = 7;
let birthMonth;
let birthDay;

// Multiply by the month of your birth
magicNumber = magicNumber * birthMonth;

// Subtract 1
magicNumber = magicNumber - 1;

// Multiply by 13
magicNumber = magicNumber * 13;

// Add the day of your birth
magicNumber = magicNumber + birthDay;

// Add 3
magicNumber = magicNumber + 3;

// Multiply by 11
magicNumber = magicNumber * 11;

// Subtract by month of your birth
magicNumber = magicNumber - 2;

// Subtract the day of your birth
magicNumber = magicNumber - 22;

// Divide by 10
magicNumber = magicNumber / 10;

// Add 11
magicNumber = magicNumber + 11;

// Divide by 100
magicNumber = magicNumber / 100;

console.log(magicNumber);
