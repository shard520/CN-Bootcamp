const fs = require("fs");
const x = process.argv;

class Card {
  constructor(
    name,
    level,
    image,
    topStat,
    rightStat,
    bottomStat,
    leftStat,
    element = "none"
  ) {
    this.name = name;
    this.level = level;
    this.image = image;
    this.topStat = topStat;
    this.rightStat = rightStat;
    this.bottomStat = bottomStat;
    this.leftStat = leftStat;
    this.element = element;
  }
  async add() {
    let cards = await JSON.parse(fs.readFileSync("./stats.json"));
    cards.Cards.push(this);
    fs.writeFileSync("./stats.json", JSON.stringify(cards));
  }
}

const card = new Card(x[2], x[3], x[4], x[5], x[6], x[7], x[8], x[9]);
card.add();
