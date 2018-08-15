
let fs = require('fs')


const read = new Promise((resolve, reject) => {
fs.readFile('./data.txt','utf8',(err,file)=>{

resolve(file)
})
    
}) 


        
async function hasil() {
  let rest = await read
  console.log(rest)
}
hasil()
