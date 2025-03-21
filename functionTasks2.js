// Task1 --> Find the lowest number in the array below.
const numbers = [190, 120, 165, 137, 3];
function findMin(numbers) {
  let minimum = numbers[0];
  for (const number of numbers) {
    if (number < minimum) {
      minimum = number;
    }
  }
  return minimum;
}
const minimum = findMin(numbers);
console.log(minimum);
// Task2 --> Find the friend with the smallest name.
const names = ["rahim", "robin", "rafi", "ron", "rashed"];
function getShortName(names) {
  let word = names[0];
  for (const name of names) {
    if (name.length < word.length) {
      word = name;
    }
  }
  return word;
}
const shortestName = getShortName(names);
console.log(shortestName);
// Task3 --> Your task is to calculate the total budget required to buy electronics:

/* laptop = 35000 tk
tablet = 15000 tk
mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required. */
function calculateElectronicsBudget(laptop, tablet, mobile) {
  const perLaptop = 35000;
  const perTablet = 15000;
  const perMobile = 20000;

  const totalLaptop = perLaptop * laptop;
  const totalTablet = perTablet * tablet;
  const totalMobile = perMobile * mobile;
  const totalCost = totalLaptop + totalTablet + totalMobile;
  return totalCost;
}
const totalCost = calculateElectronicsBudget(1, 3, 2);
console.log(totalCost);
// Task4 --> You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.
const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];
function findAveragePhonePrice(phones) {
  let totalCost = 0;
  for (const phone of phones) {
    totalCost = totalCost + phone.price;
  }
  const averagePrice = totalCost / phones.length;
  return averagePrice;
}
const totalAveragePrice = findAveragePhonePrice(phones);
console.log(totalAveragePrice.toFixed(2));
// Task5 --> (Hard)For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
function getTotalSalary(employees) {
    let totalSalary = 0;
    for (const employee of employees) {
       const currentSalary = employee.starting + (employee.increment * employee.experience);
       totalSalary = totalSalary + currentSalary;
    }
    return totalSalary;
}
const increment = getTotalSalary(employees);
console.log(increment);
