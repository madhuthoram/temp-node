const {readFile, writeFile} = require('fs');
console.log("start");
readFile('./content/first.txt','utf8', (err,result)=>{
    if(err){
        return;
    }
    else {
        first =result;
        readFile('./content/second.txt', 'utf8', (err,res)=>{
            if(err){
                return;
            }
            else{
                second=res;
                writeFile('./content/result-async.txt', `here is result:${first}, ${second}`, (err,res)=>{
                    if(err){
                        return;
                    }
                    else{
                        console.log("done with this task");
                    }
                })
            }
        })

    }
})
console.log("starting next");