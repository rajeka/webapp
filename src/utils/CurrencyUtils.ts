class CurrencyUtils {
  static formatToUSD(value: number): string {
    //Converts a number to USD currency format
    //return `$${value.toFixed(2)}`;
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  }
}
export default CurrencyUtils;
