const Film = require('../models/film');

exports.getFilms = async (req, res, next) => {
	try {
		let films = await Film.find().select('-characters');
		films.forEach((film) => {
			film.imageUrl = 'http://localhost:8080/images/' + film._id + '.jpeg';
		});
		res.status(200).json({
			message: 'Fetched films successfully.',
			films: films,
		});
	} catch (err) {
		console.log(err);
	}
};

exports.getCharacters = async (req, res, next) => {
	try {
		const filmId = req.param.filmId;
		const film = await Film.findById(filmId).populate('characters');
		res.status(200).json({
			characters: film.characters,
		});
	} catch (err) {
		console.log(err);
	}
};
