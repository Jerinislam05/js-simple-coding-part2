function getMax(numbers) {
  let max = numbers[0];
  for (const num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
const maxNum = [65, 74, 28, 66, 30, 91, 83, 102, 99];
const max = getMax(maxNum);
// console.log('Maximum number is:', max);

const minNum = [65, 74, 28, 66, 30, 91, 83, 102, 99];
function getMin(numbers) {
  let min = numbers[0];
  for (const num of numbers) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}
const min = getMin(minNum);
// console.log('Minimum number is:', min);

// get cheapest phone from the array
const mobiles = [
  { name: "samsung", price: 20000, camera: "16mp" },
  { name: "symphony", price: 16000, camera: "12mp" },
  { name: "apple", price: 200000, camera: "16mp" },
  { name: "nokia", price: 22000, camera: "16mp" },
];

function findCheapest(mobiles) {
  let cheap = mobiles[0];
  for (const mobile of mobiles) {
    if (mobile.price < cheap.price) {
      cheap = mobile;
    }
  }
  return cheap;
}
const cheapest = findCheapest(mobiles);
console.log("the cheapest phone is:", cheapest);

// get the most expensive phone from the same array
function findExpensive(mobiles) {
  let expensive = mobiles[0];
  for (const mobile of mobiles) {
    if (mobile.price > expensive.price) {
      expensive = mobile;
    }
  }
  return expensive;
}
const expensiveMob = findExpensive(mobiles);
console.log("the expensive phone is:", expensiveMob);
