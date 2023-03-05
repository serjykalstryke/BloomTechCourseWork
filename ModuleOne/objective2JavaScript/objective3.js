// Objective 03 - Write Control Flow Using if Else Statements

// Control Flow id the order in which code is executed of evaluated

// A lot of times in code, we want parts of the code to only run if some event happens. This can be called control flow or conditional logic. An implication of this is that not all the code written will be executed. This is the foundation of modern learning algorithms, which can modify themselves based on user input.

// A basic form of control flow is the if else statement.

if (hours < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

// In the above, if the condition in parentheses is met, the following section in the first set of curly brackets will be true, otherwise, the statement in the else statement is true.

if (1 + 1 === 2) {
  console.log("This is true!");
}


// elseif is a way of chaining if statements together.

if (day="monday") {
  greeting="I hate mondays"
  console.log(greeting)
} elseif (day="tuesday"){
  greeting="only 4 more workdays until friday"
  console.log(greeting)
} elseif (day="Wednesday") {
  greeting="Hump Day!!!"
  console.log(greeting)
} elseif (day="Thursday") {
  greeting="Only one more day until Friday!"
  console.log(greeting)
} else {
  greeting="TGIF"
  console.log(greeting)
}

// Notice in the above, the ending is an else statement and is the last logical possibility, assuming weekends are days off. 

// Another thing to be aware of is that if any statement in the chain returns true, the rest of the chain will be skipped. 

if (1+1===3) {
  console.log("this will be skipped")
} elseif (1+1===2) {
  console.log("this code will be run")
} elseif (1+1===2) {
  console.log("this code will not run, despite also being true")
}

// it is generally best to have non-redundant and readable code, so when possible, end your if statements with an else that acts as a default state. 

if (1+1===3) {
  console.log("this will be skipped")
} elseif(1+1===5) {
  console.log("this will also be skipped")
} else {
  console.log("this else statement code will run")
}