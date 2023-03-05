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
const coinFlipper = () => {
  return Math.round(Math.random() * 100);
};

const numFlips = 5; // Change this to the number of flips you want to simulate

for (let i = 1; i <= numFlips; i++) {
  const flip = coinFlipper();
  const result = flip % 2 === 0 ? "Heads" : "Tails";
  console.log(`Flip ${i}: ${result} (${flip})`);
}

console.log("Flipping completed");
