const getTotal = (amounts) => {
  let total = 0;
  amounts.forEach((amount) => {
    total += amount;
  });

  return total;
};

const getDiscount = (discountValue, amounts) => {
  return getTotal(amounts) * (discountValue / 100);
};

const getTotalWithDiscount = (discountValue, amounts) => {
  return getTotal(amounts) - getDiscount(discountValue, amounts);
};

export { getTotal, getDiscount, getTotalWithDiscount };
