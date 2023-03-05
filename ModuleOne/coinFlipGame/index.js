var coinFlip = Math.round(Math.random());

// Initial code
// if (coinFlip === 1) {
//   console.log("Heads");
// } elseif(coinflip)

// else {
//   console.lof("Tails");
// }

// console.log(coinFlip);

// for (x<=5, x++) {
// coinFlip=Math.round(Math.random(x));
// if(coinFlip%2=0) {
//   console.log("Heads")
// } else {
//   console.log("Tails")
// }
// }

function coinFlipper() {
  return Math.round(Math.random() * 100);
}

const numFlips = 5; // Change this to the number of flips you want to simulate

for (let i = 0; i < numFlips; i++) {
  const flip = coinFlipper();
  const result = flip % 2 === 0 ? "Heads" : "Tails";
  console.log(`Flip ${i + 1}: ${result} (${flip})`);
}
