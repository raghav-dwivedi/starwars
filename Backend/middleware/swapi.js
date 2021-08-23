const fetch = require('node-fetch');
const express = require('express');
const Film = require('../models/film');
const Character = require('../models/character');
const mongoose = require('mongoose');

const app = express();

const mongoURI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.bhzjg.mongodb.net/${process.env.MONGO_DEFAULT_DATABASE}`;

module.exports = (req, res, next) => {
	try {
		const conn = mongoose.createConnection(mongoURI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		conn.on('open', function () {
			conn.db.listCollections().toArray(async (err, collectionNames) => {
				if (err) {
					console.log(err);
					return;
				}
				// console.log(collectionNames.length);
				if (collectionNames.length == 0) {
					console.log('here');
					const data1 = await fetch('https://swapi.dev/api/films/');
					const json1 = await data1.json();
					for (let i = 0; i < json1.results.length; i++) {
						const film = new Film({
							title: json1.results[i].title,
							director: json1.results[i].director,
							producer: json1.results[i].producer,
							release_date: json1.results[i].release_date,
						});
						for (let j = 0; j < json1.results[i].characters.length; j++) {
							const data2 = await fetch(
								json1.results[i].characters[j].toString()
							);
							const json2 = await data2.json();
							const check = await Character.findOne({ name: json2.name });
							if (check) {
								check.films.push(film);
								await check.save();
								film.characters.push(check);
							} else {
								const ch = new Character({
									name: json2.name,
									height: json2.height,
									mass: json2.mass,
									hair_color: json2.hair_color,
									skin_color: json2.skin_color,
									eye_color: json2.eye_color,
									birth_year: json2.birth_year,
									gender: json2.gender,
									homeworldUrl: json2.homeworld,
								});
								ch.films.push(film);
								await ch.save();
								film.characters.push(ch);
							}
						}

						await film.save();
					}
				}
				conn.close();
			});
		});
		next();
	} catch (err) {
		console.log(err);
		next();
	}
};
