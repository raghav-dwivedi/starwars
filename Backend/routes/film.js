const express = require('express');

const router = express.Router();

const filmController = require('../controllers/film');

router.get('/films', filmController.getFilms);

router.get('/film/:filmId', filmController.getCharacters);

module.exports = router;
