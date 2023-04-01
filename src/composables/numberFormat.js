const numberFormat = (value) => {
  if (isNaN(value)) {
    return value;
  }

  return value.toLocaleString("en-US", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
};

export { numberFormat };
