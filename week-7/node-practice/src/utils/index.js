const moviesArray = [];

class Movie {
  constructor(title, actor = 'unspecified') {
    this.title = title;
    this.actor = actor;
  }

  add() {
    moviesArray.push(this);
  }
}

module.exports = {
  Movie,
  moviesArray,
};
