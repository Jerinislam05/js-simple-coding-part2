// Problem-01 : Tax Calculator
function calculateTax(salary, expense, taxRate) {
  const remaining = salary - expense;
  const tax = remaining * taxRate;
  return tax;
}
const monthlyTax = calculateTax(10000, 3000, 0.2);
console.log(monthlyTax);

// Problem 02 : Notification Generator
function sendNotification(email) {
  const parts = email.split("@");
  const username = parts[0];
  const domain = parts[1];
  const msg = username + " sent you an email from " + domain;
  return msg;
}
const email = sendNotification("farhan34@yahoo.com");
console.log(email);

// Problem-03: Checking Digits Inside a Name
function checkDigitsInName(names) {
  if (typeof names !== "string") {
    return "Invalid Input";
  }
  for (const name of names) {
    if (!isNaN(name) && name !== " ") {
      return true;
    }
  }
  return false;
}
const checkName = checkDigitsInName("!@#");
console.log(checkName);
// Problem 04 : Calculate Admission Final Score
function calculateFinalScore(obj) {
  if (
    typeof obj !== "object" ||
    obj === null ||
    typeof obj.name !== "string" ||
    typeof obj.testScore !== "number" ||
    typeof obj.testScore > 50 ||
    typeof obj.schoolGrade !== "number" ||
    typeof obj.schoolGrade > 30 ||
    typeof obj.isFamily !== "boolean"
  ) {
    return "Invalid Input";
  }
  let finalScore = obj.testScore + obj.schoolGrade;
  if (obj.isFamily) {
    finalScore = finalScore + 20;
  }
  return finalScore >= 80;
}
const rajibsScore = calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFamily: true });
console.log(rajibsScore);

// Problem 05:  Predict Average Waiting Time
function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "invalid Input";
  }
  let totalTime = 0;
  for (const time of waitingTimes) {
    totalTime = totalTime + time;
  }
  let averageTime = Math.round(totalTime / waitingTimes.length);
  let remainingCandidates = serialNumber - waitingTimes.length - 1;
  if (remainingCandidates <= 0) {
    return 0;
  }
  return remainingCandidates * averageTime;
}
const isratsSerial = waitingTime([3, 5, 7, 11, 6], 10);
console.log(isratsSerial);
