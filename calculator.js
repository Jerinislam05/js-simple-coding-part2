function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}
function subtract(num1, num2) {
    const difference = num1 - num2;
    return difference;
}
function multiply(num1, num2) {
    const product = num1 * num2;
    return product;
}
function divide(num1, num2) {
    const product = num1 / num2;
    return product;
}
function calculator(num1, num2, operation) {
    if (operation === "add") {
        const result = add(num1, num2);
        return result;
    }
    else if (operation === "subtract") {
        const result = subtract(num1, num2);
        return result;
    }
    else if (operation === "multiply") {
        const result = multiply(num1, num2);
        return result;
    }
    else if (operation === "divide") {
        const result = divide(num1, num2);
        return result;
    }
    else {
        return "Invalid operation!";
    }
}
const result = calculator(3, 4, "multiply");
console.log(result);