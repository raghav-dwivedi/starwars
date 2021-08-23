const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

exports.signup = async (req, res, next) => {
	try {
		const email = req.body.email;
		const password = req.body.password;
		const hashedPassword = await bcrypt.hash(password, 12);
		const user = new User({
			email: email,
			password: hashedPassword,
		});
		const result = await user.save();
		res.status(201).json({
			message: 'User created!',
			userId: result._id,
		});
	} catch (err) {
		console.log(err);
	}
};

exports.login = async (req, res, next) => {
	const email = req.body.email;
	const password = req.body.password;
	try {
		const user = await User.findOne({ email: email });
		if (!user) {
			const error = new Error('A user with this email does not exist.');
			error.statusCode = 401;
			throw error;
		}
		let loadedUser = user;
		const isEqual = await bcrypt.compare(password, user.password);
		if (!isEqual) {
			const error = new Error('Wrong password');
			error.statusCode = 401;
			throw error;
		}
		const token = jwt.sign(
			{
				email: loadedUser.email,
				userId: loadedUser._id.toString(),
			},
			`${process.env.JWTSecret}`,
			{ expiresIn: '1h' }
		);
		res.status(200).json({
			token: token,
			userId: loadedUser._id.toString(),
		});
	} catch (err) {
		console.log(err);
	}
};
