//functions
function select(query){
    return document.querySelector(query);
}

let t1 = select("#q1");
let t2 = select("#q2");
let t3 = select("#q3");
let t4 = select("#q4");
let t5 = select("#q4");
let score = select("#score");

let body = {
	help: 'hi'
}

let string = JSON.stringify(body);


select("#check").addEventListener("click",function () {
	var xmlh = new XMLHttpRequest();
	xmlh.onreadystatechange = function () {
		if(this.readyState == 4 && this.status == 200){
			let mark = 0;
			let answers = JSON.parse(this.response);
			if(t1.value === answers[0].text){mark+=1;}
			if(t2.value === answers[1].text){mark+=1;}
			if(t3.value === answers[2].text){mark+=1;}
			if(t4.value === answers[3].text){mark+=1;}
			if(t5.value === answers[4].text){mark+=1;}
			let mString = `<h1>SCORE:</h1><br><h2>${mark}/5</h2>`
			score.innerHTML=mString;
		}
	}
	xmlh.open('POST' ,'/get-answer',true);
	xmlh.setRequestHeader('Content-Type','application/json; charset=UTF-8');
	xmlh.send(string);
});

//'http://'+window.location.host+'