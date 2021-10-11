class Cars {
  _cost = 1.5;

  constructor(reg, duration) {
    this._reg = reg;
    this._duration = duration;
    this._fee = this._duration * this._cost;
    this.displayFee();
  }

  get fee() {
    // Convert the cost to a string and separate by the decimal place
    const cost = this._fee.toString().split('.');
    // Take the pence part of the cost, if only 1 digit then add a 0 on the end
    cost[1] = cost[1].padEnd(2, '0');
    // Convert the cost back to a single string
    this._fee = cost.join('.');

    return this._fee;
  }

  displayFee() {
    console.log(
      `${this._reg} parking for ${this._duration} hours, cost is: £${this.fee}`
    );
  }
}

const batmobile = new Cars('B4TM4N1', 5);
