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

select("#check").addEventListener("click",function () {
	var xmlh = new XMLHttpRequest();
	xmlh.onreadystatechange = function () {
		if(this.readyState == 4 && this.status == 200){
			let mark = 0;
			let answers = JSON.parse(this.response);
			console.log(answers);
			if(t1.value === answers[0].text){mark+=1;}
			if(t2.value === answers[1].text){mark+=1;}
			if(t3.value === answers[2].text){mark+=1;}
			if(t4.value === answers[3].text){mark+=1;}
			if(t5.value === answers[4].text){mark+=1;}
			console.log(mark);
			let mString = `<h1>SCORE:</h1><br><h2>${mark}/5</h2>`
			console.log(mString);
			score.innerHTML=mString;
		}
	}
	xmlh.open('GET' ,'http://'+window.location.host+'/get-answer');
	xmlh.send();
});

