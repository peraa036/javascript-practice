let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
// condition ? codeIfTrue : codeIfFalse
console.log(`Total: $${purchaseAmount - purchaseAmount * (discount/100)}`);