let fs = require ('fs')

const dir = new Promise((resolve, reject)=> {
    fs.readdir('/','utf8',(err, file) => {
        resolve(file)
})

})

async function read() {
    let write = await dir
    console.log(write)
}
read()