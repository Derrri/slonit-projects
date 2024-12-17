function calculateTotalPurchaseAmount(purchaseAmounts) {
  let totalAmount = 0;
  
  purchaseAmounts.forEach((purchaseAmount) => {
      totalAmount += purchaseAmount;
  });

  return totalAmount;
}

const topThreeCustomerPurchases = [10000, 20000, 30000];

console.log(`Общая стоимость покупок трех самых ценных клиентов: ${calculateTotalPurchaseAmount(topThreeCustomerPurchases)}`);