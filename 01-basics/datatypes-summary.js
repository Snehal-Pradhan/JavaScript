// Primitive
// 7 types

// String, number, boolean, null, undefined, symbol, bigint

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTeml = null;

let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 6863863685761685n


// Reference (non-primitive)

// array, objects, functions

const heros =["shaktiman","naagraj","doga"]
let myObj = {
    name:"somu",
    age : 18,
}

const myFunction = function(){
    console.lof("hello world")
}

console.log(typeof myFunction) // type => object funtion
 // https://262.ecma-international.org/5.1/#sec-11.4.3