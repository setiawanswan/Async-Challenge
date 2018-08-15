const axios = require('axios');

// axios.get('https://jsonplaceholder.typicode.com/users')
// .then(function(response){
//     console.log(response.data);
// })

// axios.get('https://jsonplaceholder.typicode.com/posts')
// .then(function(response){
//     console.log(response.data);
// })

async function getUser(){
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(response.data);
    } catch (error) {
        console.log(error);
        
    }
} 
getUser ()
// axios.get('/users?id= 1')
// .then(function (response){
//     console.log(response);
// })

// axios.post('/user', {
//     firstName : "Leanne ",
//     lastName : "Graham"
// })
// .then(function(response){
//     console.log(response);

// })
// .catch(function (error){
//     console.log(error);
// });

function getPost (){
    return axios.get('https://jsonplaceholder.typicode.com/users')
}

function getUsers (){
    return axios.get('https://jsonplaceholder.typicode.com/posts')
}

axios.all([getPost(),getUsers()])
    .then(axios.spread(function(res,perms){
        let ps = res.data;
        let gs = perms.data;
        let v = ps.map(x => {
            x.user = gs.filter(z => z.id === x.userid)

            return x
        })

        console.log(v)
    }))