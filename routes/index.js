const express = require('express');
const Movie = require('../models/Movie');
const mongoose = require('mongoose');

const router = express.Router();

/* GET home page */
router.get('/', (req, res) => res.render('index'));

/*GET movies page */

router.get('/movies', (req, res) => {
  Movie.find({})
        .then((moviesArray) => {
            console.log(moviesArray);
            res.render("movies", { moviesArray })
        })
        .catch(error => console.log(`An error occurred when trying to get the DB data: ${error}`));
});

router.get("/movies/:id", (req, res) => {
    const { id } = req.params;

    Movie.findById(id)
        .then((movieDetails) => {
            console.log(movieDetails)
            res.render("details", movieDetails)
        })
        .catch(error => console.log(`An error occurred when trying to get the DB data: ${error}`))
})

module.exports = router;
