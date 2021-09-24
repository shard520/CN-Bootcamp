const person = {
  name: 'Fred',
};

person.age = 94;

console.log(person.name, person.age);

let offer = 'none';
let time = 1200;

const cafe = {
  name: 'Whitesheep',
  seatingCapacity: 100,
  hasSpecialOffers: true,
  drinks: ['Cappucino', 'Latte', 'Filter Coffee', 'Tea', 'Hot Chocolate'],
  breakfastOffer: 'Free croissant with coffee',
  lunchOffer: 'Free drink with surprisingly priced sandwich',
  noOffer: 'Sorry no offer',

  openCafe() {
    if (this.hasSpecialOffers) {
      return 'Time for a special offer.';
    }
  },

  closeCafe() {
    return "We're closed, please come back tomorrow.";
  },
};

offer = 'breakfastOffer';
console.log(cafe[offer]);
console.log(cafe.openCafe());

const alarm = {
  weekendAlarm: 'no alarm needed',
  weekdayAlarm: 'get up at 7am',
  checkAlarm(day) {
    if (day === 'Saturday' || day === 'Sunday')
      return console.log(this.weekendAlarm);
    else return console.log(this.weekdayAlarm);
  },
};

alarm.checkAlarm('Thursday');
alarm.checkAlarm('Saturday');

person.favSongs = ['Little Wing', 'Paradise City', 'Cliffs of Dover'];
person.favSongs.forEach(song => console.log(song));

// Activity 1
// person.sayHi = () => console.log(`Hi, my name is ${this.name}`); // undefined
person.sayHi = function () {
  console.log(`Hi, my name is ${this.name}`);
};

person.sayHi();

// Activity 2
const pet = {
  name: 'Rex',
  typeOfPet: 'dog',
  age: 3,
  colour: 'brown',
  eat() {
    return `${this.name} is eating`;
  },
  drink() {
    return `${this.name} is drinking`;
  },
};
console.log(pet.eat());

// Activity 3
const coffeeShop = {
  branch: 'Manchester',

  drinks: {
    americano: 2,
    latte: 2.75,
    espresso: 1.8,
    capuccino: 2.8,
  },

  food: {
    toastie: 3.5,
    chips: 2,
    burger: 5,
  },

  drinksOrdered(...drinks) {
    let cost = 0;
    // Make a string of all items
    const drinksStr = drinks.join(' & ');

    // Add the cost of all items
    drinks.forEach(drink => (cost += this.drinks[drink]));

    // Convert the cost to a string and separate by the decimal place
    cost = cost.toString().split('.');
    // Take the pence part of the cost, if only 1 digit then add a 0 on the end
    cost[1] = cost[1].padEnd(2, '0');
    // Convert the cost back to a single string
    cost = cost.join('.');

    return this.displayOrder(drinksStr, cost);
  },

  foodOrdered(...food) {
    let cost = 0;
    const foodStr = food.join(' & ');

    food.forEach(item => (cost += this.food[item]));

    cost = cost.toString().split('.');
    cost[1] = cost[1].padEnd(2, '0');
    cost = cost.join('.');

    return this.displayOrder(foodStr, cost);
  },

  displayOrder(order, cost) {
    return console.log(
      `Your order of ${order} is being prepared, the total is £${cost}.`
    );
  },
};

coffeeShop.drinksOrdered('capuccino', 'espresso');
coffeeShop.drinksOrdered('latte', 'americano');
coffeeShop.foodOrdered('toastie', 'chips');
