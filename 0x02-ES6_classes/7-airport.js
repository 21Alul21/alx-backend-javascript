export default class Airport {
  constructor(name, code) {
    this._name = String(name);
    this._code = String(code);
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
