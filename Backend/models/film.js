const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const filmSchema = new Schema({
	title: String,
	director: String,
	producer: String,
	release_date: String,
	imageUrl: String,
	characters: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Character',
		},
	],
});

module.exports = mongoose.model('Film', filmSchema);
