const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const swapi = require('./middleware/swapi');

// const authRoutes = require('./routes/auth');
const filmRoutes = require('./routes/film');

const mongoURI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.bhzjg.mongodb.net/${process.env.MONGO_DEFAULT_DATABASE}`;

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, PATCH, DELETE'
	);
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	next();
});

app.use(swapi);
// app.use('/auth', authRoutes);
app.use('/', filmRoutes);

mongoose
	.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((result) => {
		console.log('Database connnected');
		app.listen(8080);
	})
	.catch((error) => {
		console.log(error);
	});
