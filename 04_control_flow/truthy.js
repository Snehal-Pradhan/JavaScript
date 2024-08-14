const userEmail ="abc@gmail.com";
if(userEmail){
    console.log("got user email");
}
else{
    console.log("dont have user email")
}


// falsy values 
// false ,0,-0 BigInt On,"",null,undefined,NaN 

// truthy values
// "0", 'false', " ", [],{}, funtion(){}

// if(userEmail.length === 0){
//     console.log("Array is Empty");
// }

const emptyObj ={}
if(Object.keys(emptyObj).length === 0){
   console.log("Object is empty"); 
}

// Nullish Coalscing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1= null ?? 10
var1 = undefined ?? 15
val1 = null ?? 10 ?? 20 // priority is the for first
console.log(val1);


// terninary operator

// condition ? true : false
const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")