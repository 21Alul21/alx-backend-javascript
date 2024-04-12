// Import the Currency class
import Currency from './3-currency.js';

// Define the Pricing class
class Pricing {
  constructor(amount, currency) {
    // Initialize amount and currency attributes
    this._amount = amount;
    this._currency = currency;
  }

  // Getter and setter for amount
  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value === 'number') {
      this._amount = value;
    }
  }

  // Getter and setter for currency
  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (value instanceof Currency) {
      this._currency = value;
    }
  }

  // Method to display full price
  displayFullPrice() {
    return `${this.amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert price
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

export default Pricing;
