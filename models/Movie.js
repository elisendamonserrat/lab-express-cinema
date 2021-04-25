const moongose = require('mongoose');

const { Schema, model } = moongose;

const movieSchema = new Schema({
  title: String,
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: [String],
});

const Movie = model('Movie', movieSchema);

module.exports = Movie;