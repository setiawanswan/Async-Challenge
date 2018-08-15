let promise1 = new Promise(function(resolve, reject){
    for (let i = 1; i <= 3; i++) {
        setTimeout(() => {
          console.log(i)
        }, 1000);
      }
}).then ( () =>
console.log('Done') 
)
 

let promise2 = new Promise(function(resolve,reject){
  setTimeout(resolve,2000,'Done');  
})
Promise.race([promise1, promise2]).then(function(value){
    console.log(value);

})
