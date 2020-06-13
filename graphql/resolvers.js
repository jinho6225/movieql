const db = require('./db');

const resolvers = {
  Query: {
    movies: () => db.getMovies(),
    movie: (_, { id }) => db.getById(id),
  },
  Mutation: {
    addMovie: (_, { name, score }) => db.addMovie(name, score),
    deleteMovie: (_, { id }) => db.deleteMovie(id),
  },
};

module.exports = resolvers;
