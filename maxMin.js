function getMax(numbers) {
    let max = numbers[0];
    for (const num of numbers) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}
const maxNum = [65, 74, 28, 66, 30, 91, 83, 102, 99,];
const max = getMax(maxNum);
console.log('Maximum number is:', max);

function getMin(numbers) {
    let min = numbers[0];
    for (const num of numbers) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}

const minNum = [65, 74, 28, 66, 30, 91, 83, 102, 99,];
const min = getMin(minNum);
console.log('Minimum number is:', min);