const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSchema = new Schema({
	name: String,
	height: String,
	mass: String,
	hair_color: String,
	skin_color: String,
	eye_color: String,
	birth_year: String,
	gender: String,
	homeworldUrl: String,
	films: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Film',
		},
	],
});

module.exports = mongoose.model('Character', characterSchema);
