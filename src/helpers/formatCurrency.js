function formatCurrency(number) {
  if (typeof number !== "number") {
    console.log(number);
    return "Invalid input";
  }

  // Use Intl.NumberFormat to add commas as thousands separators
  const formatter = new Intl.NumberFormat("en-US");
  const formattedNumber = formatter.format(number);

  // Round the number to two decimal places
  const roundedNumber = number.toFixed(2);

  // Return the formatted number with ".00" suffix
  return roundedNumber.endsWith(".00")
    ? formattedNumber + ".00"
    : formattedNumber;
}

export default formatCurrency;
