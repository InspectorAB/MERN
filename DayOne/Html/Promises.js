let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if(a==3){
        resolve('Success')
    }else{
        reject('failed')
    }
})

p.then((message) => {
    console.log('This is in the then ' + message)
}).catch((message) => {
    console.log('this is in the catch' + message)
})


const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
})

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree    
]).then((messages) => {
    console.log(messages)
})



//The Promise object represents the eventual completion of an
// async operations and its result value.

// three states
// pending
// fullfilled
// rejected

const promiseOne = new Promise(function(resolve, reject){
    // async task
    // DB calls, ajax
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 3000)
})

promiseOne.then(function(){
    console.log('Promise consumend')
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task 2');
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"AD",email:"AD@abc.com"})
    },1000)
}).then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error)
        {
            resolve({username:"ABCD",password:"1234"})
        }else{
            reject('something went wrong')
        }
    })
}).then((user) => {
    console.log(user);
}).then((username) => {
    console.log(username)
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('enddddd'))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"javascript",password:"123"})
        }else{
            reject('Error: JS went wrong');
        }
    }, 5000)
})

async function consumepromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }catch(error){
        console.log(error);
    }

}

consumepromiseFive()