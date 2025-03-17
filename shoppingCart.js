const products = [
    { name: "Shirt", price: 350, quantity: 4 },
    { name: "Pant", price: 500, quantity: 2 },
    { name: "Shoes", price: 920, quantity: 1 },
    { name: "Belt", price: 100, quantity: 2},
  ];

function cartTotal(products) {
    let totalCost = 0;
    for (const product of products) {
        const thisProdCost = product.price * product.quantity;
        totalCost = totalCost + thisProdCost;
    }
    return totalCost;
}
const totalShoppingCost = cartTotal(products);
console.log("Total shopping cost is:", totalShoppingCost);
