const getTotal = (array) => {
  let total = 0;
  array.forEach((amount) => {
    total += parseInt(amount);
  });
  return total;
};

export { getTotal };
