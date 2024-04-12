class Currency {
    constructor(code, name) {
        this._code = String(code);
        this._name = String(name);
    }

    get code() {
        return this._code;
    }

    set code(value) {
        if (typeof value === 'string') {
            this._code = value;
        }
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (typeof value === 'string') {
            this._name = value;
        }
    }

    displayFullCurrency() {
        return `${this.name} (${this.code})`;
    }
}

export default Currency;

