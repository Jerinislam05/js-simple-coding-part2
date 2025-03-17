const products = [
  { name: "Shirt", price: 350 },
  { name: "Pant", price: 500 },
  { name: "Shoes", price: 920 },
];
function getTotalPrice(products) {
  let total = 0;
  for (const product of products) {
    total = total + product.price;
  }
  return total;
}
const total = getTotalPrice(products);

console.log("Total price is:", total, "tk");
