// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     }catch(error){
//         console.log(error);
//     }
// }

// const promiseOne = new Promise(function(resolve,reject){

// })

// getAllUsers()

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => console.log(error) )

const promiseThree = new Promise(async function(resolve,reject){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if(response){
        resolve(response);
    }else{
        reject('Something went sideways');
    }
}).then((response) =>{
    return response.json()
}).then((data) =>{
    console.log(data);
})
.catch((error) => console.log(error))


// E.S 6.0
//Arrow function
//Object or Array destructuring(introduction of let and cons keyword)
// Asyc, Await, callback

// to run javascript code in cross browser
// it requires transpiler -> babeljs
// bundling

