//1. Promise.catch()

let promise1 = new Promise(function(resolve, reject){
    throw 'Uh-oh!';

});

promise1.catch(function(error){
    console.log(error);
});

// 2.Promise.then()
let promise = new Promise(function(resolve, reject){
    resolve('Succes!');

})

promise.then(function(value){
    console.log(value);
});

// 3.Promise.race()

let promise2 = new Promise(function(resolve, reject){
    setTimeout(resolve, 500, 'one');
});

let promise3 = new Promise(function(resolve,reject){
    setTimeout(resolve, 100, ' two');
});

Promise.race([promise2, promise3]).then(function(value){
    console.log(value);
})