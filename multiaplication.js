function woodQuantity(chair, table, bed) {
    const perChair = 3;
    const perTable = 10;
    const perBed = 50;
    
    const totalChair = chair * perChair;
    const totalTable = table * perTable;
    const totalBed = bed * perBed;
    const totalWood = totalChair + totalTable + totalBed;
    return totalWood;
}
const woodNeeded = woodQuantity(4, 2, 1);

console.log('Total wood needed:', woodNeeded, 'cft');

function shopping(shirt, pant, shoe) {
    const perShirt = 500;
    const perPant = 700;
    const perShoe = 1000;
    const totalShirt = shirt * perShirt;
    const totalPant = pant * perPant;
    const totalShoe = shoe * perShoe;
    const totalCost = totalShirt + totalPant + totalShoe;
    return totalCost;
}
const cost = shopping(2, 1, 1);
console.log('Total cost:', cost, 'Tk');