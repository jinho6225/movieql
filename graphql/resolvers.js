const db = require('./db');

const resolvers = {
  Query: {
    movies: (_, { rating, limit }) => db.getMovies(limit, rating),
    movie: (_, { id }) => db.getMovie(id),
    suggestions: (_, { id }) => db.getSuggestions(id),
  },
};

module.exports = resolvers;
