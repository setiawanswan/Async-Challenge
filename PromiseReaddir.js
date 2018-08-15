let fs = require('fs')

const read = new Promise((resolve, reject) => {
fs.readdir('/','utf8',(err,file)=>{

resolve(file)
})
    
}) 
        
read.then((data) => {
    console.log(data);
})




