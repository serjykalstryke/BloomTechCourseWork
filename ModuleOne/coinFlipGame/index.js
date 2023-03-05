// Initial code

// var coinFlip = Math.round(Math.random());
// if (coinFlip === 1) {
//   console.log("Heads");
// } elseif(coinflip)

// else {
//   console.lof("Tails");
// }

// console.log(coinFlip);

//Functional code using modern JavaScript
// const coinFlipper = () => {
//   return Math.round(Math.random() * 100);
// };

// const numFlips = 5; // Change this to the number of flips you want to simulate

// for (let i = 1; i <= numFlips; i++) {
//   const flip = coinFlipper();
//   const result = flip % 2 === 0 ? "Heads" : "Tails";
//   console.log(`Flip ${i}: ${result} (${flip})`);
// }

// console.log("Flipping completed");

// Final version that turns entire coinflip process into a function that you can pass the exact number of coin flips into

const coinFlipSimulator = (numFlips) => {
  //notice that numFlips is defined in the function, so this function can be reused anywhere you need similar functionality but a different number of operations for this functionality
  const coinFlipper = () => {
    return Math.round(Math.random() * 100);
  };

  for (let i = 1; i <= numFlips; i++) {
    //notice that numFlips is defined in the function, so this function can be reused anywhere you need similar functionality but a different number of operations for this functionality
    const flip = coinFlipper();
    const result = flip % 2 === 0 ? "Heads" : "Tails";
    console.log(`Flip ${i}: ${result} (${flip})`);
  }

  console.log("Flipping completed");
};

// Example usage
coinFlipSimulator(5); //this is where you would input the number of coin flips
