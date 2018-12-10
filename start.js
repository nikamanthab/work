
    var ta=sel("textarea");

(function(){
   

var vis=sel(".area").childNodes[1];
ta.value="";
vis.innerHTML+="";

sel("button").addEventListener("click",()=>{
    ta.value+="*______*";
});


sel(".lol").addEventListener("click",(e)=>{
    console.log(ta.value);
    var arr=ta.value.match(    /([^ \* \_])[a-z 0-9 \. \s ( )]+/gi  );
    if(! (Array.isArray(arr))){
return ;
    }
    vis.innerHTML="";
    arr.forEach((x,i)=>{
        vis.innerHTML+=x;
        if(i!==arr.length-1){
            vis.appendChild(createT());
        }else{
            if(ta.value.substring(ta.value.length-8)=="*______*"){
                vis.appendChild(createT());     
            }
        }
    })
});

sel(".copy").addEventListener("click",function(){
sel("#fo").select();
document.execCommand("copy");
});



function createT(){
    var textBox=document.createElement("span");
    textBox.innerHTML="<input type='text'>";
    textBox.className="texty";
    return textBox;
}
    
})();

 function sel(query){
        return document.querySelector(query);
    }
