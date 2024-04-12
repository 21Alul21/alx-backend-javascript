import Currency from './3-currency';

class Pricing extends Currency {
    constructor(amount, currency) {
        super(currency.code, currency.name); // Call the Currency constructor using super
        this._amount = amount;
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

    // Method to display full price
    displayFullPrice() {
        return `${this.amount} ${this.name} (${this.code})`;
    }

    // Static method to convert price
    static convertPrice(amount, conversionRate) {
        return amount * conversionRate;
    }
}

export default Pricing;

