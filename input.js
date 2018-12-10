const rl=require('readline');

r1=rl.createInterface({
    input:process.stdin,
    output:process.stdout
});

function interView(){

    return new Promise((res,rej)=>{
        ask("How much users u wanna add ?")
        .then((data)=>fillBuffer([],data)).then((data)=>{
            res(data);
        })
        .catch((err)=>console.log(err));
    });


}

async function fillBuffer(buffer,n){
    for(let i=0;i<n;i++){
        await boiler(buffer);
         };
         return buffer;
     }
  

function boiler(buffer){
    return new Promise((res,rej)=>{
        ask("Enter name age with a space").then((data)=>{
            var temp={};
           var k=data.split(' ');
            temp["name"]=k[0];
            temp["age"]=k[1];
            buffer.push(temp);
            res("done");                
    })
});
}





function ask(data){
    return new Promise((resolve,reject)=>{
r1.question(data+"\n",(answer=>resolve(answer)));
    })

}

module.exports=interView;


createHash("")