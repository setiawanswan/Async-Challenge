// let fs = require('fs')

// fs.readdir('./', 'utf8',((err,files) => {
//     console.log(files)
// }))

const fs = require('fs');

// destination.txt will be created or overwritten by default.
fs.copyFile('data.txt', 'destination.txt', (err) => {
  if (err) throw err;
  console.log('data.txt was copied to destination.txt');
});