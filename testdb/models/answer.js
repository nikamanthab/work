var mongoose = require('mongoose');

const Answer = mongoose.model('answer' ,{
	_id: {
		type: String,
		trim: true,
	},
	text: {
		type: String,
		trim: true,
	}
});

module.exports = {Answer,}