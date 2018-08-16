export function centsToDollars(cents) {
  var dollars = cents / 100;
  return (
    dollars.toLocaleString("en-US", {style:"currency", currency:"USD"})
  );
}
