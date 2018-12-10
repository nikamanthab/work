const express = require("express");
const {mongoose} = require('./mongoose.js');
const {Answer} = require('./../models/answer.js');

const answers = [
	{
		_id:'1',
		text: 'a',
	},{
		_id:'2',
		text: 'b',
	},{
		_id:'3',
		text: 'c',
	},{
		_id:'4',
		text: 'd',
	},{
		_id:'5',
		text: 'e',
	}
	]


Answer.insertMany(answers).then((res)=>{
	console.log(res);
	res.tatus(200).send();
},(e)=>{console.log(e);});

