//changes
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')



const JWT_SECRET = 'sdjkfh8923yhjdksbfma@#*(&@*!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjk'


var mongoose = require("mongoose"),
  User = mongoose.model("User");

exports.loginUser = function (req, res) {
    const { username, password } = req.body
	const user = await User.findOne({ username }).lean()

	if (!user) {
		return res.json({ status: 'error', error: 'Invalid username/password' })
	}

	if (await bcrypt.compare(password, user.password)) {

		const token = jwt.sign(
			{
				id: user._id,
				username: user.username
			},
			JWT_SECRET
		)

		return res.json({ status: 'ok', data: token })
	}

    res.json({ status: 'error', error: 'Invalid username/password' })
    
};
