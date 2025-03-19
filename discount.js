/* 
upto 100 --> 100
more than 100 --> 90
more than 200 --> 70
*/
function discountedPrice(quantity) {
    if (quantity <= 100) {
        const total = quantity * 100;
        return total;
    }
    else if (quantity <= 200) {
        const total = quantity * 90;
        return total;
    }
    else {
        const total = quantity * 70;
        return total;
    }
}
const totalPrice = discountedPrice(101);

console.log("Total price after discount:", totalPrice);

// Layered discount
/* 
first100 --> 100
100to200 --> 90
above200 --> 70
*/
function layeredDiscount(count) {
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;
    if (count <= 100) {
        const total = count * first100Price;
        return total;
    }
    else if (count <= 200) {
        const first100Total = 100 * first100Price;
        const remainingCount = count - 100;
        const remainingCountTotal = remainingCount * second100Price;
        const total = first100Total + remainingCountTotal;
        return total;
    }
    else {
        first100Total = 100 * first100Price;
        second100Total = 100 * second100Price;
        const remainingCount = count - 200;
        const remainingCountTotal = remainingCount * above200Price;
        const total = first100Total + second100Total + remainingCountTotal;
        return total;
    }
}
const totalPriceWithLayeredDiscount = layeredDiscount(100);
console.log("Total price after layered discount:", totalPriceWithLayeredDiscount);