export default class Building {
  constructor(sqft) {
    this._sqft = sqft; // eslint-disable-line no-underscore-dangle
  }

  get sqft() {
    return this._sqft; // eslint-disable-line no-underscore-dangle
  }

  evacuationWarningMessage() { // eslint-disable-line class-methods-use-this
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
