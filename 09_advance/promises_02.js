/* const PromiseOne = new Promise (function(resolve,reject){
    //db calls
    // cryptography 
    // network calls
    setTimeout(function(){
        console.log("async js is great.")
    },1000)
    resolve();
})
PromiseOne.then(function(){
    console.log(`promise consumed`);
})


new Promise (function(resolve,reject){
    setTimeout(function(){
        console.log(`async task two`);
        resolve();
    },1000)
    
}).then(function(){
    console.log(`work done`);
})


const PromiseThree = new Promise (function(resolve,reject){
    setTimeout(function(){
        console.log("heelo");
        resolve({username:"somu",age:18,weight:67,unit:"kg"})
    },1000)
})
 */
/* PromiseThree.then(function(user){
    console.log(user);
})


const PromiseFour = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        let error=true;
    if (!error) {
        resolve({username:"snehal",age:18,weight:67,unit:"kg"})
    }
    else{
        reject("ERROR:Something went wrong")
    }  
    },1000)
})
PromiseFour.then(function(user){
    console.log(user);
    return user.age;
}).then((user_age)=>{
    console.log(`age of user is ${user_age}`)
})
.catch((statement)=>{
    console.log("unable to get data, ",statement);
})
.finally(()=>{
    console.log("promise is either resolved or rejected.")
}) */
const PromiseFive = new Promise((resolve, reject) => {
    setTimeout(function(){
        let error = false;
        if(!error){
             console.log("5th promise");
             resolve({
            username:"somu",age:19,weight:68,unit:"kg"
        });
        }
        else{
            reject(`ERROR: something went wrong.`);
        }
    },1000)
})

const consumePromiseFive = async function () {
    try {
      const response = await PromiseFive;
      console.log(response);  
    } catch (error) {
        console.log(`something went wrong`);
    }
    
}

consumePromiseFive();
/* 
async function getAllUsers() {
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json()
    console.log(data)
    } catch (error) {
        console.log("ERROR : Something went wrong.");
    }
    
}

 */

 fetch('https://jsonplaceholder.typicode.com/users')
 .then(function(response){
     return response.json();
 })
 .then((data)=>{
    console.log(data)
 })
 .catch(()=>{
    console.log("ERROR");
 })

