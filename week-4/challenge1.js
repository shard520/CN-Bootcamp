class Bunny {
  constructor(name) {
    this._name = name;
    this._hops = 0;
    this._favFood = 'carrots';
  }

  get name() {
    return this._name;
  }

  get hops() {
    return this._hops;
  }

  get favFood() {
    return this._favFood;
  }

  increaseHops() {
    this._hops++;
  }

  logHops() {
    console.log(`${this._name} has done ${this._hops} hops.`);
  }

  set favFood(food) {
    this._favFood = food;
  }
}

const tom = new Bunny('Tom');
const dick = new Bunny('Dick');
const harry = new Bunny('Harry');

console.log(tom, dick, harry);

tom.increaseHops();
tom.increaseHops();
tom.increaseHops();

tom.logHops();

console.log(dick.favFood);

dick.favFood = 'more carrots';

console.log(dick.favFood);
