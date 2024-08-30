const PromiseOne = new Promise((resolve, reject) => {
    console.log("Asyn work is done");
    // DB calls
    // cryptography
    // network
    setTimeout(() => {
        console.log("somu");
        resolve();
    }, 1000);
})


PromiseOne.then(function(){
    console.log("promise consumed");
})


new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function(){
    console.log("Async task 2 resolved");
})


const PromiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async Task 3");
        resolve({name:'somu',email:'example@gmail.com'})
    }, 1000);
}).then(function(user){
    console.log(user);
})

const PromiseFour  =new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username:"somu",password:"123"})
        }else {
            reject('ERROR:Somrthing went wrong');
        }
        
    }, 1000);
})
PromiseFour.then(function(user){
    return user.username;
}).then((username)=>{
console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log(`finally the promise is either resolved or  rejected.`)
})


const PromiseFive= new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username:"javascript",password:"123"})
        }else {
            reject('ERROR:js went wrong');
        }
        
    }, 1000);
})


async function consumePromiseFive() {
    try {
        const response = await PromiseFive;
        console.log(response);
    } catch (error) {
        console.log(`ERROR`)
    }
}
consumePromiseFive();