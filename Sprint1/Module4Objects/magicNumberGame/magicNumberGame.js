let magicalNumber = 7;

//Ask user for birth month and day

let birthMonth = Number(prompt("What month were you born in?"));
let birthDay = Number(prompt("What day were you born on?"));

// Multiply by the month of your birth
magicalNumber = magicalNumber * birthMonth;

// Subtract 1
magicalNumber = magicalNumber - 1;

// Multiply by 13
magicalNumber = magicalNumber * 13;

// Add the day of your birth
magicalNumber = magicalNumber + 9;

// Multiply by 11
magicalNumber = magicalNumber * 11;

// Subtract the month of your birth
magicalNumber = magicalNumber - 2;

// Subtract the day of your birth
magicalNumber = magicalNumber - birthDay;

// Divide by 10
magicalNumber = magicalNumber / 10;

// Add 11
magicalNumber = magicalNumber + 11;

// Divide by 100
magicalNumber = magicalNumber / 100;

console.log(magicalNumber);
