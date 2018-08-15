let fs = require('fs')

const read = new Promise((resolve, reject)=>{
    fs.readFile('./data.txt','utf8',(err,data) => {
        resolve(data)
    })
    })

    read.then((data) =>{
        console.log(data)
    })