const db = {
  movies: [
    {
      id: 0,
      name: 'superman',
      score: 88,
    },
    {
      id: 1,
      name: 'iron man',
      score: 98,
    },
    {
      id: 2,
      name: 'hsasdf',
      score: 77,
    },
    {
      id: 3,
      name: 'ddd',
      score: 44,
    },
    {
      id: 4,
      name: 'aaa',
      score: 28,
    },
  ],
  getMovies: function () {
    return this.movies;
  },
  getById: function (id) {
    const filteredMovies = this.movies.filter((movie) => movie.id === id);
    return filteredMovies[0];
  },
  deleteMovie: function (id) {
    const cleamedMovies = this.movies.filter((movie) => movie.id !== id);
    if (this.movies.length > cleamedMovies.length) {
      this.movies = cleamedMovies;
      return true;
    } else {
      return false;
    }
  },
  addMovie: function (name, score) {
    const newMovie = {
      id: `${this.movies.length + 1}`,
      name,
      score,
    };
    this.movies.push(newMovie);
    return newMovie;
  },
};
module.exports = db;
