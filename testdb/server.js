const express = require("express");
const {mongoose} = require('./db/mongoose.js');
const bodyParser = require('body-parser');
const {Answer} = require('./models/answer.js');

const app = express(); 
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.get('/get-answer',(req,res)=>{
	Answer.find({}).then((answers)=>{
		//console.log(answers);
		res.status(200).send(answers);
	},(e)=>{
		//console.log(e);
	});});

app.listen(3000,()=>{console.log('SERVER IS UP ON PORT 3000');});

module.exports = {app,}